### Test de clase Rutina

Vamos a ejecutar el test de la clase Rutina para revisar que sus métodos funcionan correctamente.

Lo haremos por medio de Grunt, haciendo uso del comando que tenemos ya definido en el [Gruntfile](https://github.com/Megatorpon/Apus/blob/main/Gruntfile.js).

Con la orden `grunt testing`, se lanzará Jest, el cual se encargará de buscar y ejecutar los archivos que tengan la extensión
*.test.js* en nuestro caso. Lanzando esta orden (y como por el momento no hay más tests implementados), se ejecutará el test de la clase Rutina y 
veremos que para cada uno de sus métodos devuelve un tick, que quiere decir que realizan su función correctamente.

![rutina_passed](https://github.com/Megatorpon/Apus/blob/main/docs/img/rutina_tests_passed.png)
