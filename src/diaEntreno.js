import Ejercicio from "./ejercicio.js";

export default class DiaEntreno {

	constructor(numero_dia){
		this.numero = numero_dia;
		this.ejercicios = [];
		this.completado = false;
	}

	getNumeroDia(){
		return this.numero;
	}
	
	agregarEjercicio(ejercicio) {
		this.ejercicios.push(ejercicio);
	}
	
	eliminarEjercicio(id_Ej) {
	}
	
	completarDia(){
		this.completado = true;
	}
}

