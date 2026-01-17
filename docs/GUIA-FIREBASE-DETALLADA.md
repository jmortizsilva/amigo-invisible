# 🔥 Guía Detallada de Firebase - Paso a Paso

Esta guía te llevará por cada pantalla de Firebase con instrucciones precisas.

---

## 📋 PASO 1: Crear cuenta en Firebase

### 1.1 Acceder a Firebase

1. Abre tu navegador
2. Ve a: **https://console.firebase.google.com/**
3. Haz clic en **"Ir a la consola"** (arriba a la derecha)
4. Inicia sesión con tu cuenta de Google (la que usas para Gmail)
   - Si no tienes, créate una cuenta de Google primero

---

## 🆕 PASO 2: Crear el Proyecto

### 2.1 Pantalla inicial

Verás una pantalla con un cuadro grande que dice:
```
"Agregar proyecto" o "Create a project"
```

1. **Haz clic en ese cuadro grande**

### 2.2 Paso 1/3 - Nombre del proyecto

Aparece un formulario:

```
Nombre del proyecto
[________________________]  ← Escribe aquí: amigo-invisible
```

1. Escribe: **`amigo-invisible`** (o el nombre que prefieras)
2. Verás que abajo se genera automáticamente un ID: `amigo-invisible-xxxxx`
3. **Haz clic en "Continuar"** (botón azul abajo)

### 2.3 Paso 2/3 - Google Analytics

Aparece:
```
¿Habilitar Google Analytics para este proyecto?
○ Sí   ● No
```

1. **Selecciona "No"** (no lo necesitamos para esto)
2. **Haz clic en "Crear proyecto"** (botón azul)

### 2.4 Espera

Verás una pantalla con:
```
Creando tu proyecto nuevo...
⏳ Configurando recursos
```

**Espera 10-30 segundos**

### 2.5 Proyecto creado

Aparece:
```
✓ Tu proyecto nuevo está listo
[Continuar]  ← Haz clic aquí
```

¡Perfecto! Ya tienes tu proyecto Firebase.

---

## 💾 PASO 3: Crear la Base de Datos

### 3.1 Panel principal

Ahora estás en el panel de Firebase. En el lado izquierdo verás un menú:

```
├─ 🏠 Descripción general del proyecto
├─ 📊 Analytics
├─ 🔨 Compilación
│   ├─ Authentication
│   ├─ Firestore Database
│   ├─ Realtime Database  ← ¡BUSCA ESTE!
│   ├─ Storage
│   └─ ...
```

1. **Haz clic en "Realtime Database"** (en la sección Compilación/Build)

### 3.2 Pantalla de Realtime Database

Verás una página con:
```
Realtime Database
Firebase Realtime Database es una base de datos NoSQL 
alojada en la nube...

[Crear base de datos]  ← Haz clic aquí
```

1. **Haz clic en "Crear base de datos"** (botón azul)

### 3.3 Ubicación de la base de datos

Aparece un modal:

```
Ubicación de Realtime Database
Elige una ubicación para tu base de datos

Ubicación de Realtime Database:
[Estados Unidos (us-central1)           ▼]

[Cancelar]  [Siguiente]
```

1. **Despliega el menú** (la flechita ▼)
2. **Selecciona la opción más cercana a ti:**
   - Si estás en España: `europe-west1` (Bélgica)
   - Si estás en Latinoamérica: `us-central1` (EE.UU.)
3. **Haz clic en "Siguiente"**

### 3.4 Reglas de seguridad

Aparece otro modal:

```
Configurar reglas de seguridad

○ Comenzar en modo bloqueado
● Comenzar en modo de prueba  ← Selecciona este

Las reglas de seguridad en modo de prueba permitirán 
a cualquiera leer y escribir en tu base de datos.

[Cancelar]  [Habilitar]
```

1. **Selecciona "Comenzar en modo de prueba"**
2. **Haz clic en "Habilitar"** (botón azul)

### 3.5 Espera

Verás:
```
⏳ Creando base de datos...
```

**Espera 10-20 segundos**

### 3.6 Base de datos creada ✓

Ahora verás la consola de tu base de datos:

```
amigo-invisible-xxxxx-default-rtdb
https://amigo-invisible-xxxxx-default-rtdb.europe-west1.firebasedatabase.app/

┌─────────────────────────────────┐
│ amigo-invisible-default-rtdb    │
│                                 │
│ null                            │ ← Está vacía, normal
│                                 │
└─────────────────────────────────┘

Pestañas: [Datos] [Reglas] [Copias de seguridad] [Uso]
```

¡Perfecto! La base de datos está creada.

---

## 🔒 PASO 4: Configurar Reglas de Seguridad (IMPORTANTE)

### 4.1 Ir a Reglas

Arriba en la pantalla de Realtime Database verás pestañas:

```
[Datos]  [Reglas] ← Haz clic aquí  [Copias de seguridad]  [Uso]
```

1. **Haz clic en la pestaña "Reglas"**

### 4.2 Editar reglas

Verás un editor de código con algo así:

```json
{
  "rules": {
    ".read": "now < 1740787200000",  // Expira en 30 días
    ".write": "now < 1740787200000"
  }
}
```

### 4.3 Reemplazar reglas

1. **Selecciona TODO el texto** (Ctrl+A)
2. **Bórralo**
3. **Copia y pega esto:**

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

### 4.4 Publicar reglas

1. **Haz clic en "Publicar"** (botón arriba a la derecha)
2. Aparecerá un mensaje: ✓ Reglas publicadas correctamente

**¿Qué hacen estas reglas?**
- Permiten a cualquiera leer y escribir en `participants`
- Para un grupo de amigos está perfecto
- No expiran (las reglas por defecto expiran en 30 días)

---

## 🔑 PASO 5: Obtener la Configuración

Ahora necesitas los datos para conectar tu aplicación.

### 5.1 Ir a configuración

1. **Haz clic en el ⚙️ (engranaje)** arriba a la izquierda, al lado del logo de Firebase
2. En el menú desplegable, **haz clic en "Configuración del proyecto"**

### 5.2 Scroll hacia abajo

Baja en la página hasta ver:

```
Tus apps
No hay apps en tu proyecto

[</>]  [🍎]  [🤖]  [⚙️]
Web    iOS  Android Unity
```

1. **Haz clic en el icono `</>`** (Web)

### 5.3 Registrar app

Aparece un formulario:

```
Agregar Firebase a tu app web

Alias de la app
[________________________]  ← Escribe aquí

☐ Configurar también Firebase Hosting para esta app

[Cancelar]  [Registrar app]
```

1. En "Alias de la app" escribe: **`amigo-invisible-web`**
2. **NO marques** la casilla de Firebase Hosting
3. **Haz clic en "Registrar app"**

### 5.4 Obtener el código de configuración

Aparece una pantalla con código:

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "amigo-invisible-xxxxx.firebaseapp.com",
  databaseURL: "https://amigo-invisible-xxxxx-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "amigo-invisible-xxxxx",
  storageBucket: "amigo-invisible-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

**IMPORTANTE:** Lo que necesitas es solo el objeto `firebaseConfig` (las 7 líneas entre llaves `{ ... }`)

### 5.5 Copiar la configuración

1. **Selecciona SOLO estas líneas:**
   ```javascript
   apiKey: "AIzaSy...",
   authDomain: "amigo-invisible-xxxxx.firebaseapp.com",
   databaseURL: "https://amigo-invisible-xxxxx-default-rtdb...",
   projectId: "amigo-invisible-xxxxx",
   storageBucket: "amigo-invisible-xxxxx.appspot.com",
   messagingSenderId: "123456789012",
   appId: "1:123456789012:web:..."
   ```

2. **Cópialas** (Ctrl+C)

3. Puedes hacer clic en **"Continuar en la consola"** (abajo)

---

## 📝 PASO 6: Configurar tu Aplicación

### 6.1 Abrir el archivo de configuración

1. En VS Code, abre: **`docs/firebase-config.js`**

Verás esto:

```javascript
// Configuración de Firebase
// IMPORTANTE: Reemplaza estos valores con los de tu proyecto Firebase

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://TU_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_PROJECT_ID.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const database = firebase.database();
```

### 6.2 Reemplazar valores

1. **Selecciona las líneas desde `apiKey` hasta `appId`** (las 7 líneas)
2. **Borra** esas líneas
3. **Pega** las que copiaste de Firebase (Ctrl+V)

Debería quedar así:

```javascript
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "amigo-invisible-12345.firebaseapp.com",
    databaseURL: "https://amigo-invisible-12345-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "amigo-invisible-12345",
    storageBucket: "amigo-invisible-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxxxx"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const database = firebase.database();
```

4. **Guarda el archivo** (Ctrl+S)

---

## ✅ PASO 7: Verificar que funciona (Opcional pero recomendado)

Antes de subir a GitHub, probemos localmente:

### 7.1 Abrir en el navegador

1. Ve a la carpeta `docs` en el explorador de archivos
2. Haz doble clic en **`index.html`**
3. Se abrirá en tu navegador

### 7.2 Probar

1. Escribe tu nombre y haz clic en "Entrar"
2. Añade un enlace de prueba:
   - URL: `https://www.amazon.es/producto-ejemplo`
   - Descripción: `Producto de prueba`
3. Haz clic en "Añadir enlace"

### 7.3 Verificar en Firebase

1. Vuelve a Firebase Console
2. Ve a **Realtime Database** → pestaña **Datos**
3. Deberías ver algo como:

```
┌─ amigo-invisible-default-rtdb
└─┬─ participants
  └─┬─ TuNombre
    └─┬─ links
      └─┬─ -NxxxxxxxxxxxXX
        ├─ url: "https://www.amazon.es/producto-ejemplo"
        ├─ description: "Producto de prueba"
        └─ addedAt: 1737134567890
```

**Si ves esto, ¡funciona perfectamente!** 🎉

---

## 🚀 PASO 8: Siguiente - Subir a GitHub

Ahora que Firebase está configurado, el siguiente paso es subir tu código a GitHub.

Continúa con la guía: **[DESPLIEGUE-GITHUB-PAGES.md](DESPLIEGUE-GITHUB-PAGES.md)** desde el "Paso 3: Subir a GitHub"

---

## ❓ Problemas Comunes

### Error: "Permission denied"

**Causa:** Las reglas de Firebase no están bien configuradas

**Solución:**
1. Ve a Firebase Console → Realtime Database → Reglas
2. Verifica que las reglas sean exactamente:
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
3. Haz clic en "Publicar"

### No aparece "Realtime Database" en el menú

**Causa:** Estás mirando en la sección equivocada

**Solución:**
1. Busca la sección "Compilación" o "Build" en el menú izquierdo
2. Despliégala si está cerrada
3. Ahí está "Realtime Database"

### El archivo firebase-config.js no guarda los cambios

**Causa:** No guardaste el archivo

**Solución:**
1. Presiona Ctrl+S (Windows) o Cmd+S (Mac)
2. Verifica que el puntito blanco al lado del nombre del archivo desaparezca

---

## 📞 ¿Necesitas más ayuda?

Si algo no funciona:
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Copia el mensaje de error
4. Busca en Google: "firebase [tu error]"

O pregúntame directamente en VS Code 😊

---

**¡Siguiente paso:** [Subir a GitHub Pages](DESPLIEGUE-GITHUB-PAGES.md) →
