'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  if (input < 1 || input > 20) {
    document.querySelector('.message').innerHTML = 'Invalid Input';
    decrementCurrentScore();
  } else {
    processInput(input);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  startNewGame();
});

function startNewGame() {
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.message').innerHTML = 'Start Guessing!...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').innerHTML = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

function decrementCurrentScore() {
  const currScore = Number(document.querySelector('.score').innerHTML);
  if (currScore == 0) return;
  document.querySelector('.score').innerHTML = currScore - 1;
}

function updateHighestScore() {
  const maxScore = Number(document.querySelector('.highscore').innerHTML);
  const currScore = Number(document.querySelector('.score').innerHTML);
  if (maxScore < currScore) {
    document.querySelector('.highscore').innerHTML = currScore;
  }
}

function processInput(input) {
  if (Number(document.querySelector('.score').innerHTML) > 1) {
    if (input == secretNumber) {
      updateHighestScore();
      document.querySelector('.number').innerHTML = secretNumber;
      document.querySelector('.message').innerHTML = 'Congratulation!...';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (input > secretNumber) {
      decrementCurrentScore();
      document.querySelector('.message').innerHTML = 'Guess value is Too High';
    } else {
      decrementCurrentScore();
      document.querySelector('.message').innerHTML = 'Guess value is Too Low';
    }
  } else {
    document.querySelector('.message').innerHTML = 'You loose the game!...';
    decrementCurrentScore();
  }
}
