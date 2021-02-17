class Ejercicio {


	constructor(nombre = "", num_series = 0, num_repes = 0, grupo_muscular = "") {
		this.nombre = nombre;
		this.num_series = num_series;
		this.num_repes = num_repes;
		this.grupo_muscular = grupo_muscular;
		this.progreso = []
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

	aniadeProgreso(max_peso_levantado){
		this.progreso.push(max_peso_levantado);
	}

	solicitarEjercicioSimilar(){
		// Acceder a la base de datos de ejercicios, buscar uno en el que se
		// trabaje el mismo músculo y por el que se pueda sustituir. Finalmente,
		// devolver el nuevo
	}

	solicitarConsejo(){
		// Cada ejercicio registrado en la base de datos tendrá una serie de consejos
		// asociados a él. Únicamente se tratará de devolver uno de estos al usuario.
	}
}

module.exports = Ejercicio
