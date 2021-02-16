# Despliegue de una función en Vercel

Para la función a desplegar con Vercel se ha elegido la historia de usuario [HU02](https://github.com/Megatorpon/Apus/issues/5), la cual establece que un usuario deberá poder recibir una dieta o consejos recomendados según su objetivo o condición física. Primero, preparamos toda la información relacionada con las dietas disponibles en un fichero [json](https://github.com/Megatorpon/Apus/blob/main/api/datos_dieta.json) del que se extraerá la información deseada.

## Funcionamiento de la Función

El funcionamiento de esta [función](https://github.com/Megatorpon/Apus/blob/main/api/dieta_recomendada.js) es bastante similar al de la función de Netlify

En primer lugar, importamos y guardamos en una variable el archivo json donde se encuentra la información deseada.

![require_vercel](https://github.com/Megatorpon/Apus/blob/main/docs/img/require_vercel.png)

A continuación, declaramos la función que se encargará de buscar y extraer la información de dicha variable para luego devolverla como una cadena.

![consejos_dieta](https://github.com/Megatorpon/Apus/blob/main/docs/img/consejosDieta.png)

Finalmente, tenemos la función principal, que posee como argumentos la petición y la respuesta que vamos a usar para devolver al usuario la información. Esta función es muy simple: guardamos en una variable el valor introducido por el usuario. En caso de que no introduzca nada, esta variable estaría inicializada como una cadena vacía. Los dos casos que no nos interesan es que la cadena esté vacía o que no coincida con ninguno de los objetivos registrados. En cualquiera de estos casos, se devuelve un feedback al usuario mostrándole un mensaje de error con el código de error 400. En caso de que se haya recuperado la información satisfactoriamente, esta se devolverá al usuario por medio de la respuesta con un código 200.

![module_vercel](https://github.com/Megatorpon/Apus/blob/main/docs/img/module_vercel.png)

Tras haber acabado, haremos un push a nuestro repositorio, lo cual hará que se lance una nueva build del repo en Vercel y, si todo va correcto, la [función](https://apus.vercel.app/api/dieta_recomendada.js) estará lista para usarse.
Como podemos ver a continuación:

![no_obj](https://github.com/Megatorpon/Apus/blob/main/docs/img/no_obj.png)

![obj_vol](https://github.com/Megatorpon/Apus/blob/main/docs/img/obj_vol.png)

![obj_fuertote](https://github.com/Megatorpon/Apus/blob/main/docs/img/obj_fuertote.png)

Funcionan los 3 casos que hemos preparado.
