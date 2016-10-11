//trabalhando com função anonima
var trsPaciente = document.getElementsByClassName("paciente");
for (var i = 0; (trsPaciente.length - 1) >= i; i++) {
	
	var tdPaciente 	= trsPaciente[i].getElementsByClassName("nomePaciente")[0];
	var tdAltura 	= trsPaciente[i].getElementsByClassName("altura")[0];
	var tdPeso 		= trsPaciente[i].getElementsByClassName("peso")[0];

	var paciente = {
			nome : tdPaciente.textContent,
			altura : tdAltura.textContent,
			peso : tdPeso.textContent,
			pegaImcDoPaciente : function (){
				var imc;
				if(this.altura > 0){
					imc =  this.peso / (this.altura * this.altura);
					return imc;
				}else{
					imc = "Altura inválida";
					return imc;
				}
			}
		};

	var imc = paciente.pegaImcDoPaciente();
	trsPaciente[i].getElementsByClassName("imc")[0].textContent = imc;
}