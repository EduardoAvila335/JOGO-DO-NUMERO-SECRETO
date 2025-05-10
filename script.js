function numeroSecreto(){
    let numeroSecreto = Math.floor(Math.random() * 100) + 1; 
    let tentativas = 0; 
    let vitoria = document.getElementById("p");
    let numeroIncoreto = false;

    //console.log(numeroScreto);
    
    while(!numeroIncoreto){
        let digiteseunumero = Number(prompt('DIgite um numero de 1 a 100: '));

     if(digiteseunumero == numeroSecreto){
        vitoria.textContent = `Parabens você acertou!! o numero secreto ${numeroSecreto} com ${tentativas} tentativas`;
        alert(`Parabens você acertou!! o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
        numeroIncoreto = true;
    }else if(digiteseunumero < numeroSecreto){
        alert('Numero secreto é maior');
        tentativas++
    }else{
        alert('Numero secreto é menor');
        tentativas++
    }
}
    }
