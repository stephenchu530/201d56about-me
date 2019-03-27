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


let correctAnswers = 0;

// 5 yes no questions; All answers are yes btw
let questionBank = [
  'Do you think I like the color black?',
  'Could I possibly like to eat sushi?',
  'Was I in the Air Force?',
  'Do I like to watch cooking shows?',
  'Is sleeping my favorite activity?'
];
let userFeedbackBank = [
  'Wrong!',
  'Right!',
  'Not an acceptable response!'
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
  if (answer && idx + 1) {
    if (idx % 2) {
      alert(userFeedbackBank[0]);
    } else {
      alert(userFeedbackBank[1]);
      correctAnswers++;
    }
  } else {
    alert(userFeedbackBank[2]);
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
