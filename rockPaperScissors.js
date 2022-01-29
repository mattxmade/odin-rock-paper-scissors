// 1)
// Create function computerPlay()
// Return random choice of rock paper scissors
// Check function works as intended

// 2)
// Create function playerSelection()
// Function should get input from user
// Accpetable user input: rock paper scissors
// Convert input to lower case
// Check if user input is valid
// If not valid alert error message + invoke playerSelection()
// Return user choice if choice is valid

// 3)
// Create function playRound()
// Takes two parameters: playerSelection computerSelection()
// If draw - no points
// If user wins  - 1 point to player
// If user loses - 1 point to computer
// Track points
// Declare scores in seperate function finalScores()

// 4)
// Create function game()
// plays a user defined number of rounds

// 5)
// Create function finalScores()
// Takes two parameters: playerPoints | computerPoints
// If playerPoints equal to computerPoints
    // Draw game + draw ouput message (play again?)
// If playerPoints > computerPoints
    // Player wins + winning message (play again?)
// If playerPoints < computerPoints
    // Player loses + losing messgae (play again?)

// replay game if user wants to play again
// exit if not + thanks for playing message

// 6) Additional helper functions

//---------------------------------------------------------------------------------

// 1) Computer Move
function computerPlay() {
  // moves stored inside array
  const moveSelection = ['Rock', 'Paper', 'Scissors'];

  // Math methods used to return random number 0-2 based on index position of array
  return moveSelection[Math.floor(Math.random() * moveSelection.length)];
}

// testing
// console.log(computerPlay());

// 2) Player Move
function playerSelection() {
  let playerMove = prompt('Rock Paper or Scissors?');

  // user cancelled game
  if (playerMove === null) {
    confirm('Do you want to continue playing?') ? playerMove = prompt('Rock Paper or Scissors?')
    : alert('Thanks for playing!');
  }

  // capitalise string for uniformity
  playerMove = capitalise(playerMove);

  switch(playerMove) {
    case 'Rock':
      break;

    case 'Paper':
      break;

    case 'Scissors':
      break;

    default:
      playerMove = invalidMove(playerMove);
      alert(playerMove);
      break;
  }
  // return to start if playerMove is invalid (scissors is 8 characters long - anything longer is treated as an error)
  return playerMove.length > 8 ? playerSelection() : playerMove;
}

// testing
//console.log(playerSelection());

// 2b) Input validator functions
function invalidMove(playerMove) {
  return playerMove === '' 
  ? playerMove = `You didn't enter a move...` 
  : playerMove = `Invalid move! The input of ${playerMove} is not recognised!`;
}

// 3)
function playRound(rounds, roundNum) {

  roundNum = roundNum +1;
  let displayMessage = '';

  switch(roundNum) {
    case 1:
      displayMessage = `The Game Begins: First Round of ${rounds}!`;
      break;
    case rounds:
      displayMessage = 'Final Round!';
      break;
    default:
      displayMessage = `Round ${roundNum}/${rounds}`;
      break;
  }

  alert(displayMessage);

  // new user move choice | new random computer move choice
  let userMove = playerSelection();
  let compMove = computerPlay();

  // function returns this variable
  let roundWinner = '';

  // draw
  if (userMove === compMove) { 
    let winner = 'draw';
    alert(`Draw Game! Both chose ${userMove}!`); 
  }

  // player wins
  if (userMove === 'Rock' && compMove === 'Scissors') {
    roundWinner = 'player';
    alert('You Won! Rock beats Scissors!');
  }
  else if (userMove === 'Paper' && compMove === 'Rock') {
    roundWinner = 'player';
    alert('You Won! Paper beats Rock!');
  }
  else if (userMove === 'Scissors' && compMove === 'Paper') {
    roundWinner = 'player';
    alert('You Won! Scissors beats Paper!');
  }

  // computer wins
  if (compMove === 'Rock' && userMove === 'Scissors') {
    roundWinner = 'computer';
    alert('You Lose! Rock beats Scissors!');
  }
  else if (compMove === 'Paper' && userMove === 'Rock') {
    roundWinner = 'computer';
    alert(`You Lose! Paper beats Rock!`);
  }
  else if (compMove === 'Scissors' && userMove === 'Paper') {
    roundWinner = 'computer';
    alert('You Lose! Scissors beats Paper!');
  }
  return roundWinner;
}

// testing
//playRound();

// 4) Play a round of games
function game(playGame = true) {
  let roundNum = 0;
  let rounds = prompt('How many rounds would you like play? Enter a number 1-12');

  // cancel game?
  if (rounds === null) {
    playGame = false;
    confirm('Keep playing?') ? game() : alert('Thanks for playing!');
  }

  // continue to game
  if ( playGame ) {
    let playerScore = 0;
    let comptrScore = 0;
    let numDrawGame = 0;

    // convert string to number
    rounds = Number(rounds);

    // verify number of rounds meets game rules
    if (isNaN(rounds) || rounds <= 0 || rounds > 12) {
      alert('Must be a number between 1-12');
      game();
    }

    // play game
    while (roundNum < rounds) {

      // who won the round
      roundWinner = playRound(rounds, roundNum);

      // round score 
      switch(roundWinner) {
        case 'player':
          playerScore+=1;
          break;
        case 'computer':
          comptrScore+=1;
          break;
        default:
          numDrawGame+=1;
          break;
      }

      // move to next round
      roundNum+=1;

      // display score after each round
      alert(`Round ${roundNum} Scores: Player ${playerScore} | Computer ${comptrScore} | Draws: ${numDrawGame}`);      
    }

    // score overall
    let gameResult = finalScores(playerScore, comptrScore);

    // play again?
    confirm(gameResult) ? game() : 'Thanks for playing!';
  }
}

// testing
//game();

// 5) Scores | declare winner functions
function finalScores(playerScore, comptrScore) {
  let result = '';

  alert(`Final Scores: Player ${playerScore} || Computer ${comptrScore}`);

  // player has most wins
  if (playerScore > comptrScore) {
    result = `You Won! Congrats! Would you like to play another game?`;
  }

  // computer has most wins
  else if (playerScore < comptrScore) {
    result = `You Lost! Unlucky! Would you like to play another game?`;
  }

  // draw
  else {
    result = `Draw Game! Would you like to play again?`;
  }
  return result;
}

// Capitalise string function
function capitalise(string) {
  if (typeof(string) === 'string') {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  else {
    alert('Must be a string');
  }
}

// newGame with welcome message
function newGame() {
  alert('Rock Paper Scissors by mattxmade');
  game();
}

// invoke newGame function to start a new game of Rock Paper Scissors
newGame();