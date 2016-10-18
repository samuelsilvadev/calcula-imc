function percorreArray(trsPaciente, comportamento){
	for (var i = 0; (trsPaciente.length - 1) >= i; i++) {
		var trPacienteAtual = trsPaciente[i];
		comportamento(trPacienteAtual);
	}
}