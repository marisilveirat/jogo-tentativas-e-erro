<meta charset="UTF-8">
<script>

    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
    }

    var numeroPensado = Math.round(Math.random() * 10);
	
	var tentativas = 1;
	
	while( tentativas <= 3) {
	
	 var chute = parseInt(prompt("Digite o chute!"));

    if(chute == numeroPensado) {

        mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
		break;
		
    } else {

        mostra("Você errou! Tente novamente!");
    }
	
	tentativas++;
	
	}

</script>
