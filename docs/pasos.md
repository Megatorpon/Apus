## Hito 0 - Git y GitHub para entrega de hitos del proyecto

<ol>
<li>Instalación de git en el PC</li>
<li>Configuración de git inicial, añadiendo mi usuario y mi correo electrónico</li>
<li>Creación de claves pública y privada en el PC </li>
<li>Subida de clave pública a mi cuenta de Github</li>
<li>Compleción de datos personales de mi cuenta de Github</li>
<li>Creación de nuevo repositorio para mi proyecto (con fichero .gitignore y licencia elegida)</li>
<li>Creación de fichero Readme.md para la documentación del proyecto</li>
<li>Descripción del problema a abarcar y de cómo la aplicación ofrece una solución (en el Readme.md)</li>
<li>Creación de la carpeta "docs"</li>
<li>Añadir fichero de la configuración inicial de git a la carpeta "docs"</li>
<li>Enlazar el fichero anterior al Readme.md</li>
<li>Realizar PR y entregar hito</li>
</ol>


## Hito 1 - Estructura general del proyecto

<ol>
<li>Elección de las herramientas a utilizar en el proyecto (plasmar en Readme.md)</li>
<li>Añadir fichero herramientas.md a la carpeta "docs"</li>
<li>Justificar la elección de las herramientas (herramientas.md) y enlazar con Readme.md</li>
<li>Creación de milestones del proyecto</li>
<li>Creación de issues relacionadas con los milestones</li>
<li>Creación de historias de usuario (también son issues)</li>
<li>Enlazar todo lo anterior con el Readme.md</li>
<li>Creación de la carpeta src</li>
<li>Establecer una estructura inicial para el proyecto en javascript</li>
<li>Creación de fichero iv.yaml en la raíz del repositorio</li>
<li>Plasmar en el fichero iv.yaml las clases/módulos creados</li>
<li>Crear un fichero pasos.md en la carpeta "docs"</li>
<li>Establecer en él los pasos seguidos en los hitos 0 e 1</li>
<li>Enlazar el fichero pasos.md al Readme.md</li>
<li>Abrir PR y entregar hito 1</li>
</ol>


## Hito 2 - Tests

En este hito se introducen los tests unitarios en el proyecto, además de la automatización de estos, para asegurarnos de que nuestro código funciona correctamente
y hace lo que tiene que hacer. Para ello (y en general para trabajar con el proyecto), hemos comenzado a instalar las herramientas que usaremos a lo largo del curso,
empezando por el gestor de paquetes npm, haciendo uso de la orden:

`sudo apt install npm`

Tras esto, se ha lanzado el comando `npm init` con el que hemos configurado un archivo package.json y añadido una carpeta para los módulos necesarios para el proyecto.

Como se ha explicado anteriormente, el framework de tests que se ha escogido es Jest, el cual se ha establecido como dependencia de desarrollo en el package.json con:

`npm install --save-dev jest`


Como base para este hito, se ha decidido completar las clases ya creadas anteriormente (Rutina, DiaEntreno y Ejercicio), las cuales están relacionadas entre sí para avanzar
en la compleción de la [HU01](https://github.com/Megatorpon/Apus/issues/4). Se ha creado una clase con la que el usuario podrá añadir una rutina a su cuenta, a la cual a su
vez podrá añadirle varios días de entrenamiento y ejercicios a estos últimos. Lo que querremos testear a través del fichero Rutina.test.js es, como el propio nombre
indica, la clase Rutina. Con ello se revisará que todos los métodos que tenga ya implementados esta clase funcionen correctamente. Los métodos, que abarcan la historia de
usuario anteriormente mencionada (poder añadir/modificar/eliminar rutinas), son sencillos pero suficientes por ahora. A medida que avance el proyecto se irán completando con
más funcionalidades (por ejemplo, a la hora de guardar la información en la base de datos).

Las issues que se han añadido en este hito del proyecto son las siguientes:


[Elección de framework de testing y justificación](https://github.com/Megatorpon/Apus/issues/17)<br>
[Elección de gestor de tareas y justificación](https://github.com/Megatorpon/Apus/issues/18)<br>
[Completar la clase rutina](https://github.com/Megatorpon/Apus/issues/20)<br>
[Crear tests unitarios para la clase Rutina](https://github.com/Megatorpon/Apus/issues/21)<br>
[Elección de gestor de versiones y justificación](https://github.com/Megatorpon/Apus/issues/23)<br>
[Actualizar pasos hito 2](https://github.com/Megatorpon/Apus/issues/24)<br>
[Actualizar Readme](https://github.com/Megatorpon/Apus/issues/26)<br>


Además de ello, se han añadido nuevas historias de usuario y actualizado el nombre de las anteriores:

[HU01 - Como usuario, quiero poder añadir una rutina completamente personalizada por mí](https://github.com/Megatorpon/Apus/issues/4)<br>
[HU02 - Como usuario, quiero poder obtener una dieta recomendada teniendo en cuenta mi condición física y mis objetivos](https://github.com/Megatorpon/Apus/issues/5)<br>
[HU03 - Como usuario, quiero poder obtener una gráfica en la que pueda observar mi progreso hasta hoy](https://github.com/Megatorpon/Apus/issues/6)<br>
[HU04 - Como usuario, quiero que se me recomiende una rutina según mis objetivos físicos](https://github.com/Megatorpon/Apus/issues/19)<br>
[HU05 - Como usuario, quiero poder establecerle una dieta personalizada a una rutina añadida anteriormente](https://github.com/Megatorpon/Apus/issues/22)<br>


## Hito 3 - Contenedores Docker

Este hito se basa en la introducción de un contenedor Docker en nuestro proyecto para la ejecución de los tests unitarios establecidos en el hito anterior.

Lo primero es instalar Docker en nuestro sistema. Yo personalmente ya lo tenía instalado debido a otra asignatura así que este paso me lo he ahorrado para este hito.
El siguiente paso es proceder a crear el Dockerfile con el que ejecutaremos las pruebas. Tras haberme documentado en internet sobre la correcta configuración de este archivo,
se ha procedido a redactarlo, teniendo en cuenta las [buenas prácticas] que se recomiendan llevar a cabo. Además, se han utilizado dos imágenes de Docker distintas para tratar de elegir la que más convenía. Hemos una imagen de Alpine oficial y la imagen de Node oficial con tag alpine, que es la que finalmente ha sido elegida por las razones que se explica en este [documento]().

Tras haber terminado con la creación del [Dockerfile](https://github.com/Megatorpon/Apus/blob/main/Dockerfile), el siguiente paso era la subida de la imagen generada a [DockerHub](https://github.com/Megatorpon/Apus/blob/main/docs/docker_doc/subida_dockerhub.md), activando la actualización automática de manera que cada vez que se hace un push en el repositorio de GitHub también se actualice el repositorio de DockerHub. Además, se ha subido también a [GitHub Container Registry] siguiendo la documentación oficial.

También se ha añadido una nueva clase [Database](https://github.com/Megatorpon/Apus/blob/main/src/database.js), que se deberá completar con futuras actualizaciones. Esta clase se encargará de administrar los archivos de la carpeta [data](https://github.com/Megatorpon/Apus/tree/main/data), en los que se guardará toda la información relacionada con las rutinas, ejercicios, consejos, etc, generados. Por ahora simplemente se basa en crear una lista de ejercicios de base, a la cual se le pueden añadir más y verificar, a la hora de ello, si un ejercicio ya está presente en la lista. En un futuro próximo se completará con mas funcionalidades. Por otro lado, se ha añadido la función AniadirProgreso a la clase Rutina, con la que el usuario podrá dejar el guardado el progreso de x ejercicio que esté llevando a cabo a lo largo de las semanas.

Las issues que se han añadido en este hito del proyecto son las siguientes:

[Añadir función para registrar progreso](https://github.com/Megatorpon/Apus/issues/39)<br>
[Añadir clase Database para guardar los datos](https://github.com/Megatorpon/Apus/issues/40)<br>
[Implementar funciones para añadir nuevos ejercicios a Database](https://github.com/Megatorpon/Apus/issues/41)<br>
[Creación del Dockerfile](https://github.com/Megatorpon/Apus/issues/43)<br>
[Elección y justificación del contenedor](https://github.com/Megatorpon/Apus/issues/44)<br>
[Añadir nueva información al Readme](https://github.com/Megatorpon/Apus/issues/45)<br>
[Configurar .dockerignore](https://github.com/Megatorpon/Apus/issues/46)<br>
[Añadir documentación buenas prácticas](https://github.com/Megatorpon/Apus/issues/47)<br>
[Añadir documentación de subida a Github Container Registry](https://github.com/Megatorpon/Apus/issues/48)<br>
[Añadir documentación de subida a DockerHub](https://github.com/Megatorpon/Apus/issues/49)<br>
[Actualizar pasos seguidos en el hito 3](https://github.com/Megatorpon/Apus/issues/50)<br>

Además de ello, se ha añadido una nueva HU:

[HU06 - Como desarrollador, deseo poder editar la información de la base de datos](https://github.com/Megatorpon/Apus/issues/42)

## Hito 4 - Integración continua

Este hito se basa en la introducción de integración continua en nuestro proyecto por medio de alguno de los sistemas elegidos.

Para ello, primero se han barajado varias opciones y entre todas, finalmente se ha decidido por utilizar tanto Travis como CircleCI.

En el caso de Travis, lo primero es ir a la página web y crearse una cuenta. El registro es bastante simple, pues podemos hacerlo directamente con nuestra cuenta de Github, dando los permisos necesarios a la página de Travis. Tras esto, el siguiente paso es elegir el repositorio en el que nos interesa utilizar Travis. Una vez hecho esto, para que Travis pueda trabajar y realizar su función cada vez que hacemos un push, es imprescindible añadir a nuestro proyecto un fichero [.travis.yml](https://github.com/Megatorpon/Apus/tree/main/.travis.yml), con el que se configurarán las tareas a llevar a cabo por Travis. Tras esto, Travis ya estará listo para trabajar.

En segundo lugar, debemos hacer lo mismo con CircleCI. El procedimiento es prácticamente el mismo. Debemos visitar la página web y registrarnos con nuestra cuenta de Github, dando los permisos necesarios para funcionar correctamente. A continuación, debemos elegir el proyecto adecuado en la misma página y crear el fichero de configuración, que en este caso se ubicará dentro de la carpeta .circleci en la raíz del repositorio y se llamará [config.yml](https://github.com/Megatorpon/Apus/tree/main/.circleci/travis.yml). Tras configurar este archivo, CircleCI estará también listo para ejecutarse cada vez que hagamos un push al repo.

También se ha añadido en este hito al fichero index.js algunas rutas de la aplicación como /rutina, /ejercicio, etc, además de un logger que nos indica por consola la información de las peticiones que se hacen en cada momento. En estas rutas se incluye la posibilidad de recibir y añadir ejercicios en la base de datos, crear objetos de rutina y recibirlos posteriormente y se han instalado varios módulos útiles tanto para el desarrollo del proyecto (como nodemon) como para el proyecto en sí (morgan, n-readlines, etc)

Las issues que se han añadido en este hito del proyecto son las siguientes:

[Añadir fichero de configuración de Travis](https://github.com/Megatorpon/Apus/issues/57)<br>
[Añadir justificación de por qué usar Travis](https://github.com/Megatorpon/Apus/issues/58)<br>
[Añadir configuración de CircleCI](https://github.com/Megatorpon/Apus/issues/59)<br>
[Añadir justificación de uso de CircleCI](https://github.com/Megatorpon/Apus/issues/60)<br>
[Actualizar Readme](https://github.com/Megatorpon/Apus/issues/61)<br>
[Actualizar fichero de pasos del hito](https://github.com/Megatorpon/Apus/issues/62)<br>
[Cambiar fichero de configuración de Travis](https://github.com/Megatorpon/Apus/issues/63)<br>
[Añadir nuevas rutas y funciones al index.js](https://github.com/Megatorpon/Apus/issues/64)<br>
[Añadir etiqueta make al iv.yaml](https://github.com/Megatorpon/Apus/issues/65)<br>
[Añadir workflows al fichero de circleci](https://github.com/Megatorpon/Apus/issues/66)<br>
[Actualizar documentación de circleci](https://github.com/Megatorpon/Apus/issues/67)<br>
[Actualizar pasos con nuevas issues](https://github.com/Megatorpon/Apus/issues/68)<br>

## Hito 5 - Despliegue serverless

Este hito se basa en el despliegue en plataformas serverless de algunas funciones de nuestro proyecto. Se ha decidido utilizar para este objetivo tanto Vercel como Netlify, implementando dos funciones diferentes, una para cada una.

Para comenzar a utilizar estos servicios hemos tenido que ir a sus páginas webs correspondientes y registrarnos, lo cual es bastante sencillo teniendo en cuenta que podemos logearnos con Github directamente en ambos. Después de completar el registro, hemos importado el repositorio del proyecto de la asignatura en ambas plataformas para permitir su correcto despliegue. El siguiente paso es instalar el SDK de Vercel y el SDK de Netlify por medio del gestor de paquetes de node, npm, usando las órdenes `npm i -g vercel` y `npm i -g install netlify-cli`. Tras seguir los pasos de cada una y haber acabado la configuración y despliegue del proyecto, se comprobó el funcionamiento por medio de funciones de prueba. Una vez verificado, era hora de comenzar a programar las verdaderas funciones.

Para la función de Vercel se decidió implementar la [HU02](https://github.com/Megatorpon/Apus/issues/5), que consiste en que el usuario pueda recibir una dieta dependiendo de su objetivo. Esto se logró utilizando un [fichero .json](https://github.com/Megatorpon/Apus/blob/main/api/datos_dietas.json), que contiene los datos de consejos alimentarios, y de un [fichero js](https://github.com/Megatorpon/Apus/blob/main/api/dieta_recomendada.js) que devuelve consejos dependiendo del objetivo que se haya pasado como parámetro.

Por otro lado, la función de Netlify implementa la [HU04](https://github.com/Megatorpon/Apus/issues/19), que consiste en que el usuario reciba una rutina de entrenamiento también dependiendo de su objetivo a largo plazo. Similarmente a la función de Vercel, también se utilizaron dos ficheros, un [json](https://github.com/Megatorpon/Apus/blob/main/functions/datos.json) y un [.js](https://github.com/Megatorpon/Apus/blob/main/functions/rutina.js). La principal diferencia que posee la función de Vercel con la de Netlify es que para esta última se decidió utilizar un [bot](t.me/RutinasApusBot) de Telegram que la integrara como funcionamiento por medio de un webhook una vez que ya estuviese acabada y funcional.

Las issues que se han añadido en este hito del proyecto son las siguientes:

[Añadir documentación de Vercel y Netlify](https://github.com/Megatorpon/Apus/issues/69)<br>
[Subir función de prueba de Vercel](https://github.com/Megatorpon/Apus/issues/70)<br>
[Añadir función de prueba de Netlify](https://github.com/Megatorpon/Apus/issues/71)<br>
[Añadir archivos para la función serverless para el bot de Telegram](https://github.com/Megatorpon/Apus/issues/72)<br>
[Pruebas diferentes json](https://github.com/Megatorpon/Apus/issues/73)<br>
[Añadir json para función de Vercel](https://github.com/Megatorpon/Apus/issues/74)<br>
[Completar función serverless de Vercel](https://github.com/Megatorpon/Apus/issues/75)<br>
[Actualizar Readme](https://github.com/Megatorpon/Apus/issues/76)<br>
[Actualizar pasos](https://github.com/Megatorpon/Apus/issues/77)<br>

## Hito 6 - Microservicios

Este hito se basa en la integración de un microservicio en nuestra aplicación.

Como cada vez que se desea añadir alguna funcionalidad nueva a nuestro proyecto, debemos documentarnos e informarnos sobre la opción más adecuada. Este hito no es la excepción y por lo tanto, lo primero que se ha realizado es la búsqueda de información sobre diferentes frameworks que sean compatibles con nuestra aplicación. Tras indagar bastante en internet y haber realizado la [comparación](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/framework_elegido.md) entre 3 frameworks diferentes que son muy utilizados, finalmente nos hemos decantado por Express. Las razones se explican en el documento del enlace.

Tras haber elegido y haber aprendido lo básico del uso de Express, se ha comenzado a integrar. El objetivo de esta integración ha sido la implementación completa de la [HU01](https://github.com/Megatorpon/Apus/issues/4), que establece que como usuario, se desea añadir a la base de datos una rutina completamente personalizada. Como base de datos se ha utilizado etcd3 además de un fichero en el que se guardan el número de rutinas presentes hasta el momento.

Una vez declaradas las diferentes rutas y funcionalidades cuyo objetivo es la historia de usuario mencionada, se han implementado tests para testearlas y asegurarse de que funcionan como es debido.

Las issues que se han añadido en este hito del proyecto son las siguientes:

[Actualización del fichero de pasos](https://github.com/Megatorpon/Apus/issues/80)<br>
[Actualización del readme con las nuevas implementaciones](https://github.com/Megatorpon/Apus/issues/81)<br>
[Implementación de tests para testeo de las rutas](https://github.com/Megatorpon/Apus/issues/82)<br>
[Documentación sobre la comparación de los distintos frameworks](https://github.com/Megatorpon/Apus/issues/83)<br>
[Documentación sobre los tests que se han incluido](https://github.com/Megatorpon/Apus/issues/84)<br>
[Explicación del fichero principal del framework](https://github.com/Megatorpon/Apus/issues/85)<br>
[Actualización de las clases utilizadas para trabajar](https://github.com/Megatorpon/Apus/issues/86)<br>
