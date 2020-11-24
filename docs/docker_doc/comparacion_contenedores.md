# Elección de contenedor para docker

Nuestro objetivo es la correcta elección de un contenedor para la ejecución de los tests. En nuestro caso, usaremos una imagen oficial de Node (con tag alpine) y una imagen oficial de Alpine en la que instalaremos todo lo necesario. Alpine es una distribución de Linux muy popular en el uso de contenedores por su ligero tamaño sin dejar de ser útil para las funcionalidades generales. Para la decisión final, nos basaremos en el tamaño de cada imagen y en los tiempos de descarga y ejecución de cada una.

Usaremos el comando `time`, con el cual podemos saber el tiempo que tarda en ejecutarse un determinado comando.


## node:14.15.1-alpine3.12

#### Tiempo de descarga

Descargamos la imagen con `docker pull`, medida con el comando `time`. El resultado es el siguiente:

[node_download](https://github.com/Megatorpon/Apus/blob/main/docs/img/node_download.png)

El tiempo de descarga de esta imagen es de **14.205 segundos**

#### Tiempo de construcción

Construiremos la imagen con `time docker build -t megatorpon/apus_node .`

[node_build](https://github.com/Megatorpon/Apus/blob/main/docs/img/node_build.png)

El tiempo de construcción es de **39.451 segundos**

#### Tamaño de las imágenes

Para consultar el tamaño de las imágenes usamos `docker images`.

[node_size_1](https://github.com/Megatorpon/Apus/blob/main/docs/img/node_size_1.png)

[node_size_2](https://github.com/Megatorpon/Apus/blob/main/docs/img/node_size_2.png)

**El tamaño de la imagen descargada es de 117MB**

**El tamaño de la imagen ya construida es de 160MB**

#### Tiempo de ejecución

Finalmente, para medir el tiempo de ejecución del contenedor de los tests

Después de esto, montamos un volumen con la carpeta raíz del proyecto y la carpeta "tests" con la siguiente orden:

time docker run -t -v pwd:/tests megatorpon/apus_node

[node_exec](https://github.com/Megatorpon/Apus/blob/main/docs/img/node_exec.png)

El tiempo de ejecución es de **7.337 segundos**

### Tiempo y tamaño consumido

La imagen de Node ocupa un total de **277MB** y consume un tiempo total de **61 segundos**


## alpine:3.12.1

Para comparar con la imagen de node anterior, vamos a usar la versión 3.12.1 de alpine.

#### Tiempo de descarga

Descargamos la imagen como antes, con `docker pull` y medida con `time`, cuyo resultado es:

[alpine_download](https://github.com/Megatorpon/Apus/blob/main/docs/img/alpine_download.png)

El tiempo de descarga de esta imagen es de **3.795 segundos**

#### Tiempo de construcción

Construiremos la imagen con `time docker build -t megatorpon/apus_alpine .`

[alpine_build](https://github.com/Megatorpon/Apus/blob/main/docs/img/alpine_build.png)

El tiempo de construcción es de **57.575 segundos**

#### Tamaño de las imágenes

Para consultar el tamaño de las imágenes usamos `docker images`.

[alpine_size_1](https://github.com/Megatorpon/Apus/blob/main/docs/img/alpine_size_1.png)

[alpine_size_2](https://github.com/Megatorpon/Apus/blob/main/docs/img/alpine_size_2.png)

**El tamaño de la imagen descargada es de 5.57MB**

**El tamaño de la imagen ya construida es de 100MB**

#### Tiempo de ejecución

Para medir el tiempo de ejecución, usaremos los mismos comandos.
Ejecutamos montando el volumen con la carpeta raíz del proyecto así:
`time docker run -t -v pwd:/tests megatorpon/apus_alpine`

[alpine_exec](https://github.com/Megatorpon/Apus/blob/main/docs/img/alpine_exec.png)

El tiempo de ejecución es de **8.150 segundos**

### Tiempo y tamaño consumido

La imagen de Alpine ocupa un total de **105.57MB** y consume un tiempo total de **69.52 segundos**

## Conclusión final

Tanto la imagen oficial de Node como la imagen oficial de Alpine son buenas opciones para trabajar con ellas. La imagen de Node consume 277MB y 61 segundos de tiempo, mientras que la imagen de Alpine consume 105.57MB y 69.52 segundos de tiempo. En nuestro caso, elegiremos trabajar con la de Node, ya que vamos a priorizar el ahorro de tiempo consumido al espacio ocupado.
