export default class Ejercicio {

	constructor(id, nombre, num_series, num_repes, grupo_muscular) {
		this.id = id;
		this.nombre = nombre;
		this.num_series = num_series;
		this.num_repes = num_repes;
		this.grupo_muscular = grupo_muscular;
	}
	
	getId(){
		return this.id;
	}
	
	getNombre(){
		return this.nombre;
	}
	
	getNumSeries(){
		return this.num_series;
	}
	
	getNumRepes(){
		return this.num_repes;
	}
	
	getGrupoMuscular(){
		return this.grupo_muscular;
	}
	
	solicitarEjercicioSimilar(){
	}

	solicitarConsejo(){
	}
}

