const Rutina = require("../src/rutina.js");
const DiaEntreno = require("../src/diaEntreno.js");
const Ejercicio = require("../src/ejercicio.js");

describe("Testing class Rutina", () => {

  const rutin = new Rutina("Primera rutina", "Full body");

  describe("Testing constructor", () => {
    test("El constructor inicializa bien el objeto", () => {
      expect(rutin.nombre).toBe("Primera rutina");
      expect(rutin.tipo).toBe("Full body");
      expect(rutin.training_days.length).toBe(0);
      expect(rutin.num_days).toBe(0);
    });
  });

  describe("Testing getters", () => {
    describe("Testing method getNombre()", () => {
      test("Se obtiene el nombre de la rutina", () => {
          nombre = rutin.getNombre();
          expect(nombre).toBe(rutin.nombre);
      });
    });

    describe("Testing method getTipo()", () => {
      test("Se obtiene el tipo de la rutina", () => {
          tipo = rutin.getTipo();
          expect(tipo).toBe(rutin.tipo);
      });
    });

    describe("Testing method getTrainingDays()", () => {
      test("Se obtiene los días de entrenamiento de la rutina", () => {
          training_days = rutin.getTrainingDays();
          expect(training_days).toStrictEqual(rutin.training_days);
      });
    });

    describe("Testing method getNumDias()", () => {
      test("Se obtiene el numero de dias de entrenamiento de la rutina", () => {
          num_days = rutin.getNumDias();
          expect(num_days).toBe(rutin.num_days);
      });
    });
  });

  describe("Testing method agregaDiaEntreno(numero_dia)", () => {
    test("Se agrega un dia de entrenamiento correctamente", () =>{
      rutin.agregaDiaEntreno(0); // Agregamos el día lunes
      train_day = new DiaEntreno(0);
      expect(rutin.training_days[0]).toStrictEqual(train_day);
    });
  });

  describe("Testing method establecerEjsDiaEntreno(index, ejercicios)", () => {
    test("Se establecen los ejercicios de un dia de entrenamiento", () => {
      ej_1 = new Ejercicio(31);
      ej_2 = new Ejercicio(16);
      ejs = [];
      ejs.push(ej_1);
      ejs.push(ej_2);
      rutin.establecerEjsDiaEntreno(0, ejs);

      expect(rutin.training_days[0].ejercicios).toStrictEqual(ejs);
    });
  });

  describe("Testing method agregarEjercicioDiaEntreno(index, ejercicio)", () => {
    test("Se agrega un ejercicio a un día de entrenamiento correctamente", () => {
      ejs = rutin.training_days[0].ejercicios;
      ex_length = ejs.length;
      ej_extra = new Ejercicio(8);

      rutin.agregarEjercicioDiaEntreno(0, ej_extra);
      expect(rutin.training_days[0].ejercicios[ex_length]).toStrictEqual(ej_extra);
    });
  });

  describe("Testing method eliminaDiaEntreno(numero_dia)", () => {
    test("Se elimina un dia de entrenamiento de la rutina", () => {
      rutin.agregaDiaEntreno(2); // Agregamos el dia miércoles
      rutin.eliminaDiaEntreno(0);

      expect(rutin.training_days[0]).toStrictEqual(new DiaEntreno(2));
      expect(rutin.training_days.length).toBe(1);
    });
  });

  describe("Testing method mostrarInfoRutina", () => {
    test("Se guarda la info en un vector con strings", () => {
      ejs = [];
      ejs.push(new Ejercicio(2));
      ejs.push(new Ejercicio(14));
      ejs.push(new Ejercicio(26));
      rutin.establecerEjsDiaEntreno(0, ejs);

      resultado = rutin.mostrarInfoRutina();

      expect(resultado[0]).toBe(rutin.nombre);
      expect(resultado[1]).toBe(rutin.tipo);
      expect(resultado[2]).toBe(rutin.num_days);
      expect(resultado[3]).toStrictEqual(rutin.training_days);
    });
  });

  describe("Testing method clear", () => {
    test("Se reinician todos los atributos a por defecto", () => {
      rutin.clear();

      expect(rutin.nombre).toBe("");
      expect(rutin.tipo).toBe("");
      expect(rutin.training_days.length).toBe(0);
      expect(rutin.num_days).toBe(0);
    });
  });

});
