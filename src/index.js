// Importamos los demás archivos necesarios para el proyecto
const Rutina = require('./rutina.js');
const Ejercicio = require('./ejercicio.js');
const DiaEntreno = require('./diaEntreno.js');
const file = require('../data/numbers.json')

// Importamos las librerías que vamos a utilizar
const fs = require('fs')
const os = require('os')
const express = require('express')
const morgan = require('morgan')
const lineByLine = require('n-readlines');
const { Etcd3 } = require('etcd3');
const vm = require('vm');

// Configuración inicial
const app = express();
const client = new Etcd3();
const PORT = (process.env.PORT || 5000);
const PID = process.pid;
const HOST = os.hostname();
app.set('appName', 'Apus')

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('dev'));

// Functions

async function recuperarRutina(id_rutina){
  console.log("Recuperando rutina de base de datos...");

  let rutina_key = "Rutina_" + id_rutina;
  let buffer = await client.get(rutina_key);
  let rutina = JSON.parse(buffer);

  return rutina;
}

async function escribirRutina(rutina, rutina_id){
  console.log("Escribiendo rutina en base de datos...");

  let clave_rutina = "Rutina_" + rutina_id
  let buffer = Buffer.from(JSON.stringify(rutina));
  await client.put(clave_rutina).value(buffer);
}

function recuperarDiaEntreno(rutina, id_dia){
  nueva_rutina = new Rutina();
  nueva_rutina.copy(rutina);
  encontrado = false;
  let dia_entreno;
  console.log('Recuperando día de entrenamiento...');
  let index;

  for (let i = 0; i < nueva_rutina.training_days.length && !encontrado; ++i){
    if (nueva_rutina.training_days[i].numero == id_dia){
      encontrado = true;
      dia_entreno = nueva_rutina.training_days[i];
      index = i
    }
  }

  return [index, dia_entreno]
}

async function setRutina(req, res){
  var nombre = req.param('nombre'),
      tipo = req.param('tipo'),
      id = req.param('tipo')

  if (nombre == null || tipo == null){
    res.send('Debes indicar tanto el nombre como el tipo de la rutina')
  }

  else{
    rutina = new Rutina(nombre=nombre, tipo=tipo)
    file.rutinas += 1;
    let nueva_clave = "Rutina_" + file.rutinas;
    let buffer = Buffer.from(JSON.stringify(rutina));
    await client.put(nueva_clave).value(buffer);

    console.log('Añadiendo rutina a base de datos');
    fs.writeFile('data/numbers.json', JSON.stringify(file, null, 2), function writeJSON(err) {
      console.log('Escribiendo en archivo data/numbers.json')
    });

    res.send(`Rutina ${file.rutinas} añadida correctamente`);
  }
}


function getRutina(req, res){
  var rutina_id = req.param('id')

  if (rutina_id == null){
    res.send('Indique el id de la rutina deseada por favor')
  }

  else{
    recuperarRutina(rutina_id).then(val => {
      res.send(val)
    });
  }
}

function setDiaEntreno(req, res){
  var id_rutina = req.param('id'),
      numero_dia = req.param('numero_dia');

  if (id_rutina <= 0 || id_rutina > file.rutinas){
    res.status(404).send('Lo siento, no existe ninguna rutina con ese id');
  }

  else if (numero_dia < 0 || numero_dia > 6){
    res.status(400).send('Introduzca un número de la semana entre el 0 y el 6');
  }

  else{
    recuperarRutina(id_rutina).then(rutina => {
      console.log('Añadiendo dia de entrenamiento a rutina ' + id_rutina);
      nueva_rutina = new Rutina();
      nueva_rutina.copy(rutina);
      error = nueva_rutina.agregaDiaEntreno(numero_dia);

      if (error){
        res.send("El día de entrenamiento elegido ya existe")
      }

      else{
        escribirRutina(nueva_rutina, id_rutina);

        res.send(`Dia de entrenamiento ${numero_dia} añadido correctamente a rutina ${id_rutina}`);
      }
    });
  }
}

function getDiaEntreno(req, res){
  var id_rutina = req.param('id_r'),
      id_entreno = req.param('id_e');

  if (id_rutina <= 0 || id_rutina > file.rutinas){
    res.status(404).send('Lo siento, no existe ninguna rutina con ese id');
  }

  else if (id_entreno < 0 || id_entreno > 6){
    res.status(404).send('Introduzca un número de la semana entre el 0 y el 6');
  }

  else if (id_rutina == null || id_entreno == null){
    res.status(400).send('Debe indicar tanto el id de la rutina como el número del día de entrenamiento');
  }

  else{
    recuperarRutina(id_rutina).then(rutina => {
      [index, dia_entreno] = recuperarDiaEntreno(rutina, id_entreno);

      if (dia_entreno != null){
        res.send(dia_entreno);
      }

      else{
        res.status(404).send('El día de entreno introducido no está presente en esta rutina');
      }
    });
  }
}

function getEjercicio(req, res) {
  var id_rutina = req.param('id_r'),
      id_entreno = req.param('id_en'),
      id_ejercicio = req.param('id_ej');

  if (id_rutina == null || id_entreno == null || id_ejercicio == null){
    res.status(400).send('Debe especificar los id de la rutina, el dia de entrenamiento y el ejercicio');
  }

  else if (id_entreno < 0 || id_entreno > 6){
    res.status(400).send('Introduzca un número de la semana entre el 0 y el 6');
  }

  else if (id_rutina == null || id_entreno == null || id_ejercicio == null){
    res.status(400).send('Debe indicar tanto el id de la rutina como el número del día de entrenamiento y el ejercicio');
  }

  else{
    recuperarRutina(id_rutina).then(rutina => {
      [index, dia_entreno] = recuperarDiaEntreno(rutina, id_entreno);
      console.log('Recuperando ejercicio del día ' + id_entreno + ' de la rutina ' + id_rutina)
      var ejercicio;

      if (id_ejercicio < 0 || id_ejercicio >= dia_entreno.ejercicios.length){
        res.status(404).send('El id de ejercicio es menor que 0 o sobrepasa el número de ejercicios');
      }

      else{
        ejercicio = dia_entreno.ejercicios[id_ejercicio]
        res.send(ejercicio);
      }
    });
  }
}

function setEjercicio(req, res) {
  var id_rutina = req.param('id_r'),
      id_entreno = req.param('id_en'),
      nombre = req.param('nombre'),
      num_series = req.param('num_series'),
      num_repes = req.param('num_repes'),
      grupo_muscular = req.param('grupo_muscular');

  if (id_rutina == null || id_entreno == null){
    res.status(400).send('Debe especificar los id de la rutina, el dia de entrenamiento');
  }

  else if (id_entreno < 0 || id_entreno > 6){
    res.status(400).send('Introduzca un número de la semana entre el 0 y el 6');
  }

  else if (id_rutina == null || id_entreno == null){
    res.status(400).send('Debe indicar tanto el id de la rutina como el número del día de entrenamiento');
  }

  else{
    recuperarRutina(id_rutina).then(rutina => {
      [index, dia_entreno] = recuperarDiaEntreno(rutina, id_entreno);
      nuevo_ejercicio = new Ejercicio(nombre, num_series, num_repes, grupo_muscular);

      dia_entreno.ejercicios.push(nuevo_ejercicio);
      nueva_rutina = new Rutina();
      nueva_rutina.copy(rutina);
      nueva_rutina.training_days[index] = dia_entreno;
      escribirRutina(nueva_rutina, id_rutina);

      res.send("Ejercicio añadido correctamente");
    });
  }
}

// Routes
app.get('/rutin', getRutina);
app.get('/diaEntreno', getDiaEntreno);
app.get('/ej', getEjercicio);
app.post('/rutin', setRutina);
app.post('/diaEntreno', setDiaEntreno);
app.post('/ej', setEjercicio);

app.listen(PORT, () => {
  console.log('App name:', app.get('appName'));
  console.log('Host:', HOST);
  console.log('Server on port', PORT);
  console.log('Process PID', PID);
});

module.exports = app;
