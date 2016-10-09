
var trsPaciente = document.getElementsByClassName("paciente");
var imc;

for (var i = 0; trsPaciente.length >= i; i++) {

	var tdPaciente 	= trsPaciente[i].getElementsByClassName("nomePaciente")[0].textContent;
	var tdAltura 	= trsPaciente[i].getElementsByClassName("altura")[0].textContent;
	var tdPeso 		= trsPaciente[i].getElementsByClassName("peso")[0].textContent;

	if(tdAltura > 0){
		imc =  tdPeso / (tdAltura * tdAltura);
		trsPaciente[i].getElementsByClassName("imc")[0].textContent = imc;
	}else{
		trsPaciente[i].getElementsByClassName("imc")[0].textContent = "Altura inválida";
	}
}