//This is the console only version of the game
// setting up the conputer's random choice, using an array
    function computerPlay() {
      const choices = ['rock', 'paper', 'scissors'];
      let computerChoice = Math.floor(Math.random() * choices.length);
      return choices[computerChoice].toLowerCase();
    }

 //like most fair games, both players should start at zero.

    let playerCounter = 0;
    let computerCounter = 0;
//setting up rules of the game with a function.
    function playRound(playerSelection, computerSelection) {
      // if the player wins
      if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerCounter++;
        return 'You won this round! ' + 'Silly Computer chose ' + computerSelection + ' :)';
        //if the computer wins
      } else if (
        playerSelection === 'scissors' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'rock' && computerSelection === 'paper'
      ) {
        computerCounter++;
        return 'You lost this round! ' + 'Clever Computer chose ' + computerSelection + ' :(';
        // no need to reward a draw, so no one's score goes up.
      } else if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
      } 
      // what if the user inserts a random word?
      //* I have not figured out how to work around escape or cancel option. I will come back to this 14.12.20
        else {
        alert ('That is not even a thing! You\'re lucky you\'re cute. I\'ll let you go again, you little Monkey!');
      }
    }
      // Loops are amaizng for making this work. 5 rounds with no bonus round allowed.
    function game() {

      for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i + 1));
      // tolowercase and trim are used here to make sure user's input is always understood, even with spaces and caps.    
        let playerSelection = window.prompt("Rock? Paper? Scissors? ").toLowerCase().trim();
        let computerSelection = computerPlay();

        console.log('Your selection: ' + playerSelection);
        console.log('Computer\'s selection: ' + computerSelection);
        console.log('Result: ' + playRound(playerSelection, computerSelection));
        console.log('Score: You ' + playerCounter + ' - ' + computerCounter + ' Computer.');
      }
    }
    // here we call the function
    game();
    // after the function is called, it is time to display messages via alert and redirect the user to console for details. 
    if (playerCounter > computerCounter) {
      alert('You Win! You clever Monkey! I\'ll show you what happened in the console.');
    } else if (computerCounter > playerCounter) {
      alert('Sorry Monkey! You lost to a clever computer! I\'ll show you what happened in the console.');
    } else if ( computerCounter == playerCounter){
      alert('Oh Wow! It\'s a tie! I\'ll show you what happened in the console.');
       //* I have not figured out how to work around escape or cancel option. I will come back to this when I have cracked the code. 14.12.20
    } else {
      alert ('Geez! What was that for? Refresh the browser and start again, you little Monkey!');
    }
 