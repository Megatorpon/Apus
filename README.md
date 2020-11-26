# Apus
___

Proyecto de la asignatura Infraestructura Virtual de 4º curso de Ingeniería Informática en la UGR

## Descripción de la aplicación
___

Como cliente de gimnasio que he sido durante bastantes años siempre he tenido que mirar por un lado en un papel la rutina que me recomendó el entrenador, luego por otro lado una foto de la dieta que tengo que seguir y lo que me toca comer cada día y, finalmente, anotar en el bloc de notas del teléfono los progresos que voy haciendo en los diferentes ejercicios. Todo esto hace el proceso bastante tedioso al estar todo por separado.

El proyecto Apus consiste en una aplicación en la que poder tener todo lo anteriormente mencionado en un mismo lugar, de forma que sea mucho más cómodo consultar toda la información relacionada con el entrenamiento. Además, habrá otras funcionalidades muy prácticas como el obtener rutinas/dietas nuevas dependiendo de en lo que el usuario decida enfocarse, si es que no tiene ninguna o quiere variar, el visualizar su progreso de forma gráfica, el compartir este último con otros usuarios, etc.

Apus quiere ofrecer una experiencia muy completa para aquellos que sean aficionados al gimnasio.


## Herramientas
___

<ul>
<li>Lenguaje del proyecto/Entorno de ejecución: Javascript/Node.js</li>

<li>Framework utilizado: Express.js</li>

<li>Sistema de base de datos utilizado: Probablemente MongoDB</li>

<li>Testing Framework (y librería de aserciones): Jest</li>

<li>Gestor de tareas: Grunt</li>

<li>Gestor de paquetes: npm</li>

<li>Gestor de versiones: nvm</li>
</ul>

Si desea saber más información del porqué de estas herramientas, visite el apartado **Información adicional**


## Docker
___

Se ha utilizado Docker para la creación de un contenedor en el que poder ejecutar los tests desarrollados.
Para la correcta ejecución de este, simplemente habrá que buildear la imagen a crear con el Dockerfile con la orden
`docker build -t megatorpon/apus .`

A continuación, nos situamos en la carpeta raíz del proyecto y lanzamos la siguiente orden, que cargará un contenedor con la imagen y un volumen sobre la carpeta en la que estamos situados:

`docker run -t -v ```pwd```:/tests megatorpon/apus`

Documentación detallada:

- [Comparación de imágenes base](https://github.com/Megatorpon/Apus/blob/main/docs/docker_doc/comparacion_contenedores.md): Se han ejecutado las pruebas con dos contenedores de imágenes base distintas y se ha hecho una elección justificada teniendo en cuenta los resultados obtenidos.
- [Dockerfile](https://github.com/Megatorpon/Apus/blob/main/Dockerfile): Se ha desarrollado un fichero Dockerfile para la correcta configuración del contenedor.
- [Contenedor en DockerHub](https://github.com/Megatorpon/Apus/blob/main/docs/docker_doc/subida_dockerhub.md): se ha configurado la actualización automática para la subida del contenedor generado a DockerHub.
- [Contenedor en GitHub Container Registry](https://github.com/Megatorpon/Apus/blob/main/docs/docker_doc/subida_githubcontainer.md): se ha subido el contenedor a GHCR sguiendo los pasos de la documentación oficial
- [Buenas prácticas](https://github.com/Megatorpon/Apus/blob/main/docs/docker_doc/buenas_practicas_docker.md): a la hora del diseño de Dockerfile, se han tenido en cuenta una serie de prácticas que es recomendado llevar a cabo.

## Progreso de milestones
___

En el siguiente enlace se encuentran los pasos realizados en cada uno de los milestones hasta el momento:

[Pasos](https://github.com/Megatorpon/Apus/blob/main/docs/pasos.md)


## Historias de usuario
___

[HU01](https://github.com/Megatorpon/Apus/issues/4) - Como usuario, quiero poder añadir una rutina completamente personalizada por mí.

[HU02](https://github.com/Megatorpon/Apus/issues/5) - Como usuario, quiero poder obtener una dieta recomendada teniendo en cuenta mi condición física y mis objetivos.

[HU03](https://github.com/Megatorpon/Apus/issues/6) - Como usuario, quiero poder obtener una gráfica en la que pueda observar mi progreso hasta hoy.

[HU04](https://github.com/Megatorpon/Apus/issues/19) - Como usuario, quiero que se me recomiende una rutina según mis objetivos físicos.

[HU05](https://github.com/Megatorpon/Apus/issues/22) - Como usuario, quiero poder establecerle una dieta personalizada a una rutina añadida anteriormente.

[HU06](https://github.com/Megatorpon/Apus/issues/42) - Como desarrollador, deseo poder editar la información de la base de datos


## Issues
___

El siguiente enlace le llevará a la pestaña de "issues", donde podrá observar aquellos que se han completado y aquellos que aún siguen abiertos:

[Lista de issues](https://github.com/Megatorpon/Apus/issues)


## Código fuente
___

Pinchando a continuación, se moverá a la carpeta donde yacen todos los ficheros fuente del proyecto:

[Ficheros src](https://github.com/Megatorpon/Apus/blob/main/src)


## Tests y cómo ejecutarlos
___

Como se ha visto en el apartado herramientas, para la creación y configuración de tests para nuestra aplicación se ha usado Jest.

Las clases testeadas hasta ahora son las siguientes, junto con un ejemplo de la información devuelta:
[Clase Rutina](https://github.com/Megatorpon/Apus/blob/main/tests/rutina.test.js) --> [Ejemplo](https://github.com/Megatorpon/Apus/blob/main/docs/test_Rutina.md)


Las instrucciones para testear nuestro código son simples. Una vez clonado el repositorio, nos iremos al directorio raíz de este y ejecutaremos en consola el siguiente comando:

`npm install`

Con este comando, instalaremos todas las dependencias listadas en el archivo `package.json`, incluidas las "dev-dependencies". A continuación, ejecutaremos el siguiente comando:

`grunt test`

que ejecutará la tarea asociada a ese comando en el [Gruntfile.js](https://github.com/Megatorpon/Apus/blob/main/Gruntfile.js), siendo en este caso el comando `npm run test`.
Este comando ejecuta los tests guardados en la carpeta [tests](https://github.com/Megatorpon/Apus/blob/main/tests) por medio de la orden Jest. Finalmente, se listarán por consola los resultados
de los tests ejecutados.


## Información adicional
___

¿Por qué he elegido las anteriores herramientas? --> [Herramientas](https://github.com/Megatorpon/Apus/blob/main/docs/herramientas.md)

Configuración inicial de git --> [Configuración inicial](https://github.com/Megatorpon/Apus/blob/main/docs/config_git.md)


## Autor
___

**Pablo Pérez Méndez**
