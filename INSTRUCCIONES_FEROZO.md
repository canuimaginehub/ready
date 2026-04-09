# Despliegue Directo a Ferozo

Este repositorio ha sido reestructurado para facilitar el despliegue directo en Ferozo. 

## ⚠️ Reglas Arquitectónicas (Agent Knowledge)
Para futuros desarrollos y sesiones con agentes AI, ten en cuenta las siguientes reglas obligatorias de este repositorio:
1. **Un Solo contact.php**: El archivo `contact.php` (y cualquier otro backend script) debe hospedarse y modificarse **exclusivamente en la raíz del repositorio de GitHub**. NUNCA debes crear una copia de `contact.php` dentro de la carpeta `_source/public/`. Si lo haces, el proceso de construcción de Vite (`npm run build` ejecutado en GitHub Actions) sobreescribirá destructivamente el archivo de la raíz con la copia de `_source/public/`.
2. **Hosting en la Raíz**: Las rutas del frontend (`vite.config.ts`, `.htaccess`) y los llamados fetch de las páginas en React (como `fetch('/contact.php')`) deben apuntar explícitamente a la raíz `/`, ya que el sitio web principal se eliminó del subdirectorio `/web/` para hospedarse de manera directa en el root domain en Ferozo.

## Estructura
- **`_source/`**: Contiene todo el código fuente de la aplicación (React, Vite, Tailwind, etc.).
- **Raíz (`/`)**: Aquí se alojan los archivos que Ferozo leerá directamente cuando los usuarios entren a tu página web (el `.htaccess`, `favicon`, y los futuros `index.html` y la carpeta `assets/`).

## ¿Cómo actualizar la página web? (Compilar)

Dado que Ferozo sirve los archivos presentes en la raíz, cada vez que hagas un cambio en tu código dentro de `_source/`, debes compilar la aplicación para generar el nuevo `index.html` y los nuevos `assets/`.

Pasos a seguir en tu computadora (donde tengas Node.js instalado):

1. Abre la terminal y **entra a la carpeta `_source`**:
   ```bash
   cd _source
   ```
2. Instala las dependencias (si es la primera vez):
   ```bash
   npm install
   ```
3. Ejecuta el comando de compilación:
   ```bash
   npm run build
   ```

**¡Listo!** Vite leerá la configuración especial que preparamos y automáticamente colocará el archivo `index.html` y la capeta `assets/` en la raíz principal del proyecto, exactamente como lo necesitas para tu hosting. Luego solo tienes que subir todo al FTP o hacer push a Github si tienes despliegue automático.
