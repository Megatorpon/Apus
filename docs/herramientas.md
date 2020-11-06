## El porqué de las herramientas elegidas

#### Lenguaje de programación/Entorno de ejecución: Javascript/Node.js

Para este proyecto he decidido utilizar Node.js porque he visto que posee numerosas ventajas a la hora de trabajar con él, como por ejemplo el hecho de que sea posible ejecutarlo en una gran variedad de servidores (Windows, Unix, Mac...), promueve la rapidez en cuanto al desarrollo de aplicaciones y tiene un buen rendimiento. Utiliza Javascript tanto en el back-end como en el front-end, lo que hace que se reduzca el tiempo de trabajo, además de que Javascript es uno de los lenguajes más usados actualmente y que siempre he querido aprender a usar, por lo que creo que es una buena oportunidad para ello.


#### Framework: Express.js

He estado investigando y se trata del framework más popular para Node.js. Tiene un diseño minimalista, es rápido y se integra genial con Node así que me parece una opción acertada para el proyecto por ahora.


#### Sistema de base de datos: Posible MongoDB

Por ahora no tengo muy claro qué sistema de base de datos voy a utilizar pero probablemente me decante por MongoDB, ya que posee buena coordinación con las anteriores herramientas elegidas.


#### Testing Framework (y librería de aserciones): Jest

Tras leer un poco por internet sobre los diferentes marcos de prueba, me he decantado por Jest. Una de sus ventajas es la velocidad, ya que Jest ejecuta tests en paralelo, lo cual hace que ejecutar toda la combinación de tests sea mucho más rápido. Es muy interactivo, pudiendo usar la opcion --watch para simplemente ejecutar los tests afectados por nuestro cambios. Además Jest ofrece una funcionalidad llamada Snapshots, que son capturas de un estado específico de la aplicación y que sirven para simplificar bastante el trabajo. Posee una amplia documentación

Como librería de aserciones, usaremos la que viene integrada con Jest. Además de funcionar muy bien y así evitar tener que instalar software adicional, uno de sus puntos a favor es que permite estructurar los tests en grupos, lo cual mejora la organización de código y la visualización de los resultados. Chai es una opción similar y muy buena pero nos decantaremos por esta por lo establecido anteriormente.


#### Gestor de tareas: Grunt
Como gestor de tareas he decidido usar [Grunt](https://gruntjs.com/) por varias razones.
<ul>
<li>Es fácil de aprender. Todo lo que requiere es buscar un plugin apropiado, leer su documentación y posteriormente instalarlo y configurarlo.
<li>Es más recomendable para proyectos más pequeños y manejables, debido a su mayor simplicidad, lo cual encaja con nuestro caso perfectamente.
<li>Posee una base de datos de plugins lo suficientemente grande como para evitar tener que desarrollar nuestras propias tareas de construcción.
<li>Es muy factible también el gestionar los despliegues del proyecto a través de Grunt, ya que existen muchos paquetes que sirven para acomodar dicha tarea.

Por todo lo anterior, me parece una opción bastante acertada para usar a lo largo del curso.


#### Gestor de paquetes: npm

La opción npm como gestor de paquetes de node, además de ser la herramienta propia de node para asistirte durante el desarrollo del proyecto, posee muchas ventajas. Por ejemplo, no necesita ninguna IDE para trabajar con node, evita que tengas que descargar manualmente todas las dependencias de un paquete y además es sencillo de usar. Con la orden `npm install "paquete"` busca en la [registry de node](https://www.npmjs.com/) el paquete a instalar y si existe lo descarga junto a todas sus dependencias. 


#### Gestor de versiones: nvm

Como gestor de versiones, me he decidido por nvm (Node Version Manager) porque es una herramienta bastante extendida y de uso fácil para el cambio de versiones del lenguaje, algo que ayuda mucho en el propio desarrollo de la aplicación, puesto que elimina una gran carga de trabajo.
