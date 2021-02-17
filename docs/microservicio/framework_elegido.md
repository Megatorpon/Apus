# Elección y justificación del framework elegido

Para la elección del framework adecuado para nuestro proyecto se han barajado varias posibilidades, en concreto 3 frameworks muy aceptados en Node.js: [Express](https://expressjs.com/es/), [Koa](https://koajs.com/) y [Hapi](https://hapi.dev/).

## Express

Express es, sin duda alguna, el framework más popular entre los 3 anteriormente mencionados. La popularidad de un framework es muy importante, pues a la hora de buscar cualquier información sobre él, ya sea relativa a documentación, librerías y cuestiones respondidas por su inmensa comunidad, nos facilita mucho el trabajo de encontrar exactamente lo que deseamos, además del mantenimiento que se le sigue dando a día de hoy.

Además, de lo anteriormente mencionado, su configuración es bastante sencilla de comprender y aplicar a un proyecto, ofrece la posibilidad de crear un REST API con el que manejar las peticiones HTTP de una manera eficiente, puedes tanto utilizar los Middlewares que ofrecen varios de sus módulos como integrar los tuyos propios y modificarlos a tu gusto, etc (aunque algunos de sus middlewares puede que den problemas con las peticiones de los clientes).

Por otro lado, también tiene sus desventajas, puesto que debes tener una organización bastante clara a la hora de utilizarlo para evitar problemas con el mantenimiento del código. También, a medida que crece el tamaño del código, se vuelve bastante más complicado la reestructuración del código fuente de la aplicación.

## Koa

El segundo framework a tener en cuenta es Koa, construido por el mismo equipo que está detrás de Express. Este framework apunta a ser más pequeño que Express pero, a su vez, muy expresivo y con una robusta base para aplicaciones web y APIs.

Como se acaba de comentar, Koa ocupa muy poquito, puesto que se basa en unas 550 líneas de código, lo cual se agradece mucho a la hora de disminuir el espacio ocupado por el proyecto. También ofrece un servicio de manejo de errores con un rendimiento excelente, posee una muy buena experiencia de usuario, tiene una gran cantidad de métodos muy útiles para facilitarnos el trabajo, etc. Además, no utiliza callbacks, lo cual es algo que se ve reflejado en el rendimiento muy positivamente.

En cambio, su comunidad de open source es relativamente pequeña en comparación con la de otras, lo que hace complicado el apoyarse en otros usuarios para cualquier duda que se tenga con respecto a su utilización. Además, los generadores que utiliza Koa no son compatibles con ningún otro tipo de middleware de otros frameworks de Node.

## Hapi

Por último pero no menos importante, tenemos a Hapi, un framework muy rico en el desarrollo de aplicaciones web y servicios. Hapi permite a los desarrolladores centrarse en la escritura de lógica reutilizable para una aplicación en vez de gastar tiempo en construir la infraestructura.

Las principales ventajas de Hapi se basan en su robusto sistema de plugins que permite añadir nuevas funcionalidades y arreglar bugs muy rápidamente, es compatible con cualquier framework de front-end como lo son Angular, React y Vue y permite el desarrollo de APIs escalables. Su manejo de peticiones permite un control más profundo y detallado que los anteriores y tiene muy buen apoyo en cuanto a la generación de documentación.

Por otro lado, una desventaja que a mi parecer es bastante importante es que el que decida integrarlo en su proyecto deberá averiguar la estructura del código por sí mismo. Además, los endpoints deben ser creados y testeados manualmente, así como la reestructuración del código y en algunos casos, obliga al desarrollador a utilizar módulos específicos que no son compatibles con Express

## Conclusión

A mí parecer, entre estas tres opciones, la más adecuada sería Express, principalmente debido a que es la que más apoyo tiene y sobre la que más información puedes encontrar, teniendo en cuenta que es la primera vez que trabajo con un microservicio en una aplicación y más aún sabiendo que el lenguaje elegido para el proyecto se ha empezado a aprender hace tan solo unos meses. Además, el hecho de que nuestro proyecto sea pequeño y que no vaya a extenderse hasta el punto de ser difícil de manejar también me parece una razón importante.
