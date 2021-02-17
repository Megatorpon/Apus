# ¿En qué consiste el fichero principal del proyecto?

El fichero principal de nuestro proyecto, llamado index.js, se ha desarrollado teniendo en mente la idea de implementar la HU01. Para esto pues se ha seguido un esquema de organización basado en diferentes clases para el uso de diferentes objetos y se ha dividido en diferentes partes que veremos a continuación.

## Imports

En esta parte del fichero se han importado todas las librerías y demás archivos que han sido necesarios para la ímplementación de las funcionalidades. Como se puede observar en la imagen, se importan las 3 clases con las que se va a representar la información, un fichero numbers.json en el que se guardará simplemente el número de rutinas creadas hasta el momento y otros módulos varios entre los que destacan :
1. Express, nuestro framework a utilizar durante el hito.
2. Morgan, que es un middleware de Express muy útil para mostrar por consola la información de las diferentes peticiones.
3. etcd3, que será donde guardaremos toda la información creada.

![imports](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/imports.png)


##  Configuración

En esta sección se configuran algunas variables con las que vamos a trabajar. Por supuesto, se inicializa nuestra app llamando a Express y, además, creamos un cliente para la base de datos llamando al módulo de etcd3. Las demás variables declaradas en esta sección son de simple información para mostrar por consola a la hora de lanzar el servidor.

![config](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/config.png)


## Middlewares

Aquí, como podemos ver, se declaran los middlewares a utilizar. Cada uno de los 3 Middlewares vistos en la imagen sirve a un propósito:

1. El primero servirá para que la aplicación pueda entender la sintaxis de los ficheros Json y no de error, ya que estos los vamos a estar utilizando en todo momento.
2. El segundo permite el paso de parámetros acompañando a las peticiones a través de la propia URL.
3. El tercero se mencionó anteriormente, Morgan, que muestra por consola la información (dependiendo del flag que se le pase como argumento puede ser más corto o más completo) de las peticiones que le llegan a nuestro servidor. Es muy útil para conocer exactamente que está recibiendo este último.

![middlewares](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/middlewares.png)


## Funciones auxiliares

Estas funciones serán utilizadas por las funciones principales para la recuperación de la información guardada en etcd3. Es necesario que sean asíncronas porque a la hora de recuperar los datos, debemos asegurarnos que el código que sigue tras ello no utiliza variables vacías (esto debido a que node es un lenguaje asíncrono), por lo tanto utilizaremos la función await para asegurarnos que el código se queda esperando por el valor antes de seguir avanzando. Por ejemplo, para escribir la información de una rutina, esta función crea una clave que será utilizada para identificar el objeto en etcd3 y, a continuación, transforma el objeto de rutina que se le pasa como parámetro a un buffer, debido a que en etcd3 no se escribir los objetos directamente porque no los admite en su esquema de pares clave-valor. Para poder guardarlos es necesario pasarlos a buffer con anterioridad.

Por otro lado, para recuperar la información de este objeto, simplemente tenemos que recuperarlo mediante el método get pasándole la clave identificativa del objeto y, una vez lo hemos recuperado como buffer, para poder visualizar los datos correctamente, es necesario transformarlo con la función JSON.parse, que esquematiza las propiedades del objeto en formato JSON.

![func_aux](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/func_aux.png)


## Funciones principales

Las funciones que denominamos "principales" son las funciones que van a estar directamente ligadas a las rutas declaradas en el pie del fichero fuente. Estas funciones servirán para recuperar las rutinas escritas en la base de datos, así como sus días de entrenamiento o los ejercicios dentro de este. Por otro lado, como es lógico, no solamente se ofrece la posibilidad de recuperar la información sino también de escribirla, usando los conocidos métodos POST, que llamarán a sus funciones correspondientes. El funcionamiento de estas funciones es muy similar las unas a las otras por lo que no serán difíciles de explicar. En todas las funciones, al recuperar los parámetros de las peticiones, el programa se asegura de que estos parámetros sean correctos y que no posean un valor null o un valor fuera del rango permitido. En estos casos, se devuelve un string con código 400 o 404 informando del error.

![func_1](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/func_1.png)

En primer lugar, tenemos las funciones con las que se escriben nuevas rutinas y se recuperan. Como acabamos de comentar, en un principio la función de escribir una nueva rutina se asegura de que el id pasado como parámetro es correcto. Tras esto, se crea un objeto Rutina con los otros parámetros y se incrementa en 1 el número de rutinas presentes (esto se realiza incrementando el número presente en el archivo numbers.json). Finalmente, a la hora de almacenarlo, se crea una clave únnica y se pasan tanto esta como el objeto transformado a buffer para poder almacenarlo en etcd3 correctamente.

La función para recuperar la rutina, es muy sencilla puesto simplemente llama a la función auxiliar RecuperaRutina y envía de vuelta esta información.

![func_2](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/func_2.png)

La segunda función se encarga de escribir un nuevo día de entrenamiento. Primero, nos aseguramos que el cliente envía parámetros válidos para poder trabajar. Después de asegurarnos de esto, recuperamos la rutina en la que se quiere escribir con RecuperaRutina. Como no nos devuelve un objeto Rutina sino un JSON con la información, se crea un objeto Rutina nuevo en el que se copia la información recibida añadiéndole la nueva. En caso de haber sido un éxito esta operación, se escribe la nueva rutina nuevamente en etcd3 utilizando escribirRutina.

![func_3](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/func_3.png)

getDiaEntreno recupera un dia de entrenamiento de una rutina concreta utilizando la función recuperaDiaEntreno pasándole los datos como parámetros

![func_4](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/func_4.png)

Esta función se encarga de recuperar un ejercicio en concreto que pertenece a un día de entrenamiento que a su vez pertenece a una rutina. Puede parecer tedioso pero utilizando las funciones auxiliares declaradas anteriormente, se va más código en asegurarse en enviar información en caso de error que en recuperarla en sí. Aquí directamente se recupera el DiaEntreno al que pertenece y se le pasa el índice del ejercicio a la variable "ejercicios" de este. Muy sencillo.

![func_5](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/func_5.png)

Por último, tenemos la función con la que se escriben ejercicios dentro de un día de entrenamiento. Se deben pasar los 2 parámetros principales obligatoriamente puesto que van a servir para identificar la rutina y el día en el que desea integrar. Tras esto, funciona prácticamente igual que lo que hemos visto anteriormente. Se recupera la rutina con su id. A continuación se recupera el día de entreno con su id también y, finalmente, se crea un nuevo objeto Ejercicio con los demás parámetros. Este objeto Ejercicio se añadirá a la colección del DiaEntreno y se copiarán tanto los datos recuperados como los nuevos en una nueva Rutina que será transformada a buffer para escribirla en la base de datos.


## Rutas

![rutas](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/img/rutas.png)

En el pie del fichero, se han declarado las 6 rutas (en realidad 3 pero cada una acepta 2 tipos de peticiones) que se utilizan en el proyecto. Cada una de ellas tiene asociada una de las funciones principales que acabamos de comentar. Debajo, se establece que nuestra aplicación va a escuchar en el puerto que se declaró al comienzo y que, cada vez que se lance la aplicación, se muestre por consola la información referente a esta (en nuestro caso será su nombre, el host, el puerto en el que sirve y el PID del proceso).

La variable app se exporta para que pueda ser utilizada por los [tests](https://github.com/Megatorpon/Apus/blob/main/docs/microservicio/tests.md)
