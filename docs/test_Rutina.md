### Test de clase Rutina

Vamos a ejecutar el test de la clase Rutina para revisar que sus métodos funcionan correctamente.

Antes de empezar, veremos que en el fichero *package.json* en el apartado scripts, está escrito lo siguiente:

![scripts](https://github.com/Megatorpon/Apus/blob/main/docs/img/scripts_json.png)

Como podemos observar, con la orden *npm test*, se lanzará Jest, el cual se encargará de buscar y ejecutar los archivos que tengan la extensión
*.test.js* en nuestro caso. Lanzando esta orden, se ejecutará el test de la clase Rutina y veremos que para cada uno de sus métodos (los
implementados y exceptuando los get y set) devuelve un tick verde, que quiere decir que realizan su función correctamente.

![rutina_passed](https://github.com/Megatorpon/Apus/blob/main/docs/img/rutina_tests_passed.png)
