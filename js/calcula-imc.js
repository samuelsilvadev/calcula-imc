
function calculaImc(paciente){
	var imc;
	if(paciente.altura > 0){
		imc =  paciente.peso / (paciente.altura * paciente.altura);
		return imc;
	}else{
		imc = "Altura inválida";
		return imc;
	}
}

var trsPaciente = document.getElementsByClassName("paciente");
for (var i = 0; trsPaciente.length >= i; i++) {

	var tdPaciente 	= trsPaciente[i].getElementsByClassName("nomePaciente")[0];
	var tdAltura 	= trsPaciente[i].getElementsByClassName("altura")[0];
	var tdPeso 		= trsPaciente[i].getElementsByClassName("peso")[0];

	var paciente = {
		nome : tdPaciente.textContent,
		altura : tdAltura.textContent,
		peso : tdPeso.textContent
	}
	console.log(paciente);
	var imc = calculaImc(paciente);
	trsPaciente[i].getElementsByClassName("imc")[0].textContent = imc;
}