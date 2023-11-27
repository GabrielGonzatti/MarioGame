const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 78 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imagens/game-over.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    } else {

    }

}, 10);

// Adicione um evento de clique para dispositivos móveis
document.addEventListener('click', jump);

// Adicione um evento de toque para dispositivos móveis
document.addEventListener('touchstart', jump);

// Adicione um evento de tecla para a tecla de espaço
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});
