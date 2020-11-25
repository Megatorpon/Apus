# Subida de la imagen a GitHub Container Registry
___
Para la subida de la imagen a GitHub Container Registry, se han seguido los pasos de esta [guía](https://docs.github.com/en/free-pro-team@latest/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images):

1. Para la autenticación en GitHub Container Registry, lo primero es generar un Personal Access Token(PAT) en nuestra cuenta de GitHub, seleccionando los siguientes tags: `read:packages`, `write:packages` y `delete:packages`. Finalmente, generamos el token y guardamos el código generado en una variable de entorno con `$ export CR_PAT=YOUR_TOKEN`

2. A continuación, nos logearemos en GitHub Container Registry usando el token generado con la siguiente orden:

`$ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin`

3. El siguiente paso consiste en añadirle a nuestra imagen el dominio para el GHCR, necesario para poder subir la imagen a la plataforma. Usaremos el siguiente comando:

`docker tag megatorpon/apus:latest ghcr.io/megatorpon/apus:latest`

4. La imagen ya está preparada y la podemos subir con:

`docker push ghcr.io/megatorpon/apus:latest`

5. El siguiente paso es cambiar la visibilidad del paquete a pública. Para ello vamos a nuestro contenedor, pinchamos en `package settings` y le damos a hacer público.

6. Finalmente, lo único restante es sincronizarlo con nuestro repositorio. Seleccionamos el paquete, pinchamos en `Connect Repository` y elegimos el repositorio correspondiente.
