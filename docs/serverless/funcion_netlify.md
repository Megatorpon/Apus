# Despliegue de una función en Netlify

Para la función a desplegar con Netlify se ha elegido la historia de usuario [HU04](https://github.com/Megatorpon/Apus/issues/19), que establece que el usuario querrá que se le recomiende una rutina de entrenamiento según sus objetivos físicos. Para ello, antes que nada, vamos a preparar la información en un archivo [json](https://github.com/Megatorpon/Apus/blob/main/functions/data.json) al que nuestra función accederá para devolverle adecuadamente al usuario la información que desea. Esta función se integrará con un bot de Telegram al que podremos enviar diferentes comandos para recibir otro tipo de rutinas. A continuación, se explica todo el proceso.

## Creación del bot

La propia creación del bot es algo muy sencillo, pues simplemente debemos acceder a [BotFather](https://telegram.me/BotFather), un bot de Telegram cuyo trabajo es explícitamente el de crear nuevos bots. Tras hablar con él y seguir una serie de pasos muy sencillos, ya tendremos nuestro bot [RutinasApus](https://t.me/RutinasApusBot) creado.

## Funcionamiento de la función

Vamos a proceder a explicar el funcionamiento de la [función](https://github.com/Megatorpon/Apus/blob/main/functions/rutina.js) paso a paso:

En primer lugar, vamos a importar el archivo json que acabamos de nombrar, en el que se encuentran los datos con los que vamos a trabajar.

![require](https://github.com/Megatorpon/Apus/blob/main/docs/img/require.png)

A continuación declaramos una función que se encargará de devolvernos la rutina correspondiente dependiendo del objetivo que se le haya pasado como parámetro. Para ello, compara este parámetro con el objetivo de cada una de las rutinas guardadas y devuelve una cadena en la que se ha concatenado la información de aquella rutina en la que coincida.

![rutina](https://github.com/Megatorpon/Apus/blob/main/docs/img/rutina.png)

El siguiente paso será desarrollar la función principal, la función Handler. Esta función es la que se encargará de recibir el evento, extraer la información de este y actuar dependiendo de la información recibida. Para ello, primero se extraen los datos recibidos con `JSON.parse(event.body)`, debido a que la información que transporta este evento se transmite en formato JSON. Luego separamos el mensaje del cuerpo, que se usará para actuar con respecto a su contenido, y el id del chat, que se utilizará más adelante.

![async_function](https://github.com/Megatorpon/Apus/blob/main/docs/img/async_function.png)

Dentro de esta misma función, declararemos un switch que nos servirá para actuar de diferente manera dependiendo del comando del mensaje recibido. La información se guardará en una cadena que se devolverá con el return de la función

![switch](https://github.com/Megatorpon/Apus/blob/main/docs/img/switch.png)

Finalmente, tras todo esto, lo único restante es devolver la información:
1. Devolveremos 200 como código, indicando que se ha realizado todo correctamente.
2. Como cabecera, indicaremos que la información se va a enviar en formato JSON.
3. En el cuerpo del mensaje, establecemos que se enviará la cadena procesada, que el método será "sendMessage", ya que el bot enviará un mensaje al usuario, y finalmente indicamos el id del chat que habíamos extraído al comienzo.

![return](https://github.com/Megatorpon/Apus/blob/main/docs/img/return.png)

Con todo esto, el código de funcionamiento de nuestro bot estaría ya listo. Pero para poder usarlo, debemos crearlo primero siguiendo una serie de pasos y

## Integración con el bot de Telegram

Ya tenemos por un lado nuestro bot creado y por otro, el funcionamiento de este establecido. El último paso es asociar ambas para poder comenzar a chatear con el bot.

Esto se hace muy simple asignando un webhook al bot, que será la URL en la que se aloja nuestra función. Para ello simplemente tenemos que acceder al siguiente enlace

https://api.telegram.org/bot{TOKEN_BOT}/setWebhook?url=https://apus.netlify.app/.netlify/functions/rutina

sustituyendo `TOKEN_BOT` por el token que nos cedió BotFather a la hora de la creación del bot. Con ello nos tendría que llegar un JSON con la información que se muestra en la captura, que indica que se ha configurado correctamente.

![webhook_response](https://github.com/Megatorpon/Apus/blob/main/docs/img/webhook_response.png)

Al fin, nuestro bot ya está listo para ser utilizado.

![bot_prueba](https://github.com/Megatorpon/Apus/blob/main/docs/img/bot_prueba.png)
