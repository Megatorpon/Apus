import DiaEntreno from "./diaEntreno.js";

class Rutina {
	
	constructor(nombre, tipo){
		this.nombre = nombre;
		this.tipo = tipo;
		this.training_days = [];
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
	
	agregaDiaEntreno(numero_dia){
		nuevo_dia = new DiaEntreno(numero_dia);
		this.training_days.push(nuevo_dia);	
	}
	
	eliminaDiaEntreno(numero_dia){
		d_length = this.training_days.length;
		var target_index = -1;
		
		for (i = 0; i < d_length; ++i){
			if (this.training_days[i].getNumeroDia() == numero_dia){
				target_index = i;
				break;
			}
		}
	
		if (target_index != -1){
			this.training_days.splice(target_index);
		}
	}
}


