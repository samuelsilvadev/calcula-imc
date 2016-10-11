
var trsPaciente = document.getElementsByClassName("paciente");
var imc;

for (var i = 0; trsPaciente.length >= i; i++) {

	var tdPaciente 	= trsPaciente[i].getElementsByClassName("nomePaciente")[0];
	var tdAltura 	= trsPaciente[i].getElementsByClassName("altura")[0];
	var tdPeso 		= trsPaciente[i].getElementsByClassName("peso")[0];

	var paciente = {
		nome : tdPaciente.textContent,
		altura : tdAltura.textContent,
		peso : tdPeso.textContent
	}


	if(paciente.altura > 0){
		imc =  paciente.peso / (paciente.altura * paciente.altura);
		trsPaciente[i].getElementsByClassName("imc")[0].textContent = imc;
	}else{
		trsPaciente[i].getElementsByClassName("imc")[0].textContent = "Altura inválida";
	}
}