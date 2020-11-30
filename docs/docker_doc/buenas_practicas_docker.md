## Buenas prácticas de Docker

A la hora de configurar y editar un Dockerfile, es recomendable llevar a cabo una serie de buenas prácticas para tener un Dockerfile mucho mejor organizado y optimizado. Para la documentación de estas recomendaciones, nos hemos basado en las establecidas en esta [página](https://www.atareao.es/tutorial/docker/buenas-practicas-con-docker/), en la que ofrece detalladamente una serie de consejos que deberíamos llevar a cabo siempre que estemos trabajando con un Dockerfile.

- **Copiar solo lo necesario**: siempre es recomendable copiar solamente los archivos que sean necesarios en un momento dado, en vez de copiar todo el contenido de una carpeta en la que se incluyan ficheros que no son útiles para la imagen resultante.
  En nuestro Dockerfile es necesario simplemente copiar los ficheros .json para la instalación posterior de las dependencias, usando la orden `COPY package*.json ./`

- **Minimizar las capas**: cada instrucción es una capa. Si establecemos varias instrucciones `RUN` seguidas, cada una de estas instrucciones suma una capa al Dockerfile. En vez de hacer esto, podemos concatenar todas ellas en una sola para minimizar la capa a una sola.
  En nuestro Dockerfile instalamos las dependencias, borramos la cache y los ficheros .json en una sola intrucción `RUN`, usando la orden `RUN npm install && npm cache clean --force && rm ./package*.json`

- **Borrar lo que ya no nos sirva**: mantener en el contenedor archivos que ya no vamos a usar es un gasto innecesario de espacio. Lo recomendable es borrar estos archivos una vez sean prescindibles.
  Como ya vimos en el consejo anterior, la última parte de la orden `RUN npm install && npm cache clean --force && rm ./package*.json` borra los archivos .json, debido a que sólo los necesitamos para instalar las dependencias de paquetes. Una vez terminado esto, podemos eliminarlos sin problema.

- **Usar imágenes oficiales optimizadas**: en lugar de partir de una imagen de Ubuntu y comenzar a instalar todos los paquetes necesarios para poder ejecutar tu aplicación, lo más recomendable es partir de una imagen que esté preparada y optimizada para ello, cuyo tamaño disminuye considerablemente al no incluir archivos que no vayamos a usar, además de la velocidad de la propia imagen.
  En nuestro caso, usamos como base una imagen oficial de Node, con etiqueta alpine con la orden `FROM node:14.15.1-alpine3.12`

- **No utilizar root**: una vez completadas todas las órdenes necesarias para instalar aquello que necesites, siempre es recomendable cambiar a un usuario sin privilegios para, de esta manera, evitar la posibilidad de acceder y modificar archivos que no deberíamos.
  Las imágenes de Node proveen de base un usuario llamado node precisamente para este propósito. Como nosotros utilizamos una imagen Node, tras haber instalado las dependencias cambiaremos a este con la orden `USER node`.
