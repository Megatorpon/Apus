const data = require('./datos.json');

function rutinaRecomendada(objetivo){
  let encontrado = false;
  let cadena = "";

  for (let i = 0; i < data["rutinas"].length && !encontrado; ++i){
    if (data["rutinas"][i]["objetivo"] == objetivo){
      encontrado = true;
      cadena = "Nombre: " + data["rutinas"][i]["nombre"] + "\n" +
               "Objetivo: " + data["rutinas"][i]["objetivo"] + "\n" +
               "Número de días: " + data["rutinas"][i]["dias_semana"] + "\n" +
               "Ejercicios: " + "\n";

      for (let ej = 0; ej < data["rutinas"][i]["ejercicios"].length; ++ej){
        cadena += data["rutinas"][i]["ejercicios"][ej] + "\n";
      }
    }
  }

  if (!encontrado){
    cadena = "No se ha encontrado una rutina apta para su objetivo. ¿Lo ha escrito correctamente?";
  }

  return cadena;
}

exports.handler = async function(event, context) {
  let body = JSON.parse(event.body);
  let {chat, msg} = body.message;
  var chat_id = chat.id;
  let cadena = "";
  console.log(msg)
  
  switch(msg){
    case "/definir":
      cadena = rutinaRecomendada("Definir");
      break;
    case "/adelgazar":
      cadena = rutinaRecomendada("Adelgazar");
      break;
    case "/volumen":
      cadena = rutinaRecomendada("Volumen");
      break;
    case "/resistencia":
      cadena = rutinaRecomendada("Resistencia");
      break;
    default:
      cadena = "Para obtener una rutina según el objetivo que desee, deberá elegir entre las opciones que se le presentan a continuación\n";
      cadena += "/definir\n";
      cadena += "/adelgazar\n";
      cadena += "/volumen\n";
      cadena += "/resistencia\n";
  }

  return {
    statusCode: 200,
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: cadena,
      method: 'sendMessage',
      chat_id: chat_id
    })
  };
}
