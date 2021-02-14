## Justificación de Travis

Travis es un sistema de integración continua muy extendido actualmente. Se complementa espléndidamente con Github (ya desde un principio, a la hora de la creación de la cuenta en la página oficial, nos permite conectarnos con nuestro usuario de Github) de manera que es muy sencillo integrarlo para cualquiera de nuestros repositorios. Travis se encargará de ejecutar los tests configurados para el proyecto cada vez que hagamos un push a nuestro repositorio.

Además de ello, posee una muy buena documentación, es sencillo de comprender, aplicar y configurar y es capaz de ejecutar en paralelo varias construcciones (lo cual nos servirá para testear nuestra aplicación con diferentes versiones del lenguaje).

## Construcción del fichero .travis.yml

Para la creación del fichero .travis.yml existen varias maneras de hacerlo. La primera será estableciendo las diferentes versiones del lenguaje a testear y la segunda utilizará la opción `minimal`.

### Opción A

Lo primero será establecer que usaremos Docker para la ejecución de Travis, puesto que gracias al hito anterior, ya tenemos una imagen disponible en el repositorio de Docker que se encarga de la ejecución de los tests de nuestra aplicación, por lo que vamos a aprovecharla.

En primer lugar, estableceremos como lenguaje el utilizado durante el proyecto, `node_js`. A continuación, se especificarán las versiones con las que se desea testear la aplicación. En nuestro caso, estas versiones serán la 10, la 12, la 14 y la 15. ¿Por qué elegimos estas versiones en concreto? Si visitamos la página oficial de Node, veremos que estas versiones son las que a día de hoy están activas o se siguen manteniendo, como podemos apreciar en la siguiente imagen:

![node_versions](https://github.com/Megatorpon/Apus/blob/main/docs/img/node_versions.svg)

Tras esto, especificaremos que como servicio, vamos a utilizar `docker` y que vamos a hacer un pull de la imagen de nuestro repositorio antes de lanzar el script.

Finalmente, en la sección `script`, le indicaremos a Travis que lance la orden con la que ejecutar correctamente la imagen pulleada, haciendo uso de la variable de entorno $TRAVIS_BUILD_DIR, que nos devuelve el path absoluto donde se ha copiado el repositorio.

El fichero quedaría de la siguiente manera:

![travis_yml_1](https://github.com/Megatorpon/Apus/blob/main/docs/img/travis_yml_1.png)

### Opción B

Para esta opción también utilizaremos la imagen de Docker.

Para empezar, la sección de lenguaje será diferente a la anterior, puesto que en este caso será `minimal`. Hay una razón por la que utilizar esta opción y es que esta versión `minimal` posee lo mínimo para funcionar correctamente (herramientas esenciales, herramientas de control de versiones, herramientas de red, etc), por lo tanto es bastante más rápida y ocupa menos espacio en disco. Es decir, nos trae lo justo y necesario para poder trabajar.

En cuanto a lo que resta, es idéntico a la anterior opción, eliminando la sección de `node_js`. Estableceremos Docker como servicio, hacemos un pull de la imagen de DockerHub y lanzaremos la orden para ejecutar la imagen correctamente.

El fichero quedaría de la siguiente manera:

![travis_yml_2](https://github.com/Megatorpon/Apus/blob/main/docs/img/travis_yml_2.png)


## Prueba de Travis

A continuación, podemos observar como la build y la ejecución de Travis se realiza correctamente cuando hemos hecho el push al repositorio:

![build_travis](https://github.com/Megatorpon/Apus/blob/main/docs/img/build_travis.png)
