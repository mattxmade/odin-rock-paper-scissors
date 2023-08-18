
//---Global Variables---\\
let lastWidth = 0;
let gameRound = 1;
let currentIcon = '';

let playerScore = 0;
let computScore = 0;
let drawScore   = 0;

// --   Icon Selector      --\\
//--- Rock Paper Scissors ---\\
function playerSelection() {
  let playerChoice = '';
  let gameRound = 1;

  let animateIcon;

  // Translate icon to position when played
  const resetIcon    = 'translate(0,0)' 
  const rockIconPlay = 'translate(298px, 317px)';
  const paprIconPlay = 'translate(298px, 77px)';
  const sisrIconPlay = 'translate(298px, -164px)';

  // Elements
  const rock = document.getElementById('js-rock');
  const papr = document.getElementById('js-paper');
  const sisr = document.getElementById('js-scissors');

  const iconSelect = document.querySelectorAll('.js-player-icons');

  // Icons array | Passed to functions
  const rockGroup = [rock, papr, sisr];
  const paprGroup = [papr, sisr, rock]
  const sisrGroup = [sisr, rock, papr];

  //---START GAME---\\
  console.log(`Round ${gameRound}!`);
  updateRound(gameRound);

  iconSelect.forEach(icon => {
    icon.addEventListener('click', (e) => {

      // new PLR move
      playerChoice = e.target.id.toUpperCase();

      // new COM move
      const computerChoice = computerPlay();
      
      if (window.innerWidth > 1210) {

        animateIcon = 'play';

        switch(playerChoice) {
          case 'ROCK':
            playerClassSetter(rockGroup, 'selected');
            translateIconPosition('large', rockGroup, rockIconPlay);
            break;

          case 'PAPER':
            playerClassSetter(paprGroup, 'selected');
            translateIconPosition('large', paprGroup, paprIconPlay);
            break;

          case 'SCISSORS':
            playerClassSetter(sisrGroup, 'selected');
            translateIconPosition('large', sisrGroup, sisrIconPlay);
            break;
        }

        console.log(`Player selected: ${playerChoice}, CPU selected: ${computerChoice}`);

        // move COM icon 0.8s after PLR icon choice
        gameFlowPause(computerIcon, 800, animateIcon);

        // Pause for 1s before card flip reveal
        gameFlowPause(cardReveal, 1600, playerChoice, computerChoice, gameRound);
      }

      else { // small devices

        animateIcon = 'static';

        switch(playerChoice) {
          case 'ROCK':
            playerClassSetter(rockGroup, 'selected');
            translateIconPosition('small', rockGroup, rockIconPlay);
            break;

          case 'PAPER':
            playerClassSetter(paprGroup, 'selected');
            translateIconPosition('small', paprGroup, paprIconPlay);
            break;

          case 'SCISSORS':
            playerClassSetter(sisrGroup, 'selected');
            translateIconPosition('small', sisrGroup, sisrIconPlay);
            break;
        }

        // no delays
        console.log(`Player selected: ${playerChoice}, CPU selected: ${computerChoice}`);
        
        console.log(gameRound);
        // Declate winner and update scores
        const winner = roundWinner(playerChoice, computerChoice);
        updateScore(winner, gameRound);
      }
    });
  });

  // Track icons on viewport width change
  window.addEventListener('resize', (e) => {

    if (window.innerWidth <= 1210) {
      //group doesn't matter as device target is small - icons remain static
      translateIconPosition('small', rockGroup, resetIcon);

      // store last width change
      lastWidth = window.innerWidth;

      // opponent
      computerIcon('static');
    }

    // rest board if last width was below 1210 | widths bigger than this wont retirgger actions
    else {
        lastWidth === 0 ? lastWidth = window.innerWidth : lastWidth;
        if (lastWidth <= 1210) resetBoard();
    }
  });
  // Ready for next player choice;
  playerChoice = 'none';
}

// Computer Move
function computerPlay() {
  const moveSelection = ['ROCK', 'PAPER', 'SCISSORS'];
  return moveSelection[Math.floor(Math.random() * moveSelection.length)];
}

function computerIcon(positionIcon) {
  const cpuIcon = document.querySelector('.js-computer-icon');

  if (window.innerWidth <= 1210) {
    cpuIcon.style.zIndex = -1;
    cpuIcon.style.visibility = 'hidden';
    cpuIcon.style.position = 'absolute';
  }

  else {
    
    cpuIcon.style.position = 'relative';

    if (positionIcon === 'play') {
      cpuIcon.style.transform = 'translate(-330.05px, 0px)';
      cpuIcon.style.zIndex = -1;
      cpuIcon.style.visibility = 'hidden';
    }

    else {
      cpuIcon.style.transform = 'translate(0,0)';
      cpuIcon.style.zIndex = 0;
      cpuIcon.style.visibility = 'visible';
    }
  }
}

function roundWinner(plrChoice, comChoice) {
  // Player Wins
  if (plrChoice === comChoice) {
    winner = 'DRW';
  }
  if (plrChoice === 'ROCK' && comChoice === 'SCISSORS') {
    winner = 'PLR';
  }
  if (plrChoice === 'PAPER' && comChoice === 'ROCK') {
    winner = 'PLR';
  }
  if (plrChoice === 'SCISSORS' && comChoice === 'PAPER') {
    winner = 'PLR';
  }

  // Computer Wins
  if (comChoice === 'ROCK' && plrChoice === 'SCISSORS') {
    winner = 'COM';
  }
  if (comChoice === 'PAPER' && plrChoice === 'ROCK') {
    winner = 'COM';
  }
  if (comChoice === 'SCISSORS' && plrChoice === 'PAPER') {
    winner = 'COM';
  }

  return winner;
}

function updateRound(gameRound) {
  const victoryItemBox  = document.querySelector('.victory-item');
  const gameRoundNunber = document.querySelector('.round-number');

  gameRoundNunber.textContent = gameRound;
  victoryItemBox.appendChild(gameRoundNunber);
}

function cardReveal(playerChoice, computerChoice, currentRound) {

  const card = document.querySelector('.card__inside');
  const cardBody = document.querySelector('.card__body');
  const displayMessage1 = document.getElementById('reveal-winner-A');
  const displayMessage2 = document.getElementById('reveal-winner-B');

  displayMessage1.style.textAlign = 'center';
  displayMessage1.style.fontSize = '2rem';

  displayMessage2.style.fontSize = '1.2rem';
  displayMessage2.style.textAlign = 'center';

  displayMessage1.style.fontFamily = `'Bebas Neue', cursive`;
  displayMessage2.style.fontFamily = `'Syne Tactile', cursive`;

  const winner = roundWinner(playerChoice, computerChoice);

  switch(winner) {
    case 'PLR':
      displayMessage1.textContent = `YOU WIN!`;
      displayMessage2.textContent = `${playerChoice} beats ${computerChoice}!`;
      console.log(`YOU WIN! ${playerChoice} beats ${computerChoice}!`);
      break;
    case 'COM':
      displayMessage1.textContent = `YOU LOSE!`;
      displayMessage2.textContent = `${computerChoice} beats ${playerChoice}!`;
      console.log(`YOU LOSE! ${computerChoice} beats ${playerChoice}!`);
      break;
    case 'DRW':
      displayMessage1.textContent = `DRAW GAME!`;
      displayMessage2.textContent = `${playerChoice} matches ${computerChoice}!`;
      console.log(`DRAW GAME! ${computerChoice} matches ${playerChoice}!`);
      break;
  }

  if (winner !== '') {
    cardBody.appendChild(displayMessage1);
    cardBody.appendChild(displayMessage2);
    card.classList.toggle('is-flipped');
  }

  // 1st) DELAY 4s THEN flip card
  gameFlowPause(flipCard, 4000, card);

  // 2nd) DELAY 6.5s THEN present score
  gameFlowPause(updateScore, 6500, winner, currentRound);

  // 3rd) DELAY 5.5s THEN reset board
  gameFlowPause(resetBoard, 5500);

  // Total Time: 16s
}

function flipCard(card) {
  card.classList.toggle('is-flipped');
}

function updateScore(roundWinner, playedRound) {
  const firstRoundPLR = document.querySelector('.js-round1-plr');
  const firstRoundCOM = document.querySelector('.js-round1-com');

  const secondRoundPLR = document.querySelector('.js-round2-plr');
  const secondRoundCOM = document.querySelector('.js-round2-com');

  const thirdRoundPLR = document.querySelector('.js-round3-plr');
  const thirdRoundCOM = document.querySelector('.js-round3-com');

  const fourthRoundPLR = document.querySelector('.js-round4-plr');
  const fourthRoundCOM = document.querySelector('.js-round4-com');

  const fifthRoundPLR = document.querySelector('.js-round5-plr');
  const fifthRoundCOM = document.querySelector('.js-round5-com');

  playedRound = gameRound;

  if (playedRound === 1) {
    if (roundWinner === 'PLR') {
      firstRoundPLR.classList.remove('fa-circle-o');
      firstRoundPLR.classList.add('fa-circle');

      playerScore+=1;
    }
    else if (roundWinner === 'COM') {
      firstRoundCOM.classList.remove('fa-circle-o');
      firstRoundCOM.classList.add('fa-circle');

      computScore+=1;
    }
    else {
      firstRoundPLR.classList.remove('fa-circle-o');
      firstRoundCOM.classList.remove('fa-circle-o');

      firstRoundPLR.classList.add('fa-dot-circle-o');
      firstRoundCOM.classList.add('fa-dot-circle-o');

      drawScore+=1;
    }
  }

  if (playedRound === 2) {
    if (roundWinner === 'PLR') {
      secondRoundPLR.classList.remove('fa-circle-o');
      secondRoundPLR.classList.add('fa-circle');

      playerScore+=1;
    }
    else if (roundWinner === 'COM') {
      secondRoundCOM.classList.remove('fa-circle-o');
      secondRoundCOM.classList.add('fa-circle');

      computScore+=1;
    }
    else {
      secondRoundPLR.classList.remove('fa-circle-o');
      secondRoundCOM.classList.remove('fa-circle-o');

      secondRoundPLR.classList.add('fa-dot-circle-o');
      secondRoundCOM.classList.add('fa-dot-circle-o');
      
      drawScore+=1;
    }
  }

  if (playedRound === 3) {
    if (roundWinner === 'PLR') {
      thirdRoundPLR.classList.remove('fa-circle-o');
      thirdRoundPLR.classList.add('fa-circle');

      playerScore+=1;
    }
    else if (roundWinner === 'COM') {
      thirdRoundCOM.classList.remove('fa-circle-o');
      thirdRoundCOM.classList.add('fa-circle');

      computScore+=1;
    }
    else {
      thirdRoundPLR.classList.remove('fa-circle-o');
      thirdRoundCOM.classList.remove('fa-circle-o');

      thirdRoundPLR.classList.add('fa-dot-circle-o');
      thirdRoundCOM.classList.add('fa-dot-circle-o');

      drawScore+=1;
    }
  }

  if (playedRound === 4) {
    if (roundWinner === 'PLR') {
      fourthRoundPLR.classList.remove('fa-circle-o');
      fourthRoundPLR.classList.add('fa-circle');

      playerScore+=1;
    }
    else if (roundWinner === 'COM') {
      fourthRoundCOM.classList.remove('fa-circle-o');
      fourthRoundCOM.classList.add('fa-circle');

      computScore+=1;
    }
    else {
      fourthRoundPLR.classList.remove('fa-circle-o');
      fourthRoundCOM.classList.remove('fa-circle-o');

      fourthRoundPLR.classList.add('fa-dot-circle-o');
      fourthRoundCOM.classList.add('fa-dot-circle-o');

      drawScore+=1;
    }
  }

  if (playedRound === 5) {
    if (roundWinner === 'PLR') {
      fifthRoundPLR.classList.remove('fa-circle-o');
      fifthRoundPLR.classList.add('fa-circle');

      playerScore+=1;
    }
    else if (roundWinner === 'COM') {
      fifthRoundCOM.classList.remove('fa-circle-o');
      fifthRoundCOM.classList.add('fa-circle');

      computScore+=1;
    }
    else {
      fifthRoundPLR.classList.remove('fa-circle-o');
      fifthRoundCOM.classList.remove('fa-circle-o');

      fifthRoundPLR.classList.add('fa-dot-circle-o');
      fifthRoundCOM.classList.add('fa-dot-circle-o');

      drawScore+=1;
    }
  }

  console.log(playerScore, computScore, drawScore);

  playedRound++;
  gameRound = playedRound;

  if (playedRound < 6) {
    updateRound(gameRound);
    console.log(`Round ${gameRound}!`);
  }

  const pointCounters = document.querySelectorAll('.js-point');

  if (playedRound > 5) {
    let gameWinner = '';

    if (playerScore > computScore) gameWinner = 'PLAYER';
    if (playerScore < computScore) gameWinner = 'COMPUTER';
    if (playerScore === computScore) gameWinner = 'DRAW';

    pointCounters.forEach(point => {

      point.classList.remove('fa-circle');
      point.classList.remove('fa-dot-circle-o');

      point.classList.add('fa-circle-o');
    });

    console.log('NEW GAME OR GAME OVER?');

    // need to tally points
    resetBoard();
    winnerPopup(gameWinner, playerScore, computScore, drawScore);
    gameRound = 1;
  }
}

// Winner Pop-up
function winnerPopup(winner, scorePlayer, scoreCom, scoreDraw) {
  console.log(winner);

  const makeInvisible = document.querySelector('main');
  makeInvisible.style.visibility = 'hidden';

  const popup = document.querySelector('.winner-popup');

  const displayWinner = document.querySelector('.popup-title');
  const displayImage  = document.querySelector('.popup-image');
  const popupMessage  = document.querySelector('.popup-message');

  const checkBoxes = document.querySelectorAll('.check-box');
  checkBoxes[0].style.visibility = 'visible';
  checkBoxes[1].style.visibility = 'visible';

  switch(winner) {
    case 'PLAYER':
      displayWinner.textContent = 'You Won!';
      displayWinner.style.color = 'turquoise';
      popupMessage.textContent = '"Victory Is Yours!..."'
      popupMessage.style.color = 'yellow';
      displayImage.src = 'images/passive3.png';
      break;

    case 'COMPUTER':
      displayWinner.textContent = 'You Lost!';
      displayWinner.style.color = 'red';
      popupMessage.textContent = '"A Heavy Defeat!..."'
      popupMessage.style.color = 'red';
      displayImage.src = 'images/active5.png';
      break;

    case 'DRAW':
      displayWinner.textContent = 'Draw Game!';
      displayWinner.style.color = 'white';
      popupMessage.textContent = '"A Decider Is Needed!..."'
      popupMessage.style.color = 'yellow';
      displayImage.src = 'images/active2.png';
      break;
  }

  popup.insertBefore(displayWinner, popup.childNodes[0]);
  popup.insertBefore(popupMessage, popup.childNodes[2]);

  const displayScore = document.querySelector('.popup-score');
  displayScore.style.color = 'darkgray'
  displayScore.textContent = `YOU: ${scorePlayer} | CPU: ${scoreCom} | Draws: ${scoreDraw}`;

  popup.insertBefore(displayScore, popup.childNodes[7]);
  popup.style.visibility = 'visible';

  checkBoxes.forEach(checker => {
    checker.addEventListener('click', (e) => {
      if (e.target.id === 'yes')  {
        checkBoxes[0].style.visibility = 'hidden';
        checkBoxes[1].style.visibility = 'hidden';
        popup.style.visibility = 'hidden';
        playerScore = 0;
        computScore = 0;
        drawScore   = 0;
        gameRound = 1;
        updateRound(gameRound);
        makeInvisible.style.visibility = 'visible';
        resetBoard();
      }
      else {

      }
    });
  });
}

//
function resetBoard() {
  const resetIcons = document.querySelectorAll('.rps-icons');
  const playerCard = document.querySelector('.card-area-left');


  resetIcons.forEach(icon => {
    // Reset icons
    const iconPosition = 'translate(0,0)';
    icon.style.position = 'relative';

    icon.style.transform = iconPosition;
    icon.style.zIndex = 0;

    icon.style.visibility = 'visible';
      
    // Remove highlight from player selected icon
    icon.classList.remove('visible');
    icon.classList.remove('selected');

    playerCard.style.zIndex = -1;

    computerIcon('reset');
  });
}

//--- Utility Functions ---\\

// Position player Icons
function translateIconPosition(screenSize, group, newIconPosition) {
  const resetPosition = 'translate(0,0)';
  const playerCard = document.querySelector('.card-area-left');

  if (screenSize === 'large') {
    group[0].style.transform = newIconPosition;
    group[0].style.zIndex = 1;

    group[1].style.transform = resetPosition;
    group[1].style.zIndex = -1;

    group[2].style.transform = resetPosition;
    group[2].style.zIndex = -1;

    playerCard.style.zIndex = 0;
  }

  else { // small screen
    group[0].style.transform = resetPosition;
    group[1].style.transform = resetPosition;
    group[2].style.transform = resetPosition;

    group[0].style.zIndex = 1;
    group[1].style.zIndex = 1;
    group[2].style.zIndex = 1;
  }

}

// Game Flow :: Time between actions
function gameFlowPause(callAfter, timeDelay, ...args) {
  const flowTimer = setTimeout(callAfter, timeDelay, ...args);
  flowTimer;
}

//
function playerClassSetter(group, targetClass) {
  group[0].classList.add(targetClass);
  group[1].classList.remove(targetClass);
  group[2].classList.remove(targetClass);
}

//
function playerStyleSetter(element, property, value) {
  element.style[property] = value;
}

// New Game of Rock Paper Scissors
function newGame() {
  playerSelection();
}

// Rock Paper Scissors Title-Screen
function splashScreen() {
  const startButton = document.querySelector('.start-button');

  startButton.addEventListener('click', () => {
    const splashScreen = document.querySelector('.splashscreen');

    splashScreen.remove();
    newGame();
  });
}

splashScreen();