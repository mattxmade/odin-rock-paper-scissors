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
// Declare winner in seperate function decideWinner()

// 4)
// Create function game()
// plays a user defined number of rounds

// 5)
// Create function decideWinner()
// Takes two parameters: playerPoints | computerPoints
// If playerPoints equal to computerPoints
    // Draw game + draw ouput message (play again?)
// If playerPoints > computerPoints
    // Player wins + winning message (play again?)
// If playerPoints < computerPoints
    // Player loses + losing messgae (play again?)

// replay game if user wants to play again
// exit if not + thanks for playing message

//---------------------------------------------------------------------------------

// 1) Computer Move
function computerPlay() {
  // moves stored inside array
  const moveSelection = ['rock', 'paper', 'scissors'];

  // Math methods used to return random number 0-2 based on index position of array
  return moveSelection[Math.floor(Math.random() * moveSelection.length)];
}

// debugging
// console.log(computerPlay());

// 2) Player Move
function playerSelection() {
  let playerMove = prompt('Rock Paper or Scissors?');

  // user cancelled game
  if (playerMove === null) {
    confirm('Do you want to continue playing?') ? playerMove = prompt('Rock Paper or Scissors?')
    : alert('Thanks for playing!');
  }

  playerMove = String(playerMove);

  // covert input string to lower case
  playerMove = playerMove.toLowerCase();

  switch(playerMove) {
    case 'rock':
      break;

    case 'paper':
      break;

    case 'scissors':
      break;

    default:
      playerMove = invalidMove(playerMove);
      alert(playerMove);
      break;
  }
  // return to start if playerMove is invalid (scissors is 8 characters long - anything longer is treated as an error)
  return playerMove.length > 8 ? playerSelection() : playerMove;
}

// debugging
//console.log(playerSelection());

// 2b) Input validator functions
function invalidMove(playerMove) {
  return playerMove === '' 
  ? playerMove = `You didn't enter a move...` 
  : playerMove = `Invalid move! The input of ${playerMove} is not recognised!`;
}

// 3)
function playRound(userMove, compMove) {
  let roundWinner = '';

  // draw
  if (userMove === compMove) { 
    let winner = 'draw';
    alert(`Draw Game! ${userMove} was chosen!`); 
  }

  // player wins
  if (userMove === 'rock' && compMove === 'scissors') {
    roundWinner = 'player';
    alert(`You Won! Rock beats Scissors!`);
  }
  else if (userMove === 'paper' && compMove === 'rock') {
    roundWinner = 'player';
    alert(`You Won! Paper beats Rock!`);
  }
  else if (userMove === 'scissors' && compMove === 'paper') {
    roundWinner = 'player';
    alert(`You Won! Scissors beats Paper!`);
  }

  // computer wins
  if (compMove === 'rock' && userMove === 'scissors') {
    roundWinner = 'computer';
    alert(`You Lose! Rock beats Scissors`);
  }
  else if (compMove === 'paper' && userMove === 'rock') {
    roundWinner = 'computer';
    alert(`You Lose! Paper beats Rock!`);
  }
  else if (compMove === 'scissors' && userMove === 'paper') {
    roundWinner = 'computer';
    alert(`You Lose! Scissors beats Paper!`);
  }
  return roundWinner;
}

// debugging
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

    // convert string to number
    rounds = Number(rounds);

    // verify number of rounds meets game rules
    if (isNaN(rounds) || rounds <= 0 || rounds > 12) {
      alert('Must be a number between 1-12');
      game();
    }

    // play game
    while (roundNum < rounds) {

      // user move choice | comp random move choice
      let userMove = playerSelection();
      let compMove = computerPlay();

      // who won the round
      roundWinner = playRound(userMove, compMove);

      // round score 
      switch(roundWinner) {
        case 'player':
          playerScore+=1;
          break;
        case 'computer':
          comptrScore+=1;
          break;
      }

      // move to next round
      roundNum+=1;

      // display score after each round
      alert(`Round ${roundNum} Scores: Player ${playerScore} | Computer ${comptrScore}`);      
    }

    // score overall
    let gameResult = calculateScores(playerScore, comptrScore);

    // play again?
    confirm(gameResult) ? game() : 'Thanks for playing!';

    //presentWinner(gameResult);
  }
}

// debugging
//game();

// 5) Scores | declare winner functions
function calculateScores(playerScore, comptrScore) {
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

// newGame with welcome message
function newGame() {
  alert('Rock Paper Scissors by mattxmade');
  game();
}

// invoke newGame function to start a new game of Rock Paper Scissors
newGame();