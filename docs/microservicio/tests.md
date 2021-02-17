# Testeando nuestras nuevas rutas

Como todo nuevo código que se establece en nuestro proyecto, es siempre muy importante testearlo para evitar que por algún casual, rompa con el código anterior o que directamente no funcione él mismo como se espera que lo haga. Es por ello que para este hito se han declarado 6 nuevos tests que se asegurarán que las nuevas implementaciones funcionan correctamente.

Para la ejecución de estos tests se ha utilizado el módulo supertest combinado con Jest, que ya se venía utilizando desde los primeros. Es por ello que para poder comenzar a realizarlos correctamente, vamos a importar el módulo de supertest, la app principal (que se exportó al final del fichero index.js) y el fichero en el que consta el número de rutinas escritas hasta ahora, para asegurarnos que siempre que se testea se escribe una rutina nueva y se trabaja sobre esta de forma que se eviten conflictos.

![test_1](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/test_1.png)

En primer lugar, tenemos el test que se encarga de asegurar el buen funcionamiento de la petición POST con la URL "/rutin". Para ello, pasamos los parámetros correspondientes y esperamos que una vez completada la petición, se nos devuelva una respuesta con código 200 (que indica que todo ha ido correctamente) y una cadena deseada, la cual se encarga en la aplicación original de informar al usuario que la rutina se ha establecido correctamente. En caso de coincidir estos dos parámetros con los valores deseados, se sigue adelante. Como acabamos de escribir información, pasaremos a recuperarla y a compararla con los datos originales, esperando en este caso a que se devuelva en formato JSON.

![test_2](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/test_2.png)

En segundo lugar, se testea el método POST para la url "/diaEntreno", que se encarga como se puede deducir de añadir a la base de datos un nuevo día de entrenamiento. Como en el anterior test, se pasan los parámetros correctos y se espera que devuelva una cadena con código 200. Una vez pasado esto, se intenta recuperar el día para compararlo con lo que enviamos en un principio

![test_3](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/test_3.png)

Falta el último de los POST, que se encarga de escribir un nuevo ejercicio. Similar a los anteriores, se pasan los parámetros, se espera que devuelva una cadena deseada con código 200 y, posteriormente, se compara la informacion recuperada con la original para asegurarse de que se ha escrito correctamente.

![test_4](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/test_4.png)

![test_5](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/test_5.png)

Los tests para los métodos GET se encargan de recuperar un objeto que ya está escrito en la base de datos y asegurarse de que, al recibirlo, el código como siempre es 200 y revisar que tanto el número de datos que contiene como el tipo de cada uno de estos es el correcto para cada objeto recuperado. En el caso de las rutinas, se espera que tenga 4 elementos: 2 string, un object y un number. En el caso de los diasEntreno, se espera que posea 3 elementos: un string, un object y un boolean. Además, también nos aseguramos de que en caso de enviar parámetros erróneos, la aplicación nos da una respuesta error.

En el test de GET /ej, recuperamos el objeto que había sido escrito en el POST y comparamos la información, asegurándonos también de que posee 5 elementos. Finalmente en este test también se tiene en cuenta que el mensaje de error enviado en caso de pasar un parámetro erróneo es el que debería ser.


![tests_run](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/tests_run.png)
