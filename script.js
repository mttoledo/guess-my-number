'use strict';

let score = 20;
let highScore = 0;
const min = 1;
const max = 20;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numeroAleatorio);
console.log("Don't cheat, close the console and press again! ^^")

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    
    if (guess === numeroAleatorio) {
        document.querySelector('.number').textContent = numeroAleatorio;
        document.body.style.backgroundColor = '#258f25';
        document.querySelector('.guess').style.backgroundColor = '#258f25';
        document.querySelector('.message').textContent = "🎉 Congratulations! You won..."

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else {
        if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            score = 0;
            document.querySelector('.score').textContent = score;
            document.body.style.backgroundColor = '#9b0a0a';
            document.querySelector('.message').textContent = "You lost, better luck next time!"
            document.querySelector('.check').disabled = true;
        }
    }
});

const again = function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = 'rgb(27, 27, 27)';
    document.querySelector('.guess').style.backgroundColor = 'rgb(27, 27, 27)';
    document.querySelector('.message').textContent = "Start guessing..."

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroAleatorio);

    document.querySelector('.check').disabled = false;
}

document.querySelector('.again').addEventListener('click', again);