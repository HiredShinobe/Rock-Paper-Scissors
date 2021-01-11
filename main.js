//first, let's prep the constants we need to manipulate the DOM.
//Also, like more fair games, we should set the starting sount at zero for the player and robo

let yourScore = 0;
let roboScore = 0;

const yourScore_span = document.querySelector('#your-score');
const roboScore_span = document.querySelector('#robo-score');
const scoresContainer_div = document.querySelector('.scores-container');
const result_p = document.querySelector('.result p');
const result_final = document.querySelector('.result-final p')
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');
const replay_msg = document.querySelector('#command-msg'); // This is for future use, so the player can reset and play again. I will learn and come back to it. 11.01.2011

// a simple function to change the ref letters to a word
function letterToWord(letter) {
  if(letter === 'r') return 'Rock';
  if(letter === 'p') return 'Paper';
  if(letter === 's') return 'Scissors';
}

// function to get a random choice for the computer
function getRoboChoice() {
  const choices = ['r', 'p', 's'];
      let roboChoice = Math.floor(Math.random() * choices.length);
      return choices[roboChoice].toLowerCase();
}

//call the function
getRoboChoice();

//functions to determine who wins and who loses, with the right logic
function win(yourChoice, roboChoice) {
  yourScore++;
  yourScore_span.innerHTML = yourScore;
  roboScore_span.innerHTML = roboScore;
  result_p.innerHTML = `${letterToWord(yourChoice)} beats ${letterToWord(roboChoice)} :) <br> You Win!`;
}

function lose(yourChoice, roboChoice) {
  roboScore++;
  yourScore_span.innerHTML = yourScore;
  roboScore_span.innerHTML = roboScore;
  result_p.innerHTML = `${letterToWord(roboChoice)} beats ${letterToWord(yourChoice)} :(<br> You Lose!`; 
}

function draw(yourChoice, roboChoice) {
  yourScore_span.innerHTML = yourScore;
  roboScore_span.innerHTML = roboScore;
  result_p.innerHTML = ` You both chose ${letterToWord(roboChoice)} :| <br> It's a Draw!`;
}

// The game function, with if statement to set the game to five rounds
function game(yourChoice) {
  if (yourScore >= 5 || roboScore >= 5) {
    if(yourScore > roboScore) {
      result_final.innerHTML = 'The Goddess of Luck has spoken! You are the winner!';
    } else {
      result_final.innerHTML = 'The Goddess of Luck has spoken! Robo wins this time!';
    };
    return;
  }

const roboChoice = getRoboChoice();

switch (yourChoice + roboChoice) {
  case 'rs':
  case 'pr':
  case 'sp':
    win(yourChoice,roboChoice);
    break;
  case 'rp':
  case 'ps':
  case 'sr':
    lose(yourChoice,roboChoice);
    break;
  case 'rr':
  case 'pp':
  case 'ss':
    draw(yourChoice,roboChoice);
  break;
}
}
//Call the game function 

game('any');

function play() {
 
rock_div.addEventListener('click', function(){
  game('r')
})
paper_div.addEventListener('click', function(){
  game('p')
})
scissors_div.addEventListener('click', function(){
  game('s')
})
}
//Call the final function
play();