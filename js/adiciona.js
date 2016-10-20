
window.onload = function(){

	var botaoAdiciona = document.querySelector("#btnAdicionaPaciente");

	botaoAdiciona.addEventListener("click", function(event){
		
		var nome 	= document.querySelector("#novo-nome");
		var altura 	= document.querySelector("#nova-altura");
		var peso 	= document.querySelector("#novo-peso");

		if(nome.value != "" && altura.value != "" && peso.value != ""){

			var novoPaciente = 	"<tr class='paciente'>"+
									"<td class='nomePaciente'>"+nome.value+"</td>"+
									"<td class='altura'>"+altura.value+"</td>"+
									"<td class='peso'>"+peso.value+"</td>"+
									"<td class='imc'></td>"+
								"</tr>";

			var table 	= document.querySelector("table tbody");
			table.innerHTML = table.innerHTML + novoPaciente;
			document.querySelector("form").reset();

		}else{
			alert("Preencha os campos!");
		}

	});


}