//Validación del formulario

function valida(){
	//Validar nombre obligatorio
	var nombre = document.getElementById('nombre');
	if(nombre.value == ''){
		alert('El nombre es obligatorio');
		nombre.focus();
		return false;
	}
	//validar nombre letras mayuscula y minusculas máximo 20 caracteres
	var expNombre = /^[A-Za-z]{1,20}$/;
	if(!expNombre.test(nombre.value)){
		alert('Solo letras, máximo 20 caracteres');
		nombre.focus();
		return false;
	}
	//Validar apellido obligatorio
	var apellido = document.getElementById('apellido');
	if(apellido.value.length == 0){
		alert('El apellido es obligatorio');
		apellido.focus();
		return false;
	}
	//Validar email obligatorio
	var email = document.getElementById('email');
	if(email.value == ''){
		alert('El email es obligatorio');
		email.focus();
		return false;
	}
	//Validar clave obligatoria numerica entre 4 y 8 caracteres
	var clave = document.getElementById('clave');
	var expClave = /^[0-9]{4,8}$/;
	if(!clave.value.match(expClave)){
		alert('La clave es obligatoria numérica entre 4 y 8 caracteres');
		clave.focus();
		return false;
	}
	var comuna = document.getElementById('comuna');
	if(comuna.selectedIndex == 0){
		alert('La comuna es obligatoria');
		comuna.focus();
		return false;
	}
	//Validar color obligatorio
	var color = document.getElementsByName('color');
	var seleccionado = false;
	for(var i = 0; i < color.length; i++){
		if(color[i].checked){
			seleccionado = true;
			break;
		}
	}
	if(seleccionado == false){
		alert('El color es obligatorio');
		return false;
	}
	//Validar deporte obligatorio
	var deporte = document.getElementsByName('deporte');
	var cont = 0;
	for(var i = 0; i < deporte.length;i++){
		if(deporte[i].checked){
			cont++;
		}
	}
	if(cont == 0){
		alert('Deporte es obligatorio');
		return false;
	}



	return true;
}