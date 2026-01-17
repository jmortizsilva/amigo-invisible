# Amigo Invisible - Lista de Regalos

Aplicación web para compartir listas de regalos en el amigo invisible.

## Características

- 🎁 Cada participante puede añadir enlaces a regalos que le gustaría recibir
- 🖼️ **Previsualizaciones automáticas** con imagen, título y descripción
- ✏️ Edita y elimina tus propios enlaces
- 👀 Ve las listas de todos los participantes
- 🌐 Interfaz web sencilla y moderna
- 💾 Almacenamiento automático en archivo JSON
- ☁️ **Listo para desplegar en la nube gratis**

## Instalación Local

1. Asegúrate de tener Node.js instalado
2. Abre una terminal en esta carpeta
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso Local

1. Inicia el servidor:
   ```
   npm start
   ```

2. Abre tu navegador en: http://localhost:3000

## 🚀 Desplegar en Internet

**¡Esta aplicación está lista para compartirse con amigos fuera de tu red!**

Lee la guía completa en: **[DESPLIEGUE.md](DESPLIEGUE.md)**

### Despliegue rápido en Render (Recomendado):

1. Sube este código a GitHub
2. Crea una cuenta en [Render.com](https://render.com)
3. Conecta tu repositorio de GitHub
4. Despliega en 1 click
5. Comparte la URL con tus amigos

**Es gratis y toma solo 5 minutos** ✨

## Cómo funciona

1. Cada persona se identifica con su nombre
2. Puede añadir enlaces a productos que le gustarían
3. La app extrae automáticamente título, imagen y descripción del enlace
4. Todos pueden ver las listas de los demás
5. Solo puedes eliminar tus propios enlaces

## Tecnologías

- **Backend**: Node.js + Express
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Scraping**: Cheerio + Node-fetch (para previsualizaciones)
- **Almacenamiento**: JSON file (o fácilmente migrable a MongoDB)

## Datos

Los datos se guardan en el archivo `data.json` en la misma carpeta del proyecto.
