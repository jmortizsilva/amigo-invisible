# 🚀 Despliegue en GitHub Pages + Firebase

Esta guía te mostrará cómo desplegar la aplicación GRATIS usando GitHub Pages y Firebase.

## 📋 Requisitos

- Cuenta de GitHub (gratis)
- Cuenta de Google (para Firebase, gratis)

---

## Paso 1: Configurar Firebase (10 minutos)

### 1.1 Crear proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en **"Agregar proyecto"**
3. Nombre del proyecto: `amigo-invisible` (o el que prefieras)
4. Deshabilita Google Analytics (no es necesario)
5. Haz clic en **"Crear proyecto"**

### 1.2 Crear Realtime Database

1. En el menú lateral, ve a **"Realtime Database"**
2. Haz clic en **"Crear base de datos"**
3. Ubicación: Elige la más cercana (ej: `europe-west1`)
4. **Modo**: Selecciona **"Comenzar en modo de prueba"** (permite lectura/escritura por 30 días)
5. Haz clic en **"Habilitar"**

### 1.3 Configurar reglas de seguridad (IMPORTANTE)

1. Ve a la pestaña **"Reglas"** en Realtime Database
2. Reemplaza las reglas con esto:

```json
{
  "rules": {
    "participants": {
      "$userId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

3. Haz clic en **"Publicar"**

> ⚠️ **Nota**: Estas reglas permiten a cualquiera leer/escribir. Para producción seria, deberías usar Firebase Authentication. Para un grupo pequeño de amigos está bien.

### 1.4 Obtener configuración de Firebase

1. Ve a **Configuración del proyecto** (icono de engranaje arriba a la izquierda)
2. Baja hasta **"Tus apps"**
3. Haz clic en el icono **</>** (Web)
4. Nombre de la app: `amigo-invisible-web`
5. **NO** marques "Firebase Hosting"
6. Haz clic en **"Registrar app"**
7. Copia el objeto `firebaseConfig` que aparece

Se verá algo así:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "amigo-invisible-xxxxx.firebaseapp.com",
  databaseURL: "https://amigo-invisible-xxxxx-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "amigo-invisible-xxxxx",
  storageBucket: "amigo-invisible-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxxxx"
};
```

---

## Paso 2: Configurar el código (2 minutos)

1. Abre el archivo `docs/firebase-config.js`
2. Reemplaza todo el contenido con tu configuración:

```javascript
// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  databaseURL: "https://tu-proyecto-default-rtdb.firebaseio.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const database = firebase.database();
```

3. Guarda el archivo

---

## Paso 3: Subir a GitHub (5 minutos)

### 3.1 Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Haz clic en **"New repository"** (botón verde)
3. Nombre: `amigo-invisible`
4. Marca como **público**
5. **NO** inicialices con README
6. Haz clic en **"Create repository"**

### 3.2 Subir los archivos

Opción A - Usando Git (si lo tienes instalado):

```bash
cd "c:\Users\jmortizsilva\OneDrive\Pruebas VS code\amigo invisible"
git init
git add docs/
git commit -m "Primera versión"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/amigo-invisible.git
git push -u origin main
```

Opción B - Usando la interfaz web de GitHub:

1. En tu repositorio, haz clic en **"uploading an existing file"**
2. Arrastra TODA la carpeta `docs` (o selecciona los 4 archivos de dentro)
3. Commit: "Primera versión"
4. Haz clic en **"Commit changes"**

---

## Paso 4: Activar GitHub Pages (2 minutos)

1. En tu repositorio de GitHub, ve a **"Settings"** (Configuración)
2. En el menú lateral, haz clic en **"Pages"**
3. En **"Source"**, selecciona **"Deploy from a branch"**
4. En **"Branch"**, selecciona:
   - Branch: `main`
   - Folder: `/docs`
5. Haz clic en **"Save"**
6. Espera 1-2 minutos

¡GitHub Pages generará una URL como:
```
https://TU_USUARIO.github.io/amigo-invisible/
```

---

## ✅ ¡Listo!

**Comparte la URL con tus amigos y todos podrán:**
- Ver las listas de regalos
- Añadir sus propios enlaces
- Actualizaciones en tiempo real gracias a Firebase

---

## 🔧 Mantenimiento

### Extender las reglas de Firebase (después de 30 días)

Si pasaron 30 días y la app dejó de funcionar:

1. Ve a Firebase Console > Realtime Database > Reglas
2. Cambia la fecha en las reglas o usa las reglas que puse arriba (que no expiran pero son menos seguras)

### Actualizar la aplicación

1. Edita los archivos en la carpeta `docs`
2. Sube los cambios a GitHub (git push o interfaz web)
3. GitHub Pages se actualiza automáticamente en 1-2 minutos

---

## 🎯 Ventajas de esta solución

✅ **Totalmente gratis** (GitHub Pages + Firebase plan gratuito)  
✅ **Sin servidor** que mantener  
✅ **Actualizaciones en tiempo real** gracias a Firebase  
✅ **Rápido y confiable**  
✅ **URL fácil de compartir**  

---

## 🆘 Solución de Problemas

**Error: "Permission denied"**
- Revisa las reglas de Firebase en la consola

**No se actualizan los datos**
- Verifica que copiaste bien la configuración de Firebase
- Abre la consola del navegador (F12) para ver errores

**GitHub Pages no muestra la página**
- Asegúrate de haber seleccionado `/docs` como carpeta
- Espera 2-3 minutos después de activar Pages
- Verifica que los archivos estén en la carpeta `docs/`

---

## 📊 Límites del plan gratuito de Firebase

- **Almacenamiento**: 1 GB (suficiente para miles de enlaces)
- **Descargas**: 10 GB/mes (suficiente para uso personal)
- **Conexiones simultáneas**: 100 (más que suficiente)

Para un grupo de amigos, estos límites son más que suficientes. 🎉
