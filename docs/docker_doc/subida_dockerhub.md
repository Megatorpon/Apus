## Configuración de DockerHub
___

Pasos seguidos para la correcta subida de nuestro contenedor a DockerHub y la posterior automatización

#### Crear una cuenta y un repositorio
___

El primer paso es crearse una cuenta en la página de [Docker Hub](https://hub.docker.com/) si todavía no estamos registrados, asegurándose de verificarla con el mail que nos envían luego (necesario para poder crear un repositorio). El nombre de usuario debería coincidir con el de Github, solo que en minúscula. Es importante también linkear nuestra cuenta de GitHub con nuestra cuenta de DockerHub.

A continuación, crearemos un repositorio público con el mismo nombre de usuario y de repositorio que en Github pero en minúsculas. Pinchamos en el símbolo de GitHub para elegir el repositorio al que enlazarlo y escogemos el nuestro del proyecto. En nuestro caso, ha quedado de la siguiente manera:

[repo_docker](https://github.com/Megatorpon/Apus/blob/main/docs/img/repo_docker.png)


#### Automatización

Para la configuración de la build automática y que se construya la imagen automáticamente a partir del Dockerfile cada vez que realiza un git push en el repositorio de GitHub, bastará con añadir una **build rule** en el repositorio de DockerHub. En la siguiente imagen se muestra como se queda.

[build_rules](https://github.com/Megatorpon/Apus/blob/main/docs/img/build_rules.png)
