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

// 1)
function computerPlay() {
  // moves stored inside array
  const moveSelection = ['rock', 'paper', 'scissors'];

  // Math methods used to return random number 0-2 based on index position of array
  return moveSelection[Math.floor(Math.random() * moveSelection.length)];
}

// debugging
// console.log(computerPlay());

// 2) Player
function playerSelection() {
  let playerMove = prompt('Rock Paper or Scissors?');

  // user cancelled game
  if (playerMove === null) {
    confirm('Do you want to continue playing?') ? playerSelection() : alert('Thanks for playing!');
  }

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
console.log(playerSelection());

// 2b) Input validator functions
function invalidMove(playerMove) {
  return playerMove === '' 
  ? playerMove = `You didn't enter a move...` 
  : playerMove = `Invalid move! The input of ${playerMove} is not recognised!`;
}
