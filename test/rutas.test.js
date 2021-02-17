const request = require('supertest');
const file = require('../data/numbers.json')
app = require('../src/index.js');

describe("POST /rutin", () => {
  it('Debería escribir una rutina correctamente en la base de datos', async () => {
    const res_1 = await request(app)
    .post('/rutin')
    .send({
      nombre:"Rutina vitónica 2020",
      tipo:"Fuerza intensa"
    })
    .expect('Content-type', /html/)

    cadena_deseada = "Rutina " + file.rutinas + " añadida correctamente"

    expect(res_1.text).toBe(cadena_deseada)
    expect(res_1.statusCode).toBe(200)

    const res_2 = await request(app)
    .get('/rutin')
    .send({
      id:file.rutinas
    }).
    expect('Content-type', /json/)

    expect(res_2.statusCode).toBe(200)
    expect(res_2.body).toMatchObject({
      "nombre": "Rutina vitónica 2020",
      "tipo": "Fuerza intensa",
      "training_days": [],
      "num_dias": 0
    })
  });
});

describe("POST /diaEntreno", () => {
  it('Debería escribir un dia de entrenamiento dentro de una rutina correctamente', async () => {
    const res_1 = await request(app)
    .post('/diaEntreno')
    .send({
      id:file.rutinas,
      numero_dia:6
    })
    .expect('Content-type', /html/)

    cadena_deseada = 'Dia de entrenamiento 6 añadido correctamente a rutina ' + file.rutinas

    expect(res_1.text).toBe(cadena_deseada)
    expect(res_1.statusCode).toBe(200)

    const res_2 = await request(app)
    .get('/diaEntreno')
    .send({
      id_r:file.rutinas,
      id_e:6
    }).
    expect('Content-type', /json/)

    expect(res_2.statusCode).toBe(200)
    expect(res_2.body).toMatchObject({
      "numero": 6,
      "ejercicios": [],
      "completado": false
    })
  });
});

describe("POST /ej", () => {
  it('Debería escribir un ejercicio dentro de un dia y, a su vez, dentro de una rutina correctamente', async () => {
    const res_1 = await request(app)
    .post('/ej')
    .send({
      id_r:file.rutinas,
      id_en:6,
      nombre:"Curl de biceps",
      num_repes:12,
      num_series:4
    })
    .expect('Content-type', /html/)

    cadena_deseada = 'Ejercicio añadido correctamente'

    expect(res_1.text).toBe(cadena_deseada)
    expect(res_1.statusCode).toBe(200)

    const res_2 = await request(app)
    .get('/ej')
    .send({
      id_r:file.rutinas,
      id_en:6,
      id_ej:0
    }).
    expect('Content-type', /json/)

    expect(res_2.statusCode).toBe(200)
    expect(res_2.body).toMatchObject({
      "nombre":"Curl de biceps",
      "num_repes": 12,
      "num_series": 4,
      "progreso": [],
      "grupo_muscular": ""
    })
  });
});

describe("GET /rutin", () => {
  it('Debería devolver rutina en formato JSON', async () => {
    const res = await request(app)
    .get('/rutin')
    .send({
      id:2,
    })
    .expect('Content-Type', /json/)

    expect(res.statusCode).toEqual(200)
    expect(Object.keys(res.body).length).toBe(4)
    expect(typeof res.body["training_days"]).toBe("object")
    expect(typeof res.body["nombre"]).toBe("string")
    expect(typeof res.body["tipo"]).toBe("string")
    expect(typeof res.body["num_dias"]).toBe("number")
  });
});

describe("GET /diaEntreno", () => {
  it('Debería devolver diaEntreno en formato JSON', async () => {
    const res_1 = await request(app)
    .get('/diaEntreno')
    .send({
      id_r:2,
      id_e:5
    })
    .expect('Content-Type', /json/)
    expect(res_1.statusCode).toEqual(200)
    expect(Object.keys(res_1.body).length).toBe(3)
    expect(typeof res_1.body["numero"]).toBe("string")
    expect(typeof res_1.body["ejercicios"]).toBe("object")
    expect(typeof res_1.body["completado"]).toBe("boolean")

    const res_2 = await request(app)
    .get('/diaEntreno')
    .send({
      id_r:-2,
      id_e:5
    })
    .expect('Content-type', /html/)

    expect(res_2.statusCode).toBe(404)
  });
});

describe("GET /ej", () => {
  it('Debería devolver el ejercicio correctamente', async () => {
    const res_1 = await request(app)
    .get('/ej')
    .send({
      id_r:file.rutinas,
      id_en:6,
      id_ej:0
    })
    .expect('Content-Type', /json/)
    expect(res_1.statusCode).toEqual(200)
    expect(Object.keys(res_1.body).length).toBe(5)
    expect(res_1.body["nombre"]).toBe("Curl de biceps")

    const res_2 = await request(app)
    .get('/ej')
    .send({
      id_r:file.rutinas,
      id_en:6,
      id_ej:1
    })
    .expect('Content-type', /html/)

    let cadena = "El id de ejercicio es menor que 0 o sobrepasa el número de ejercicios"

    expect(res_2.statusCode).toBe(404)
    expect(res_2.text).toBe(cadena)
  });
});
