'use strict';
const again = document.querySelector('.again');
let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
const check = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let count = 20;
let sc = 0;
let random = Math.trunc(Math.random() * 19) + 1;
console.log(random);
check.addEventListener('click', function () {
  let val = guess.value;
  // console.log(val);
  if (val == random) {
    message.textContent = "WoW it's correct 🤩";
    if (count > sc) {
      sc = count;
      highscore.textContent = count;
      number.textContent = random;
    }
  } else if (val > 19 || val < 1) {
    message.textContent = 'Out of range';
  } else if (val > random) {
    message.textContent = 'Too large';
    score.textContent = --count;
  } else if (val < random) {
    message.textContent = 'Too small';
    score.textContent = --count;
  }
});
again.addEventListener('click', function () {
  count = 20;
  number.textContent = '?';
  random = Math.trunc(Math.random() * 19) + 1;
  console.log(random);
  score.textContent = 20;
  guess.value = '';
  message.textContent = 'Start guessing...';
});
