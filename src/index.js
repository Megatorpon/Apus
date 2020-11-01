const Rutina = require('./rutina.js');
const Ejercicio = require('./ejercicio.js');
const DiaEntreno = require('./diaEntreno.js');

let rutin = new Rutina("Full body", "Fuerza");
let ej_1 = new Ejercicio(5, "Press banca", 3, 10, "Pecho-Triceps");
let ej_2 = new Ejercicio(10, "Remo", 4, 8, "Dorsales");
let ejers = [];
ejers.push(ej_1);
ejers.push(ej_2);

rutin.agregaDiaEntreno(0);
rutin.establecerEjsDiaEntreno(0, ejers);
console.log("Dias de entrenamiento:", rutin.getTrainingDays()[0]);

/*
const http = require("http");

const handleServer = function(req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h1>What's new Scooby Doo</h1>");
  res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function() {
  console.log("Server on port 3000");
});
*/

/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
