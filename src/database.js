const fs=require('fs')

class Database{

  constructor(){
    var stream = fs.createWriteStream("../data/ejercicios.txt");
    stream.once('open', function(fd) {
      stream.write("1: La prensa\n");
      stream.write("\tMúsculos: cuádriceps, gemelos, glúteos\n\n")
      stream.write("2: Extensión de rodilla\n");
      stream.write("\tMúsculos: cuádriceps\n\n");
      stream.write("3: Press banca\n");
      stream.write("\tMúsculos: pectoral, deltoides anterior, tríceps\n\n");
      stream.write("4: Apertura con mancuernas\n");
      stream.write("\tMúsculos: pectoral\n\n");
      stream.write("5: Press militar\n");
      stream.write("\tMúsculos: deltoides, trapecios\n\n");
      stream.write("6: Press Arnold\n");
      stream.write("\tMúsculos: deltoides\n\n");
      stream.write("7: Curl de bíceps con mancuernas\n");
      stream.write("\tMúsculos: bíceps\n\n");
      stream.write("8: Curl de bíceps concentrado\n");
      stream.write("\tMúsculos: bíceps\n\n");
      stream.write("9: Flexiones con manos juntas\n");
      stream.write("\tMúsculos: tríceps\n\n");
      stream.write("10: Press francés\n");
      stream.write("\tMúsculos: tríceps\n\n")
      stream.end();
    });
  }
}

module.exports = Database
