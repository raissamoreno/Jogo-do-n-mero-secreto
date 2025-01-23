let listaDeNumerosSorteador = [];
document.addEventListener('DOMContentLoaded', function() {
    const numeroSecreto = 7;

    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto,'Brazilian Portuguese Female',
        {rate: 1.2});
    }

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Tente adivinhar o número secreto. Escolha um número entre 1 e 10');

    function verificarChute() {
        let chute = document.querySelector('input').value;
        if (parseInt(chute) === numeroSecreto) { 
            exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        } else {
            exibirTextoNaTela('h1', 'Que pena, você errou!');
        }
    }

    function novoJogo() {
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Tente adivinhar o número secreto. Escolha um número entre 1 e 10');
        document.querySelector('input').value = '';
    }

    document.querySelector('button#verificar').addEventListener('click', verificarChute);
    document.querySelector('button#novoJogo').addEventListener('click', novoJogo);
});
