<meta charset="UTF-8">

<script>
    function pulaLinha() {
        document.write("<br><br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }
    
    function sorteia(n){
        return Math.round (Math.random()*n);
    }
    
    var numeroPensado = sorteia(10);
    var chute = parseInt(prompt("Tente adivinhar o número que eu pensei, haha, 'não vai conseguir': "));
    
    if(chute == numeroPensado){
        
        mostra("Eita!! Acertou, Mizeravi! O número pensado foi: " + numeroPensado);
    
    }else{
            if(chute > numeroPensado){
            
            mostra("Eita!! Sua tentantiva foi alta demais :c");

   }else{
        
        mostra("Eita!! Sua tentantiva foi baixa demais :/");
    }
}

        
     
</script>
