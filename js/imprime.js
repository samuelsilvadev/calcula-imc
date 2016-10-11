var trsPaciente = document.getElementsByClassName("paciente");

percorreArray(trsPaciente, mostraImc);

function mostraImc(trPacienteAtual){
	
	var tdPaciente 	= trPacienteAtual.getElementsByClassName("nomePaciente")[0];
	var tdAltura 	= trPacienteAtual.getElementsByClassName("altura")[0];
	var tdPeso 		= trPacienteAtual.getElementsByClassName("peso")[0];

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
	trPacienteAtual.getElementsByClassName("imc")[0].textContent = imc;
}