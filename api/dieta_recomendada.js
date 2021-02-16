const data = require('./datos_dietas.json')

function consejosDieta(objetivo){
  let encontrado = false;
  let consejo = "";
  let n_dietas = Object.keys(data["consejos_dieta"]).length

  for (let i = 0; i < n_dietas && !encontrado; ++i){
    if (data["consejos_dieta"][i]["objetivo"] == objetivo){
      encontrado = true;
      consejo = "Para mejorar podrias " + data["consejos_dieta"][i]["a_mejorar"];
      consejo += ". Por otro lado, deberias evitar " + data["consejos_dieta"][i]["a_evitar"];
    }
  }

  return consejo;
}

module.exports = (req, res) => {

  const {objetivo = ''} = req.query

  if (objetivo == ''){
    resultado = "Es necesario indicar el objetivo";
    codigo = 400;
  }

  else if (objetivo != 'Adelgazar' && objetivo != 'Volumen' && objetivo != 'Saludable'){
    resultado = "Por favor, indique un objetivo valido";
    codigo = 400;
  }

  else{
    resultado = consejosDieta(objetivo)
    codigo = 200;
  }

  res.status(codigo).send(JSON.stringify({
    objetivo: objetivo,
    consejo: resultado
  }).concat('\n'))
}
