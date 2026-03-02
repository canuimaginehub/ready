# Guía de Despliegue en Ferozo Hosting

Para poder desplegar exitosamente tu proyecto "Angela Health Hub" en la carpeta `/web` de tu hosting Ferozo, sigue estos pasos:

## 1. Archivos que he Modificado en tu Local
He configurado dos archivos clave para que el proyecto funcione en un entorno Apache/PHP como Ferozo:

1. **`vite.config.ts`**: Se agregó la propiedad `base: "/"` al final de la configuración. Esto asegura que al compilar, el HTML busque los archivos CSS y JS en la raíz (o relativo a la ruta base). *Nota: si tu aplicación no se abre cuando entras a tu dominio principal, sino cuando entras explícitamente a `tudominio.com/web`, deberás cambiar la línea `base: "/"` por `base: "/web/"` (ver los comentarios dentro de `vite.config.ts`).*
2. **`public/.htaccess`**: He creado este archivo, que tiene las instrucciones para que Apache redirija las sub-rutas (como `/login`, `/dashboard`) al archivo `index.html`. Sin esto, un usuario que intente entrar directamente a una URL interna obtendría un error "404 No Encontrado" de Ferozo.

## 2. Paso a Paso para Desplegar

Dado que estás trabajando con React y Vite, el código que tienes actualmente es el de "desarrollo". Ferozo no entiende React ni TypeScript; requiere HTML, CSS y JS "compilados" (o transpiliados). 

Para subir tu página web deberás hacer lo siguiente:

### Compilar la Aplicación
Abre tu terminal en la carpeta original del proyecto (`/Users/norbertodimarco/Desktop/Ultima/angela-health-hub`) y corre en tu terminal:

```bash
npm install     # Instala las dependencias del proyecto (si no lo has hecho)
npm run build   # Compila el proyecto a código estático
```
*(Si usas `bun`, los comandos son `bun install` y `bun run build`)*

### Subir los Archivos a Ferozo
1. Al ejecutar `npm run build`, se creará una carpeta llamada **`dist`** dentro de tu proyecto.
2. Ingresa a tu panel de control de Ferozo.
3. Ve a "Administrador de Archivos" o utiliza FileZilla (u otro cliente FTP/SFTP).
4. Navega hasta la carpeta **`/web`** o **`/public_html`** (dependiendo de la estructura de tu Ferozo).
5. **Copia todo el contenido** de la carpeta local `dist` y pégalo directamente dentro de esa carpeta en tu hosting. Asegúrate de incluir el archivo `.htaccess` (que por ser un archivo oculto, a veces los sistemas operativos no lo muestran a simple vista).

¡Y listo! Al ingresar a tu dominio, deberías ver la aplicación funcionando sin problemas con sus rutas de React activas.
