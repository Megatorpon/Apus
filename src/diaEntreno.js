const ejercicio = require('./ejercicio.js');
const assert = require('assert');

class DiaEntreno {

	constructor(numero_dia){
		this.initialize(numero_dia);
	}

	initialize(numero_dia){
			this.numero = numero_dia;
			this.ejercicios = [];
			this.completado = false;
	}

	setEjercicios(ejercicios){
		this.ejercicios = ejercicios;
	}

	getNumeroDia(){
		return this.numero;
	}

	getEjercicios(){
		return this.ejercicios;
	}

	agregarEjercicio(num_ej) {
		assert(typeof num_ej == 'number', "La variable num_ej no es un número");

		let nuevoEj = new Ejercicio(num_ej);
		this.ejercicios(nuevoEj);
	}

	agregarEjercicio(ejercicio){
		this.ejercicios.push(ejercicio);
	}

	eliminarEjercicio(id_Ej) {
		let length = this.ejercicios.length;
		let target_index = -1;

		for (let i = 0; i < length; ++i){
			if (this.ejercicios[i].getId() == id_Ej){
				target_index = i;
				break;
			}
		}

		if (target_index != -1){
			this.ejercicios.splice(target_index, 1);
		}
	}

	completarDia(dia_completado){
		this.completado = dia_completado;
	}

	aniadeProgreso(num_ej, max_peso){
		this.ejercicios[num_ej].aniadeProgreso(max_peso);
	}

	clear(){
		this.ejercicios = [];
		this.completado = false;
	}
}


module.exports = DiaEntreno
