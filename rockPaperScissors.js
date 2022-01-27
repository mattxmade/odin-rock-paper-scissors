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

function computerPlay() {
  const moveSelection = ['rock', 'paper', 'scissors'];

  return moveSelection[Math.floor(Math.random() * moveSelection.length)];
}

// debugging
// console.log(computerPlay());
