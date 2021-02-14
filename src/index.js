const Rutina = require('./rutina.js');
const Ejercicio = require('./ejercicio.js');
const DiaEntreno = require('./diaEntreno.js');
const Database = require('./database.js');

const express = require('express')
const morgan = require('morgan')
const lineByLine = require('n-readlines');
const app = express()

// Sección de declaración de objetos de prueba
const rutin1 = new Rutina("Primera rutina", "Full body");
const database = new Database();

rutin1.agregaDiaEntreno(0);
rutin1.agregaDiaEntreno(2);
rutin1.agregaDiaEntreno(4);
const rutin2 = new Rutina("Segunda rutina", "Torso-Pierna");
rutin2.agregaDiaEntreno(1);
rutin2.agregaDiaEntreno(3);
rutin2.agregaDiaEntreno(5);

let rutinas = [rutin1, rutin2]

// Settings
app.set('appName', 'Apus')
app.set('port', 5000)

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('dev'));

// Routes

app.get('/', (req, res) => {
  res.send('Bienvenido a Apus, tu mejor organizador de entrenamientos')
});

app.get('/rutina/:id', (req, res) => {
  rutin_id = req.params.id
  console.log(rutin_id)
  try{
    rutin = rutinas[rutin_id]

    res.json({
      nombre: rutin.getNombre(),
      tipo: rutin.getTipo(),
      numero_dias: rutin.getNumDias()
    });
  }catch(err){
    res.status(404).send('Lo siento, no existe ninguna rutina con este id')
  }
});

app.put('/rutina/:id', (req, res) => {
  rutin_id = req.params.id

  try{
    new_name = req.param('new_name')
    new_tipo = req.param('new_tipo')

    rutinas[rutin_id].setNombre(new_name)
    rutinas[rutin_id].setTipo(new_tipo)

    res.status(200).send("Rutina " + rutin_id + " actualizada correctamente")
  }catch(err){
    res.status(404).send('Lo siento, no existe ninguna rutina con este id')
  }
});

app.delete('/rutina/:id', (req, res) => {
  rutin_id = req.params.id

  try{
    rutinas.splice(rutin_id, 1);
    res.status(200).send("Rutina " + rutin_id + " eliminada correctamente")
  }catch(err){
    res.status(404).send('Lo siento, no existe ninguna rutina con este id')
  }
});

app.post('/rutina', (req, res) => {
  try{
    var nombre = req.param('nombre'),
        tipo = req.param('tipo');

    console.log(req.body)
    new_rutin = new Rutina(nombre, tipo);
    rutinas.push(new_rutin);
    res.send(`${rutinas.length}`);

  }catch(err){
    res.status(404).send('Lo siento, ha ocurrido un error')
  }
});

app.get('/ejercicio/:id', (req, res) => {
  ejer_id = req.params.id
  try{
    const liner = new lineByLine('data/ejercicios.txt');
    let line;
    let encontrado = false

    while (line = liner.next()){
      if (ejer_id.toString() == line.toString('ascii')[0]){
        encontrado = true
        break;
      }
    }

    if (encontrado == true){
      res.send(line.toString('ascii'))
    }
    else{
      res.send('No se ha encontrado el ejercicio')
    }

  }catch(err){
    res.status(404).send('Lo siento, no existe ningún ejercicio con este id')
  }
});

app.post('/ejercicio', (req, res) => {
  try{
    var indice = req.param('indice'),
        ejercicio = req.param('ejercicio'),
        musculos = req.param('musculos');

    database.aniadirEjercicio(indice, ejercicio, musculos);

    res.send('Ejercicio añadido correctamente')

  }catch(err){
    res.status(404).send('Lo siento, ha ocurrido un error')
  }
});

app.listen(app.get('port'), () => {
  console.log('App name:', app.get('appName'));
  console.log('Server on port', app.get('port'));
});
