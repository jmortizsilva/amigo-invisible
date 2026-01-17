# 🎁 Amigo Invisible - GitHub Pages

Aplicación web para compartir listas de regalos del amigo invisible.

**Versión optimizada para GitHub Pages + Firebase**

## 🌐 Demo en vivo

Una vez desplegado, tu aplicación estará en:
```
https://TU_USUARIO.github.io/amigo-invisible/
```

## ✨ Características

- 🎯 **Sin servidor**: Funciona con GitHub Pages (estático)
- 🔥 **Firebase**: Base de datos en tiempo real gratuita
- 📱 **Responsive**: Funciona en móvil, tablet y desktop
- 🔄 **Tiempo real**: Los cambios se ven al instante para todos
- 💰 **100% Gratis**: GitHub Pages + Firebase plan gratuito

## 🚀 Cómo desplegar

Lee la guía completa: **[DESPLIEGUE-GITHUB-PAGES.md](DESPLIEGUE-GITHUB-PAGES.md)**

### Resumen rápido:

1. **Crea proyecto en Firebase** (10 min)
   - Firebase Console → Nuevo proyecto
   - Realtime Database → Modo prueba
   - Copia la configuración

2. **Configura el código** (2 min)
   - Edita `docs/firebase-config.js`
   - Pega tu configuración de Firebase

3. **Sube a GitHub** (5 min)
   - Crea repositorio público
   - Sube la carpeta `docs/`

4. **Activa GitHub Pages** (2 min)
   - Settings → Pages
   - Source: main branch, /docs folder
   - ¡Listo! Tu URL estará lista en 2 minutos

## 📁 Estructura

```
docs/
├── index.html           # Página principal
├── styles.css           # Estilos
├── app.js              # Lógica de la aplicación
├── firebase-config.js   # Configuración de Firebase (EDITAR ESTO)
└── DESPLIEGUE-GITHUB-PAGES.md  # Guía completa
```

## 🔧 Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Firebase Realtime Database
- **Hosting**: GitHub Pages
- **CDN**: Firebase SDK desde CDN oficial

## 📖 Cómo usar

1. Cada persona abre la URL
2. Se identifica con su nombre
3. Añade enlaces con descripciones de regalos
4. Todos ven las listas en tiempo real

## 🔒 Seguridad

Las reglas de Firebase por defecto permiten lectura/escritura a todos. Para un grupo pequeño de amigos está bien. Si quieres más seguridad, puedes:

- Usar Firebase Authentication
- Restringir por dominio
- Implementar reglas más estrictas

## 💡 Notas

- Los datos se guardan en Firebase Realtime Database
- Las reglas en "modo prueba" expiran en 30 días (fácil de extender)
- El plan gratuito de Firebase es suficiente para grupos pequeños

## 🤝 Contribuir

¿Mejoras? ¡Bienvenidas! Abre un issue o pull request.

## 📄 Licencia

MIT - Úsalo libremente para tu grupo de amigos

---

**¿Dudas?** Lee la guía completa en [DESPLIEGUE-GITHUB-PAGES.md](DESPLIEGUE-GITHUB-PAGES.md)
