'use strict';

// Get User Name and give intro to guessing game
let userName = null;
do {
  userName = prompt('What is your name?');
  console.log('User entered: ' + userName + ' for name.');
  if (userName) {break;}
  alert('Please enter a name!');
} while (userName === null);
alert('Hello ' + userName + '! Let\'s play a guessing game about me. We\'ll start with 5 yes/no questions about me!');


// Keeps track of all correct responses
let correctAnswers = 0;


// 5 yes no questionaire; FYI: all answers are yes btw
console.log('*** Starting 5 yes/no questions game');
let questionBank = [
  'Do you think I like the color black?',
  'Could I possibly like to eat sushi?',
  'Was I in the Air Force?',
  'Do I like to watch cooking shows?',
  'Is sleeping my favorite activity?'
];
let possibleAns = [
  'y',
  'n',
  'yes',
  'no'
];
let cue = ' (y/n/yes/no):';

for (let i = 0; i < questionBank.length; i++) {
  let answer = prompt(questionBank[i] + cue);
  console.log('Question: ' + questionBank[i]);
  console.log('User response: ' + answer);
  let idx = -1;
  if (answer) {
    idx = possibleAns.indexOf(answer.toLowerCase());
  }
  if (answer && (idx + 1)) {
    if (idx % 2) {
      alert('Wrong!');
    } else {
      alert('Right!');
      correctAnswers++;
    }
  } else {
    alert('Not an acceptable response!');
    console.log('Not acceptable. Repeating the same question.');
    i--;
  }
}


// Display answers to 5 questions and correct answers on the page
let listItemsQuestions = '';

for (let i = 0; i < questionBank.length; i++) {
  listItemsQuestions += '<li>' + questionBank[i] + ' YES!</li>\n';
}
document.getElementById('fivequestionlist').innerHTML = listItemsQuestions;
alert('You got ' + correctAnswers + ' out of 5 correct so far!');


//Favorite number game
console.log('*** Starting guess number game');
let maxNumber = 15;
let maxGuesses = 4;
let response = null;
let randomNumber = Math.floor(Math.random() * Math.floor(maxNumber + 1));
alert('Let\'s play guess my number game!');
while (parseInt(response) !== randomNumber && (maxGuesses > 0)) {
  response = prompt('Guess my number between 0 and ' + maxNumber + ' (' + maxGuesses + ' left):');
  console.log('User guessed: ' + response);
  if (response && !isNaN(response)) {
    if (parseInt(response) > randomNumber) {
      alert('Mmmm... the number is lower');
    }
    if (parseInt(response) < randomNumber) {
      alert('Actually, the number is higher');
    }
    maxGuesses--;
  } else {
    alert('Please enter a number!');
  }
}
if (parseInt(response) === randomNumber) {
  alert('You guessed the number!');
  correctAnswers++;
} else {
  alert('You couldn\'t guess the number. The number was ' + randomNumber);
}

// Displays results of the guess number game
document.getElementById('guessnumberlist').innerHTML = '<li>The number to guess was ' + randomNumber + '</li>';
alert('You got ' + correctAnswers + ' out of 6 correct so far!');


// Mulitple choice places visited question
