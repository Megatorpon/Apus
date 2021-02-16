# Netlify

El funcionamiento de Netlify es muy parecido al de Vercel. Se utilizará para desplegar una función serverless distinta a la que se ha desplegado anteriormente en Vercel.

## Conexión entre Netlify y Github

El primer paso para comenzar a utilizar Netlify es acceder a su página oficial y registrarnos con nuestra cuenta de Github.

![netlify_connect](https://github.com/Megatorpon/Apus/blob/main/docs/img/netlify_connect.png)

![netlify_account](https://github.com/Megatorpon/Apus/blob/main/docs/img/netlify_account.png)

A continuación, le daremos a "New site" para crear un nuevo proyecto, elegiremos el repositorio de nuestro proyecto de IV y pincharemos en desplegar. Una vez desplegado correctamente, elegiremos un dominio personalizado para nuestro proyecto (apus.netlify.app). Por otro lado, crearemos en la raíz del repositorio un nuevo directorio "functions" y lo estableceremos como directorio de las funciones que usará Netlify para trabajar.

![netlify_settings](https://github.com/Megatorpon/Apus/blob/main/docs/img/netlify_settings.png)

Por último, debemos instalar el SDK de Netlify con la orden `npm i -g netlify-cli` y nos logearemos. En mi caso ya lo tenía hecho por los ejercicios de autoevaluación.

![netlify_install](https://github.com/Megatorpon/Apus/blob/main/docs/img/netlify_install.png)

### Función de ejemplo

Igual que hicimos con Vercel, primero comprobaremos que todo funciona correctamente antes de empezar a trabajar con la verdadera función que queremos desplegar. Añadiremos al directorio "functions" un archivo hello.js, que contendrá una función de prueba para verificar que todo va sobre ruedas. A continuación, haremos push al repositorio, lo cual provocará que se actualice también el repositorio de Netlify puesto que ya están conectados y podremos ver que detecta el nuevo archivo subido.

![netlify_function](https://github.com/Megatorpon/Apus/blob/main/docs/img/netlify_function.png)

Visitando el [link](https://apus.netlify.app/.netlify/functions/hello) de la función, observamos que funciona correctamente

## Despliegue de una función de nuestro proyecto

Para conocer la información sobre la función implementada para su despliegue en Vercel, puede pulsar este [enlace](https://github.com/Megatorpon/Apus/blob/main/docs/serverless/funcion_netlify.md)
