<meta charset = "UTF-8">


<script>
	
	function pulaLinha(){
		document.write("<br>");
	}


	function mostra(resultado){
		document.write(resultado);
		pulaLinha();
	}


	var anosPassados = 2022;
	var idadeReprodutora = 28;
	var anoColonizado = 1500;
	var resultado = 2022-1500;


	mostra("Resultado " + Math.round(resultado/idadeReprodutora));


</script>
