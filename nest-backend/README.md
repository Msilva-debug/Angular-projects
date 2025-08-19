# Crear backend en Nest

`nest new nest-backend`

# Instalar Docker y Mongo compass

Darle permisos a la carpeta contenedora del proyecto

# Comando:

`docker compose up -d`
Para crear carpeta de db de mongo

# Comando para runear el backend:

`npm run start:dev`

## Comandos para docker

Parar proceso: docker stop `nombre-container`
Iniciar proceso: docker start `nombre-container`
`docker ps`
o
`docker ps -a `
para revisar contenedores inactivos

## Comandos para crear CRUD automatico

`nest g resource 'nombre-componente'`

## Backend en Nest

Copiar el ```.env.template``` y renombrarlo a ```.env```
