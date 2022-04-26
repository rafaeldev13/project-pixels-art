
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
