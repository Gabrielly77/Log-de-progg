<meta charset ="UTF-8">

<script>
	
	function pulaLinha(){
		document.write("<br><br>");
	}

	function mostra(frase){
		document.write(frase);
		pulaLinha();	
	}

	var limite = parseInt(prompt("Entre com a data limite"));
	var anoCopa = 1930;

	//while significa repetição, nunca coloque 'true', porquê buga a máquina.
	
	while(anoCopa <= limite){
		mostra("Teve copa em: " + anoCopa);
		anoCopa = anoCopa + 4;
	}

	mostra("Fine");







	</script>
