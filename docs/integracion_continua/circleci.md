## Justificación de CircleCI

[CircleCI](https://circleci.com/product/) es un sistema de integración continua bastante similar a Travis que permite ejecutar "jobs" y builds de una manera rápida y optimizada. Permite un gran rango de opciones respecto a su fichero de configuración para editarlo de la mejor manera que le venga al usuario y consiguiendo así un rendimiento muy bueno. Además de esto, tiene una alta seguridad, utiliza caché para aumentar el rendimiento y es altamente compatible con Docker.

Tras haber barajado algunas otras opciones presentes, se ha decidido utilizar CircleCI debido a todas las características anteriormente mencionadas (sobretodo la gran integración que muestra tener con Docker), además de la gran extensión y el gran apoyo que tiene.

Para comenzar a utilizarlo, el proceso es muy similar al de Travis. Es necesario registrarse en la [página web](https://circleci.com/signup), en la cual nos podemos autenticar con nuestra cuenta de Github directamente. Tras esto, elegimos el repositorio de nuestro proyecto y nos pedirá editar un fichero config.yml, que explicaremos a continuación.

## Construcción del fichero config.yml

Es necesario añadir a la raíz de nuestro repositorio una carpeta oculta llamada `.circleci` y dentro de esta, crearemos el fichero `config.yml`, que servirá como el fichero de configuración de CircleCI. Tras esto, pasemos al archivo en sí:

En primer lugar, debemos establecer la versión de CircleCI a utilizar (en nuestro caso utilizaremos la versión 2.1).
A continuación añadiremos la etiqueta jobs, que incluirá las tareas a llevar a cabo y nombraremos a nuestra tarea como `build`. Nuestro objetivo será que en esta tarea se ejecuten los tests dentro del contenedor que tenemos subido en DockerHub. Por lo tanto, utilizaremos la etiqueta Docker para hacer pull de nuestra imagen y, tras ello, estableceremos los pasos a completar en esta tarea. Primero se realizará un checkout y a continuación se ejecutará la orden `grunt testing` para la ejecución de tests. Esto es así porque a la hora de hacer pull de una imagen de Docker, CircleCI nos introduce dentro de esta, de forma que solo es necesario ejecutar `grunt testing` a diferencia de Travis que tenemos que ejecutarla estando fuera del contenedor.

El fichero final quedaría de la siguiente manera:

[circleci_yml](https://github.com/Megatorpon/Apus/blob/main/docs/img/circleci_yml.png)

## Prueba de CircleCI

Debajo de estas líneas, podemos observar la correcta integración de circleCI en nuestro proyecto, ejecutando sin errores los tests preparados a una alta velocidad:

[circleci_prueba](https://github.com/Megatorpon/Apus/blob/main/docs/img/circleci_prueba.png)
