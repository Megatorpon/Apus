# Cargamos la imagen oficial de node para el contenedor
FROM node:14.15.1-alpine3.12

# Introducimos los metadatos del autor del contenedor
LABEL version = "1.0" maintainer = "Pablo Pérez Méndez"

# Se copian los ficheros json al contenedor
COPY package*.json ./

# Instalamos las dependencias, limpiamos la cache y borramos los .json
RUN npm install && npm i -g grunt-cli grunt-run grunt && npm cache clean --force && rm ./package*.json

## Cambiamos a un usuario sin privilegios
USER node

# Establecemos la variable de entorno de PATH a la carpeta node_modules
ENV PATH=/node_modules/.bin:$PATH

# Establecemos el directorio de trabajo a /test
WORKDIR /test

# Se ejecutan los comandos para lanzar los tests con grunt
CMD ["grunt", "test"]
