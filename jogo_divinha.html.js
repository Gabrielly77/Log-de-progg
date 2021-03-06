<meta charset="UTF-8">

//Agora, além de dizer que o usuário errou, vamos dizer se o chute dele era maior ou menor do que o número pensado. Observe como ficará o código:Vamos começar criando a função sorteia. Ela é interessante, porque se alguém precisa gerar um número aleatório basta você dizer para o programador que ele deve receber o retorno da função sorteia. Vamos lá:




<script>

    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
    }

    function sorteia(n) {

        return Math.round(Math.random() * n);
    }    

    var numeroPensado = sorteia(10);


     var chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

    if(chute == numeroPensado) {

        mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
    } else {

        if(chute > numeroPensado) {

            mostra("Você errou! Seu chute é maior que o número pensado!");

        } else {

            mostra("Você errou! Seu chute é menor que o número pensado!");
        }

    }
</script>

//Veja que dentro do else a condição é disparada apenas quando o "chute" está errado e após isso é preciso fazer outro if. Pois, também é preciso perguntar se o chute é maior que o número sorteado, caso não seja, ele só pode ser menor.
