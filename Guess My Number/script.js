'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = number;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number';
  } else if (number === guess) {
    document.querySelector('.message').textContent = 'You Won 🙌';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (number < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game !👀';
      document.querySelector('.score').textContent = 0;
    }
  } else if (number > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game !👀';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Sart Guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
