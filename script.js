/* Criando uma div para criar os blocos.
 para colocar os blocos um abaixo do outro, fiz isso utilizando o CSS.*/
function divQuadrados() {
    for (let index = 0; index <= 24; index += 1) {
        let linhaDeQuadrados = document.querySelector('#pixel-board')
        let quadrados = document.createElement('div');
        quadrados.className = 'pixel'
        linhaDeQuadrados.appendChild(quadrados)
    }
}
divQuadrados();
/* requisitos 6, seleciona a cor preta como inicial*/

let colorSeleted = document.querySelector('.color');

window.onload = function () {
    function corInicial() {
        colorSeleted.classList.add('selected');
    }
    corInicial();
}
/*Seleciona as cores a ser utilizada*/
// Funcão aprendida na aula de mentoria para fazer o jogo da velha realizada dia 28 de Abril, ministrada pelo Mestre Bruno Feu.
function escolherCores() {
    const buttonBlack = document.getElementsByClassName("color")[0]
    const buttonGreen = document.getElementsByClassName("color")[1]
    const buttonOrange = document.getElementsByClassName("color")[2]
    const buttonBlue = document.getElementsByClassName("color")[3]

    buttonBlack.addEventListener('click', function () {
        buttonGreen.classList.remove('selected');
        buttonOrange.classList.remove('selected');
        buttonBlue.classList.remove('selected');
        buttonBlack.classList.add('selected');

    })
    buttonGreen.addEventListener('click', function () {
        buttonBlack.classList.remove('selected');
        buttonOrange.classList.remove('selected');
        buttonBlue.classList.remove('selected');
        buttonGreen.classList.add('selected');

    })
    buttonOrange.addEventListener('click', function () {
        buttonGreen.classList.remove('selected');
        buttonBlack.classList.remove('selected');
        buttonBlue.classList.remove('selected');
        buttonOrange.classList.add('selected');

    })
    buttonBlue.addEventListener('click', function () {
        buttonGreen.classList.remove('selected');
        buttonOrange.classList.remove('selected');
        buttonBlack.classList.remove('selected');
        buttonBlue.classList.add('selected');
    })
    const pintar = document.getElementById('pixel-board');
    pintar.addEventListener('click', function(event) {
      const selectedColor = document.querySelector('.selected');
      event.target.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
    }); 
}
escolherCores();

// Funcão aprendida na aula de mentoria para fazer o jogo da velha realizada dia 28 de Abril, ministrada pelo Mestre Bruno Feu.
function resetaOJogo() {
    const buttonReset = document.getElementById('clear-board')
    buttonReset.addEventListener('click', function() {
      document.location.reload(true) 
  })
  }
  resetaOJogo();