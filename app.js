let arrayNumerosSorteados = [];
let tentativas = 1;
let numeroLimite = 100;
let numeroSecreto;
geraNumeroAleatorio()

mensagemInicial();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2})
}

function verificarChute(){
    let chute = document.querySelector('input').value;    

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTexto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{ 
    if( chute > numeroSecreto){
        exibirTexto('p','O número secreto é menor');
    }else{
        exibirTexto('p','O número secreto é maior');

    }
    tentativas++;
    limparCampo();
    }
}

function geraNumeroAleatorio(){
    numeroSecreto  = parseInt(Math.random()*numeroLimite +1);
    let quantidadeElementos = arrayNumerosSorteados.length;

    if(quantidadeElementos == numeroLimite){
        arrayNumerosSorteados = [];

    }
    if(arrayNumerosSorteados.includes(numeroSecreto)){
        geraNumeroAleatorio();
        }
    else{
        arrayNumerosSorteados.push(numeroSecreto)
        console.log(arrayNumerosSorteados)
        return numeroSecreto
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto')
    exibirTexto('p','Escolha um número entre 1 e 100')  
    
}


