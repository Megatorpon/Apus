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

<ul>
<li>[Elección de framework de testing y justificación](https://github.com/Megatorpon/Apus/issues/17)</li>
<li>[Elección de gestor de tareas y justificación](https://github.com/Megatorpon/Apus/issues/18)</li>
<li>[Completar la clase rutina](https://github.com/Megatorpon/Apus/issues/20)</li>
<li>[Crear tests unitarios para la clase Rutina](https://github.com/Megatorpon/Apus/issues/21)</li>
<li>[Elección de gestor de versiones y justificación](https://github.com/Megatorpon/Apus/issues/23)</li>
<li>[Actualizar pasos hito 2]((https://github.com/Megatorpon/Apus/issues/24)</li>
<li>[Actualizar Readme](https://github.com/Megatorpon/Apus/issues/26)</li>
</ul>


Además de ello, se han añadido nuevas historias de usuario y actualizado el nombre de las anteriores:

<ul>
<li>[HU01 - Como usuario, quiero poder añadir una rutina completamente personalizada por mí](https://github.com/Megatorpon/Apus/issues/4)</li>
<li>[HU02 - Como usuario, quiero poder obtener una dieta recomendada teniendo en cuenta mi condición física y mis objetivos](https://github.com/Megatorpon/Apus/issues/5)</li>
<li>[HU03 - Como usuario, quiero poder obtener una gráfica en la que pueda observar mi progreso hasta hoy](https://github.com/Megatorpon/Apus/issues/6)</li>
<li>[HU04 - Como usuario, quiero que se me recomiende una rutina según mis objetivos físicos](https://github.com/Megatorpon/Apus/issues/19)</li>
<li>[HU05 - Como usuario, quiero poder establecerle una dieta personalizada a una rutina añadida anteriormente](https://github.com/Megatorpon/Apus/issues/22)</li>
</ul>

