let currentUser = null;

// Elementos DOM
const loginSection = document.getElementById('loginSection');
const userSection = document.getElementById('userSection');
const allParticipantsSection = document.getElementById('allParticipantsSection');
const nameInput = document.getElementById('nameInput');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userName = document.getElementById('userName');
const linkInput = document.getElementById('linkInput');
const descriptionInput = document.getElementById('descriptionInput');
const addLinkBtn = document.getElementById('addLinkBtn');
const myLinks = document.getElementById('myLinks');
const allParticipants = document.getElementById('allParticipants');

// Referencia a los participantes en Firebase
const participantsRef = database.ref('participants');

// Event Listeners
loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);
addLinkBtn.addEventListener('click', addLink);

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') login();
});

linkInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addLink();
});

// Funciones
function login() {
    const name = nameInput.value.trim();
    if (name) {
        currentUser = name;
        userName.textContent = name;
        loginSection.classList.add('hidden');
        userSection.classList.remove('hidden');
        loadMyLinks();
        loadAllParticipants();
    } else {
        alert('Por favor, introduce tu nombre');
    }
}

function logout() {
    currentUser = null;
    nameInput.value = '';
    loginSection.classList.remove('hidden');
    userSection.classList.add('hidden');
    myLinks.innerHTML = '';
}

async function addLink() {
    const url = linkInput.value.trim();
    const description = descriptionInput.value.trim();
    
    if (!url) {
        alert('Por favor, introduce un enlace');
        return;
    }
    
    // Validar que sea una URL válida
    try {
        new URL(url);
    } catch (e) {
        alert('Por favor, introduce un enlace válido (debe empezar con http:// o https://)');
        return;
    }
    
    // Deshabilitar botón mientras se guarda
    addLinkBtn.disabled = true;
    addLinkBtn.textContent = 'Obteniendo previsualización...';
    
    try {
        // Obtener metadatos de la URL
        let metadata = null;
        try {
            const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            
            if (data.status === 'success') {
                metadata = {
                    title: data.data.title || 'Sin título',
                    description: data.data.description || description || '',
                    image: data.data.image?.url || data.data.logo?.url || '',
                    url: url
                };
            }
        } catch (error) {
            console.log('No se pudo obtener previsualización, usando datos básicos:', error);
        }
        
        // Si no se pudo obtener metadata, crear una básica
        if (!metadata) {
            const urlObj = new URL(url);
            metadata = {
                title: description || urlObj.hostname.replace('www.', ''),
                description: description || '',
                image: '',
                url: url
            };
        }
        
        addLinkBtn.textContent = 'Guardando...';
        
        // Crear nuevo enlace con metadatos
        const newLink = {
            url: url,
            description: description,
            metadata: metadata,
            addedAt: Date.now()
        };
        
        // Guardar en Firebase
        await participantsRef.child(currentUser).child('links').push(newLink);
        
        // Limpiar formulario
        linkInput.value = '';
        descriptionInput.value = '';
        
        // El listener de Firebase actualizará automáticamente la UI
    } catch (error) {
        console.error('Error al añadir enlace:', error);
        alert('Error al añadir el enlace. Por favor, inténtalo de nuevo.');
    } finally {
        addLinkBtn.disabled = false;
        addLinkBtn.textContent = 'Añadir enlace';
    }
}

async function deleteLink(linkId) {
    if (confirm('¿Estás seguro de que quieres eliminar este enlace?')) {
        try {
            await participantsRef.child(currentUser).child('links').child(linkId).remove();
            // El listener de Firebase actualizará automáticamente la UI
        } catch (error) {
            console.error('Error al eliminar enlace:', error);
            alert('Error al eliminar el enlace.');
        }
    }
}

function loadMyLinks() {
    myLinks.innerHTML = '<div class="loading">Cargando tus enlaces...</div>';
    
    // Escuchar cambios en tiempo real
    participantsRef.child(currentUser).child('links').on('value', (snapshot) => {
        const links = snapshot.val();
        
        if (!links) {
            myLinks.innerHTML = '<div class="empty-message">Aún no has añadido ningún enlace</div>';
        } else {
            const linksArray = Object.entries(links).map(([id, data]) => ({ id, ...data }));
            // Ordenar por fecha (más recientes primero)
            linksArray.sort((a, b) => b.addedAt - a.addedAt);
            
            myLinks.innerHTML = '<ul class="gifts-list">' + linksArray.map(link => renderLinkCard(link, true)).join('') + '</ul>';
        }
    });
}

function loadAllParticipants() {
    console.log('loadAllParticipants() llamada');
    allParticipants.innerHTML = '<div class="loading">Cargando participantes...</div>';
    
    // Escuchar cambios en tiempo real
    participantsRef.on('value', (snapshot) => {
        console.log('Snapshot recibido:', snapshot.val());
        const participants = snapshot.val();
        
        if (!participants || Object.keys(participants).length === 0) {
            allParticipants.innerHTML = '<div class="empty-message">Todavía no hay participantes. ¡Sé el primero en añadir enlaces!</div>';
        } else {
            const participantsArray = Object.entries(participants)
                .sort(([nameA], [nameB]) => nameA.localeCompare(nameB));
            
            console.log('Participantes encontrados:', participantsArray.length);
            
            allParticipants.innerHTML = participantsArray.map(([name, data]) => {
                const links = data.links || {};
                const linksArray = Object.entries(links).map(([id, linkData]) => ({ id, ...linkData }));
                linksArray.sort((a, b) => b.addedAt - a.addedAt);
                const isCurrentUser = name === currentUser;
                
                return `
                    <div class="participant-section">
                        <h3>${name} ${isCurrentUser ? '(Tú)' : ''}</h3>
                        ${linksArray.length === 0 
                            ? '<div class="empty-message">No ha añadido enlaces todavía</div>'
                            : '<ul class="gifts-list">' + linksArray.map(link => renderLinkCard(link, false)).join('') + '</ul>'
                        }
                    </div>
                `;
            }).join('');
        }
    }, (error) => {
        console.error('Error al cargar participantes:', error);
        allParticipants.innerHTML = `
            <div class="empty-message" style="color: red;">
                ⚠️ Error al cargar participantes: ${error.message}<br>
                <small>Verifica las reglas de Firebase o recarga la página</small>
            </div>
        `;
    });
}

function renderLinkCard(link, showDelete) {
    const url = link.url;
    const metadata = link.metadata || {};
    const title = metadata.title || link.description || 'Sin título';
    const description = metadata.description || link.description || '';
    const image = metadata.image || '';
    const hostname = new URL(url).hostname.replace('www.', '');
    
    return `
        <li class="link-card ${image ? 'has-image' : ''}">
            ${image ? `
                <div class="link-image">
                    <img src="${image}" alt="${title}" onerror="this.parentElement.style.display='none'">
                </div>
            ` : ''}
            <div class="link-card-content">
                <h4 class="link-title-heading">
                    <a href="${url}" target="_blank">${title}</a>
                </h4>
                ${description && description !== title ? `<p class="link-card-description">${description}</p>` : ''}
                <a href="${url}" target="_blank" class="link-card-url">🔗 ${hostname}</a>
            </div>
            ${showDelete ? `<button class="btn btn-danger btn-delete" onclick="deleteLink('${link.id}')">Eliminar</button>` : ''}
        </li>
    `;
}

// Cargar todos los participantes al inicio (aunque el usuario no esté logueado)
// Esperar a que Firebase se inicialice completamente
setTimeout(() => {
    console.log('Iniciando carga de participantes...');
    loadAllParticipants();
}, 1000);
