const fs=require('fs')

class Database{

  constructor(){
    var stream = fs.createWriteStream('data/ejercicios.txt');
    stream.once('open', function(fd) {
      stream.write("0: La prensa\n");
      stream.write("\tMúsculos: cuádriceps, gemelos, glúteos\n")
      stream.write("1: Extensión de rodilla\n");
      stream.write("\tMúsculos: cuádriceps\n");
      stream.write("2: Press banca\n");
      stream.write("\tMúsculos: pectoral, deltoides anterior, tríceps\n");
      stream.write("3: Apertura con mancuernas\n");
      stream.write("\tMúsculos: pectoral\n");
      stream.write("4: Press militar\n");
      stream.write("\tMúsculos: deltoides, trapecios\n");
      stream.write("5: Press Arnold\n");
      stream.write("\tMúsculos: deltoides\n");
      stream.write("6: Curl de bíceps con mancuernas\n");
      stream.write("\tMúsculos: bíceps\n");
      stream.write("7: Curl de bíceps concentrado\n");
      stream.write("\tMúsculos: bíceps\n");
      stream.write("8: Flexiones con manos juntas\n");
      stream.write("\tMúsculos: tríceps\n");
      stream.write("9: Press francés\n");
      stream.write("\tMúsculos: tríceps\n")
      stream.end();
    });
  }

  aniadirEjercicio(indice, ejercicio, musculos){
    if (this.checkeaEjercicioExiste(indice) == false){
      console.log('entra en if')
      let nuevo_ej = indice + ":" + ejercicio + "\nMusculos:" + musculos + "\n";

      fs.appendFileSync("data/ejercicios.txt", nuevo_ej, function(err) {
        if (err) throw err;
        console.log("Updated");
      });
    }

    else {
      console.log("Este ejercicio ya está incluido");
    }
  }

  checkeaEjercicioExiste(indice){
    let existeEjercicio = false;
    fs.readFileSync('data/ejercicios.txt', function(err, data) {
      if (err) throw err;
      console.log(data)
      if(data.indexOf(indice) >= 0){
        existeEjercicio = true;
      }
    });

    console.log('fin checkea')
    return existeEjercicio;
  }
}

module.exports = Database
