<meta charset = "UTF-8">

<script>
	function pulaLinha(){
		document.write("<br><br>");
	}

	function mostra(frase){
		document.write(frase);
		pulaLinha();
	}

//IMC = peso / (altura * altura)
	
	function calcularImc(altura, peso){
		 return peso/(altura*altura);

	}

	var imcFlavio = calcularImc (1.71, 73);
	var imcAmigo = calcularImc (1.72, 68);
	var totalImc = imcFlavio + imcAmigo;

	document.write("A soma dos imc's é " + totalImc);
	
	

</script>
