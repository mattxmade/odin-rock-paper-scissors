let translate = '';
let currentIcon = '';
const resetPosition = 'translate(0,0)';

let playerMove = '';

let lastWidth = 0;

let roundNumber = 1;
let winner = '';

function roundWinner(plrChoice, comChoice) {
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

function cardReveal(computerChoice) {
  
  const card = document.querySelector('.card__inside');
  const cardBody = document.querySelector('.card__body');
  const displayCpuChoice = document.getElementById('revealRPS');

  console.log(`player: ${playerMove}, cpu: ${computerChoice}`);

  roundNumber = roundNumber;

  const winner = roundWinner(playerMove, computerChoice);

  switch(winner) {
    case 'PLR':
      displayCpuChoice.textContent = `YOU WIN! | You : ${playerMove} | CPU : ${computerChoice}`;
      console.log('You Win!');
      break;
    case 'COM':
      displayCpuChoice.textContent = `YOU LOSE! | You : ${playerMove} | CPU : ${computerChoice}`;
      console.log('You Lose!');
      break;
    case 'DRW':
      displayCpuChoice.textContent = `DRAW GAME!| You : ${playerMove} | CPU : ${computerChoice}`;
      console.log('Draw Game!');
      break;
  }

  if (winner !== '') {
    cardBody.appendChild(displayCpuChoice);
    card.classList.toggle('is-flipped');
  }

  // 1st) DELAY 4s THEN flip card
  gameFlowPause(flipCard, 4000, card);

  // 2nd) DELAY 6.5s THEN present score
  gameFlowPause(updateScore, 6500, winner, roundNumber);

  // 3rd) DELAY 5.5s THEN reset board
  gameFlowPause(resetBoard, 5500);

  // Total Time: 16s
}

function resetBoard() {
  const resetIcons = document.querySelectorAll('.rpsIcons');
  resetIcons.forEach(icon => {

    translate = 'translate(0,0)';
    icon.style.position = 'relative';
    icon.style.transform = translate;
    icon.style.zIndex = 0;
    icon.style.visibility = 'visible';

    icon.classList.remove('visible');
    icon.classList.remove('selected');
  });
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

  const pointCounters = document.querySelectorAll('.js-point');


  if (playedRound === 1) {
    if (roundWinner === 'PLR') {
      firstRoundPLR.classList.remove('fa-circle-o');
      firstRoundPLR.classList.add('fa-circle');
    }
    else if (roundWinner === 'COM') {
      firstRoundCOM.classList.remove('fa-circle-o');
      firstRoundCOM.classList.add('fa-circle');
    }
    else {
      firstRoundPLR.classList.remove('fa-circle-o');
      firstRoundCOM.classList.remove('fa-circle-o');

      firstRoundPLR.classList.add('fa-dot-circle-o');
      firstRoundCOM.classList.add('fa-dot-circle-o');
    }
  }

  if (playedRound === 2) {
    if (roundWinner === 'PLR') {
      secondRoundPLR.classList.remove('fa-circle-o');
      secondRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      secondRoundCOM.classList.remove('fa-circle-o');
      secondRoundCOM.classList.add('fa-circle');
    }
    else {
      secondRoundPLR.classList.remove('fa-circle-o');
      secondRoundCOM.classList.remove('fa-circle-o');

      secondRoundPLR.classList.add('fa-dot-circle-o');
      secondRoundCOM.classList.add('fa-dot-circle-o');
    }
  }

  if (playedRound === 3) {
    if (roundWinner === 'PLR') {
      thirdRoundPLR.classList.remove('fa-circle-o');
      thirdRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      thirdRoundCOM.classList.remove('fa-circle-o');
      thirdRoundCOM.classList.add('fa-circle');
    }
    else {
      thirdRoundPLR.classList.remove('fa-circle-o');
      thirdRoundCOM.classList.remove('fa-circle-o');

      thirdRoundPLR.classList.add('fa-dot-circle-o');
      thirdRoundCOM.classList.add('fa-dot-circle-o');
    }
  }

  if (playedRound === 4) {
    if (roundWinner === 'PLR') {
      fourthRoundPLR.classList.remove('fa-circle-o');
      fourthRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      fourthRoundCOM.classList.remove('fa-circle-o');
      fourthRoundCOM.classList.add('fa-circle');
    }
    else {
      fourthRoundPLR.classList.remove('fa-circle-o');
      fourthRoundCOM.classList.remove('fa-circle-o');

      fourthRoundPLR.classList.add('fa-dot-circle-o');
      fourthRoundCOM.classList.add('fa-dot-circle-o');
    }
  }

  if (playedRound === 5) {
    if (roundWinner === 'PLR') {
      fifthRoundPLR.classList.remove('fa-circle-o');
      fifthRoundPLR.classList.add('fa-circle');
    }
    else if (roundWinner === 'COM') {
      fifthRoundCOM.classList.remove('fa-circle-o');
      fifthRoundCOM.classList.add('fa-circle');
    }
    else {
      fifthRoundPLR.classList.remove('fa-circle-o');
      fifthRoundCOM.classList.remove('fa-circle-o');

      fifthRoundPLR.classList.add('fa-dot-circle-o');
      fifthRoundCOM.classList.add('fa-dot-circle-o');
    }
  }

  roundNumber++;
  playedRound = roundNumber;

  // delay this | this is you ask if user wants to play again | while loop | yes play again | no outro
  if (playedRound === 6) {
    console.log('GAME OVER');
    playedRound = 0;

    pointCounters.forEach(point => {
      point.classList.remove('fa-circle');
      point.classList.remove('fa-dot-circle-o');


      point.classList.add('fa-circle-o');
    });
    roundNumber = 0;
  }
  console.log(`Round ${playedRound}!`);
} 

// 1) Computer Move
function computerPlay(playerIconPosition) {
  const cpuIcon = document.querySelector('.js-computer-icon');

  // moves stored inside array
  const moveSelection = ['ROCK', 'PAPER', 'SCISSORS'];

  const computerChoice = moveSelection[Math.floor(Math.random() * moveSelection.length)];

  if (window.innerWidth <= 1210) {
    cpuIcon.style.zIndex = -1;
    cpuIcon.style.visibility = 'hidden';
    cpuIcon.style.position = 'absolute';
  }
  else {
    cpuIcon.style.position = 'relative';
    if (playerIconPosition !== 'translate(0,0)' && playerIconPosition !== '') {
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
  console.log(`Cpu selected: ${computerChoice}`);
  const delayrevealMove = setTimeout(cardReveal, 1000, computerChoice);
  delayrevealMove;
  // return computerChoice;
}

function playerSelection() {
  console.log(`Round ${roundNumber}!`);

  const rock = document.getElementById('js-rock');
  const papr = document.getElementById('js-paper');
  const sisr = document.getElementById('js-scissors');

  const undoSelect = document.querySelector('.gameBoard');
  const iconSelect = document.querySelectorAll('.js-player-icons');

  const deselectAllIcons = document.querySelectorAll('.selectable');

  rock.style.position = 'relative';
  papr.style.position = 'relative';
  sisr.style.position = 'relative';

  // testing
  //console.log(window.innerWidth);

  window.addEventListener('resize', (e) => {

    if (window.innerWidth <= 1210) {
      translateIconPosition('small', rock, papr, sisr);

      // store last width change
      lastWidth = window.innerWidth;

      // opponent
      computerPlay(resetPosition);
    }
    else {
      // Viewports larger than 1210px | lastWidth stores last size below 1210 - does not update if current viewport is > 1210
      if (lastWidth <= 1210) {
        switch(currentIcon) {
          case 'ROCK':
            translateIconPosition('large', rock, papr, sisr);
            computerPlay(translate);
            break;
          case 'PAPER':
            translateIconPosition('large', papr, sisr, rock);
            computerPlay(translate);
            break;
          case 'SCISSORS':
            translateIconPosition('large', sisr, rock, papr);
            computerPlay(translate);
            break;
        }        
      }

    }
  });

  // game area - click to cancel selected move
  // undoSelect.addEventListener('click', (e) => {

  //   if (window.innerWidth > 1210) {
  //     undoSelect.style.cursor = 'default';

  //     deselectAllIcons.forEach(icon => {
  //       icon.classList.remove('visible');
  //       icon.classList.remove('selected');

  //       rock.style.transform = resetPosition;
  //       papr.style.transform = resetPosition;
  //       sisr.style.transform = resetPosition;

  //       rock.style.zIndex = 1;
  //       papr.style.zIndex = 1;
  //       sisr.style.zIndex = 1;
  //     });
  //   }
  //   const delayCpuMove = setTimeout(computerPlay, 500, resetPosition);
  //   delayCpuMove;
  // });

  iconSelect.forEach((icon, index) => {

    icon.addEventListener('click', (e) => {
      if (window.innerWidth > 1210) {
        // undoSelect.style.cursor = 'pointer';

        switch(index) {
          case 0:
            playerClassSetter(rock, papr, sisr, 'selected');

            papr.style.zIndex = -1;
            sisr.style.zIndex = -1;
            
            translate = 'translate(298px, 317px)';
            rock.style.transform = translate;

            playerMove = 'ROCK';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 1:

            playerClassSetter(papr, sisr, rock, 'selected');

            sisr.style.zIndex = -1;
            rock.style.zIndex = -1;

            translate = 'translate(298px, 77px)';
            papr.style.transform = translate;

            playerMove = 'PAPER';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 2:
            playerClassSetter(sisr, rock, papr, 'selected');

            rock.style.zIndex = -1;
            papr.style.zIndex = -1;

            translate = 'translate(298px, -164px)';
            sisr.style.transform = translate;

            playerMove = 'SCISSORS';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;
        }

      } 
      
      else {
        switch(index) {
          case 0:
            playerClassSetter(rock, papr, sisr, 'selected');
            // rock.classList.add('selected');

            // papr.classList.remove('selected');
            // sisr.classList.remove('selected');

            translate = 'translate(298px, 317px)';

            playerMove = 'ROCK';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 1:
            playerClassSetter(papr, sisr, rock, 'selected');
            // papr.classList.add('selected');

            // sisr.classList.remove('selected');
            // rock.classList.remove('selected');

            translate = 'translate(298px, 77px)';

            playerMove = 'PAPER';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 2:
            playerClassSetter(sisr, rock, papr, 'selected');
            // sisr.classList.add('selected');

            // rock.classList.remove('selected');
            // papr.classList.remove('selected');
            
            translate = 'translate(298px, -164px)';

            playerMove = 'SCISSORS';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;
        }
      }
      gameFlowPause(computerPlay, 800, translate);
    });
  });
  //return playerMove;
}

playerSelection();

// moves icon if viewport width <= 1210px | small viewport game version
function translateIconPosition(screenSize, selectedIcon, deselected_A, deselected_B) {

  if (screenSize === 'small') {
    selectedIcon.style.transform = resetPosition;
    deselected_A.style.transform = resetPosition;
    deselected_B.style.transform = resetPosition;

    selectedIcon.style.zIndex = 1;
    deselected_A.style.zIndex = 1;
    deselected_B.style.zIndex = 1;
  }

  if (screenSize === 'large') {
    selectedIcon.style.position = 'relative';
    selectedIcon.style.transform = translate;
    selectedIcon.style.zIndex = 0;

    deselected_A.style.position = 'relative';
    deselected_A.style.transform = resetPosition;
    deselected_A.style.zIndex = -1;

    deselected_B.style.position = 'relative';
    deselected_B.style.transform = resetPosition;
    deselected_B.style.zIndex = -1;
  }
}

function gameFlowPause(callAfter, timeDelay, ...args) {

  // console.log('flowTimer');
  const flowTimer = setTimeout(callAfter, timeDelay, ...args);
  flowTimer;
}

function playerClassSetter(selectedMove, secondMove, thirdMove, targetClass) {
  selectedMove.classList.add(targetClass);
  secondMove.classList.remove(targetClass);
  thirdMove.classList.remove(targetClass);
}