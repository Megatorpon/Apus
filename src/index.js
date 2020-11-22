const Rutina = require('./rutina.js');
const Ejercicio = require('./ejercicio.js');
const DiaEntreno = require('./diaEntreno.js');
const Database = require('./database.js');

let database = new Database();

database.aniadirEjercicio("11", "Dominadas", "Dorsales");

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
