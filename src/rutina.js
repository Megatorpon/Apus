const diaEntreno = require('./diaEntreno');
const assert = require('assert');


class Rutina {

	constructor(nombre, tipo){
		this.initialize(nombre, tipo);
	}

	initialize(nombre = "", tipo = "", num_days = 0, tr_days = []){
		this.nombre = nombre;
		this.tipo = tipo;
		this.training_days = tr_days;
		this.num_dias = num_days;
	}

	getNombre(){
		return this.nombre;
	}

	setNombre(n){
		this.nombre = n;
	}

	getTipo(){
		return this.tipo;
	}

	setTipo(type){
		this.tipo = type;
	}

	getTrainingDays(){
		return this.training_days;
	}

	setTrainingDays(training_days){
		this.training_days = training_days;
	}

	getNumDias(){
		return this.num_dias;
	}

	setNumDias(num_dias){
		this.num_dias = num_dias;
	}

	agregaDiaEntreno(numero_dia){
		let nuevo_dia = new diaEntreno(numero_dia);
		let salir = false

		for (let i = 0; i < this.training_days.length && !salir; ++i){
			if (this.training_days[i].numero == numero_dia){
				salir = true
			}
		}

		if (!salir){
			this.training_days.push(nuevo_dia);
		}

		if (this.training_days.length >= this.num_dias) {
			this.num_dias += 1;
		}

		return salir;
	}

	establecerEjsDiaEntreno(index, ejercicios){
		assert(typeof index == 'number', "index no es un número")
		// Comprobar que es un vector de objetos Ejercicio
		this.training_days[index].setEjercicios(ejercicios);
	}

	agregarEjercicioDiaEntreno(index, ejercicio){
		// Comprobar que index es de tipo number
		// Comprobar que ejercicio es un objeto Ejercicio
		this.training_days[index].agregarEjercicio(ejercicio);
	}

	eliminaDiaEntreno(numero_dia){
		let d_length = this.training_days.length;
		let target_index = -1;

		for (let i = 0; i < d_length; ++i){
			if (this.training_days[i].getNumeroDia() == numero_dia){
				target_index = i;
				break;
			}
		}

		if (target_index != -1){
			this.training_days.splice(target_index, 1);
		}
	}

	mostrarInfoRutina(){
		let resultado = [];
		resultado.push(this.getNombre())
		resultado.push(this.getTipo());
		resultado.push(this.getNumDias());
		resultado.push(this.getTrainingDays());
		/*
		let str_dias_entreno = [];

		for (let i = 0; i < this.getNumDias(); ++i){
			str_dias_entreno.push(this.getTrainingDays()[i].mostrarInfo());
		}

		resultado.push(str_dias_entreno);
		*/
		return resultado;
	}

	exportarRutina(){
		// Cogerá la información de la rutina y la exportará a un pdf
	}

	compartirRutina(metodo_compartir){
		// Con esta función, el usuario enviará toda la información de la rutina
		// a cualquier usuario que tenga agregado como amigo
	}

	clear(){
		this.initialize();
	}

	aniadeProgresoDia(num_dia, num_ej, max_peso){
		this.training_days[num_dia].aniadeProgreso(num_ej, max_peso);
	}

	copy(otra_rutina){
		this.nombre = otra_rutina.nombre;
		this.tipo = otra_rutina.tipo;
		this.num_dias = otra_rutina.num_dias;

		if (otra_rutina.training_days != null){
			this.training_days = otra_rutina.training_days;
		}
	}
}

module.exports = Rutina
