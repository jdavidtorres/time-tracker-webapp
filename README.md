# WebApp de Registro de Horas

Esta es una aplicación web para que profesionales independientes puedan registrar tareas, tiempos, cobros y generar sus facturas. La aplicación está construida con Angular y PrimeNG, y se comunica con un backend externo a través de una API REST utilizando JWT para la autenticación.

## Requisitos

- Node.js
- Angular CLI

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd workspace-blank
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```

## Uso

1. Inicia la aplicación:
   ```sh
   ng serve
   ```
2. Abre tu navegador y navega a `http://localhost:4200`.

## Construcción y ejecución del contenedor Docker

1. Construye la imagen Docker:
   ```sh
   docker build -t webapp-registro-horas .
   ```
2. Ejecuta el contenedor Docker:
   ```sh
   docker run -p 4200:4200 webapp-registro-horas
   ```

## Contribución

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica o corrección de errores:
   ```sh
   git checkout -b nombre-de-tu-rama
   ```
3. Realiza tus cambios y haz commit:
   ```sh
   git commit -m "Descripción de tus cambios"
   ```
4. Sube tus cambios a tu repositorio fork:
   ```sh
   git push origin nombre-de-tu-rama
   ```
5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
