var idPaciente 	= document.getElementById("paciente-1");
var idAltura 	= document.getElementById("altura-1");
var idPeso 		= document.getElementById("peso-1");

var idPaciente2 = document.getElementById("paciente-2");
var idAltura2 	= document.getElementById("altura-2");
var idPeso2 	= document.getElementById("peso-2");

var idPaciente3 = document.getElementById("paciente-3");
var idAltura3 	= document.getElementById("altura-3");
var idPeso3 	= document.getElementById("peso-3");

var paciente1 = {
	paciente: idPaciente.textContent,
	peso : idPeso.textContent,
	altura : idAltura.textContent
};

var paciente2 = {
	paciente: idPaciente2.textContent,
	peso : idPeso2.textContent,
	altura : idAltura2.textContent
};

var paciente3 = {
	paciente: idPaciente3.textContent,
	peso : idPeso3.textContent,
	altura : idAltura3.textContent
};

var arrayPacientes = [paciente1, paciente2, paciente3];
var imc;
for (var i = 0; arrayPacientes.length >= i; i++) {
	if(arrayPacientes[i].altura > 0){
		imc =  arrayPacientes[i].peso / (arrayPacientes[i].altura * arrayPacientes[i].altura);
		document.getElementById("imc-"+[i+1]).textContent = imc;
	}else{
		document.getElementById("imc-"+[i+1]).textContent = "Altura inválida";
	}
}