# Definición de la etapa base
FROM node:18-alpine3.17 as base

# Instalación de ts-node globalmente
RUN npm i -g ts-node

# Directorio de trabajo
WORKDIR /src/app

# Copia de los archivos package.json y package-lock.json
COPY package*.json .

# Copia de los archivos restantes
COPY . .

RUN npm install
# Exponer el puerto 4000
EXPOSE 4000

# Comando por defecto para ejecutar la aplicación
CMD [ "npm", "run", "start" ]

