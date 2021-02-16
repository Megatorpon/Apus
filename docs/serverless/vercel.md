# Vercel

Vercel es una plataforma en la nube que permite a los desarrolladores el despliegue de un servicio de una manera instántanea y sencillo de configurar. Además es compatible con el despliegue continuo, lo cual permite que cada vez que hagamos un push y actualicemos nuestro repositorio de Github, también se actualizará nuestro repositorio de Vercel.

## Conexión entre Vercel y Github

Realizar la conexión entre Vercel y Github es muy sencillo. Lo primero es registrarnos en la página oficial de [Vercel](https://vercel.com)

![Vsignup](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/Vsignup.png)

Nos dará la posibilidad de registrarnos tanto con Github como con Gitlab y BitBucket. Pulsaremos en Github y aceptaremos los permisos.

![Vlogin](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/Vlogin.png)

![vercel_overview](https://github.com/Megatorpon/Apus/blob/main/docs/img/vercel_overview.png)

A continuación, pincharemos en "New Project" y procederemos a importar el repositorio de nuestro proyecto de la asignatura. A la hora de importar el proyecto, voy a elegir el repositorio entero puesto que voy a usar funciones que se encuentran en otra carpeta del repositorio.

![vercel_import](https://github.com/Megatorpon/Apus/blob/main/docs/img/vercel_import.png)

![vercel_success](https://github.com/Megatorpon/Apus/blob/main/docs/img/vercel_success.png)

Como ya aprendimos con los ejercicios de autoevaluación, el siguiente paso es instalar Vercel y desplegar nuestra aplicación, de la siguiente manera:

![vercel_deploy](https://github.com/Megatorpon/Apus/blob/main/docs/img/vercel_deploy.png)

![v_app](https://github.com/Megatorpon/Apus/blob/main/docs/img/v_app.png)

## Función de ejemplo

Para comprobar que todo funciona correctamente, usaremos una función de ejemplo que nos proporciona la propia [página](https://vercel.com/docs/serverless-functions/supported-languages#supported-languages) de Vercel. Tras haberla incluido en nuestro proyecto, dentro de la carpeta api situada en la raiz, haremos un push. Para testear que funciona, debemos utilizar la URL que nos da Vercel para nuestro proyecto y añadirle al final "/api/helloworld.js". Podemos acceder directamente desde este [enlace](https://apus.vercel.app/api/helloworld.js)

![vercel_hello](https://github.com/Megatorpon/Apus/blob/main/docs/img/vercel_hello.png)

Como podemos observar, funciona correctamente.

## Despliegue de una función de nuestro proyecto

Para conocer la información sobre la función implementada para su despliegue en Vercel, puede pulsar este [enlace](https://github.com/Megatorpon/Apus/blob/main/docs/serverless/funcion_vercel.md)
