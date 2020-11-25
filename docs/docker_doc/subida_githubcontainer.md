# Subida de la imagen a GitHub Container Registry
___
Para la subida de la imagen a GitHub Container Registry, se han seguido los pasos de esta [guía](https://docs.github.com/en/free-pro-team@latest/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images):

1. Antes de empezar, es imprescindible asegurarse de tener activada la opción **Improved container support**. Para ello pinchamos en nuestra foto de perfil de Github, luego pinchamos en **Feature preview** y nos debe aparecer la opción en Disable, lo cual quiere decir que está activada.

![container_supp](https://github.com/Megatorpon/Apus/blob/main/docs/img/improved_cont_supp.png)

2. Para la autenticación en GitHub Container Registry, es necesario generar un Personal Access Token(PAT) en nuestra cuenta de GitHub, seleccionando los siguientes tags: `read:packages`, `write:packages` y `delete:packages`. Finalmente, generamos el token y guardamos el código generado en una variable de entorno con `$ export CR_PAT=YOUR_TOKEN`

3. A continuación, nos logearemos en GitHub Container Registry usando el token generado con la siguiente orden:

`$ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin`

4. El siguiente paso consiste en añadirle a nuestra imagen el dominio para el GHCR, necesario para poder subir la imagen a la plataforma. Usaremos el siguiente comando:

`docker tag megatorpon/apus:latest ghcr.io/megatorpon/apus:latest`

5. La imagen ya está preparada y la podemos subir con:

`docker push ghcr.io/megatorpon/apus:latest`

6. El siguiente paso es cambiar la visibilidad del paquete a pública. Para ello vamos a nuestro contenedor, pinchamos en `Package Settings` y luego en `Make public`.

7. Finalmente, lo único restante es sincronizarlo con nuestro repositorio. Seleccionamos el paquete, pinchamos en `Connect Repository` y elegimos el repositorio correspondiente.

![apus_package](https://github.com/Megatorpon/Apus/blob/main/docs/img/apus_package.png)
