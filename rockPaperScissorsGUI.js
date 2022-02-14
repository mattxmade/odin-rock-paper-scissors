let translate = '';
let currentIcon = '';
const resetPosition = 'translate(0,0)';

let playerMove = '';

let lastWidth = 0;

let roundNumber = 1;
let winner = '';

let comScoreIcon = '';
let plrScoreIcon = '';

function cardReveal(computerChoice) {
  const card = document.querySelector('.card__inside');
  const cardBody = document.querySelector('.card__body');
  const displayCpuChoice = document.getElementById('revealRPS');

  console.log(`player: ${playerMove}, cpu: ${computerChoice}`);

  roundNumber = roundNumber;

  if (playerMove === computerChoice) {
    displayCpuChoice.textContent = `DRAW GAME!| You : ${playerMove} | CPU : ${computerChoice}`;
    winner = 'DRW';
  }
  if (playerMove === 'ROCK' && computerChoice === 'SCISSORS') {
    displayCpuChoice.textContent = `YOU WIN! | You : ${playerMove} | CPU : ${computerChoice}`;
    winner = 'PLR';
  }
  if (playerMove === 'PAPER' && computerChoice === 'ROCK') {
    displayCpuChoice.textContent = `YOU WIN! | You : ${playerMove} | CPU : ${computerChoice}`;
    winner = 'PLR';
  }
  if (playerMove === 'SCISSORS' && computerChoice === 'PAPER') {
    displayCpuChoice.textContent = `YOU WIN! | You : ${playerMove} | CPU : ${computerChoice}`;
    winner = 'PLR';
  }

  if (computerChoice === 'ROCK' && playerMove === 'SCISSORS') {
    displayCpuChoice.textContent = `YOU LOSE! | You : ${playerMove} | CPU : ${computerChoice}`;
    winner = 'COM';
  }
  if (computerChoice === 'PAPER' && playerMove === 'ROCK') {
    displayCpuChoice.textContent = `YOU LOSE! | You : ${playerMove} | CPU : ${computerChoice}`;
    winner = 'COM';
  }
  if (computerChoice === 'SCISSORS' && playerMove === 'PAPER') {
    displayCpuChoice.textContent = `YOU LOSE! | You : ${playerMove} | CPU : ${computerChoice}`;
    winner = 'COM';
  }

  if (playerMove !== '') {
    cardBody.appendChild(displayCpuChoice);
    card.classList.toggle('is-flipped');
  }

  const delayCardFlip = setTimeout(flipCard, 4000, card);
  delayCardFlip;

  const delayScore = setTimeout(presentScore, 6500, winner, roundNumber);
  delayScore;

  const homePosistions = setTimeout(resetBoard, 5500);
  homePosistions;
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

function presentScore(roundWinner, roundNum) {
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


  if (roundNum === 1) {
    if (roundWinner === 'PLR') {
      firstRoundPLR.classList.remove('fa-circle-o');
      firstRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      firstRoundCOM.classList.remove('fa-circle-o');
      firstRoundCOM.classList.add('fa-circle');

      comScoreIcon = 'fa-circle';
    }
    else {
      firstRoundPLR.classList.remove('fa-circle-o');
      firstRoundCOM.classList.remove('fa-circle-o');

      firstRoundPLR.classList.add('fa-dot-circle-o');
      firstRoundCOM.classList.add('fa-dot-circle-o');

      plrScoreIcon = 'fa-dot-circle-o';
      comScoreIcon = 'fa-dot-circle-o';
    }
  }

  if (roundNum === 2) {
    if (roundWinner === 'PLR') {
      secondRoundPLR.classList.remove('fa-circle-o');
      secondRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      secondRoundCOM.classList.remove('fa-circle-o');
      secondRoundCOM.classList.add('fa-circle');

      comScoreIcon = 'fa-circle';
    }
    else {
      secondRoundPLR.classList.remove('fa-circle-o');
      secondRoundCOM.classList.remove('fa-circle-o');

      secondRoundPLR.classList.add('fa-dot-circle-o');
      secondRoundCOM.classList.add('fa-dot-circle-o');

      plrScoreIcon = 'fa-dot-circle-o';
      comScoreIcon = 'fa-dot-circle-o';
    }
  }

  if (roundNum === 3) {
    if (roundWinner === 'PLR') {
      thirdRoundPLR.classList.remove('fa-circle-o');
      thirdRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      thirdRoundCOM.classList.remove('fa-circle-o');
      thirdRoundCOM.classList.add('fa-circle');

      comScoreIcon = 'fa-circle';
    }
    else {
      thirdRoundPLR.classList.remove('fa-circle-o');
      thirdRoundCOM.classList.remove('fa-circle-o');

      thirdRoundPLR.classList.add('fa-dot-circle-o');
      thirdRoundCOM.classList.add('fa-dot-circle-o');

      plrScoreIcon = 'fa-dot-circle-o';
      comScoreIcon = 'fa-dot-circle-o';
    }
  }

  if (roundNum === 4) {
    if (roundWinner === 'PLR') {
      fourthRoundPLR.classList.remove('fa-circle-o');
      fourthRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      fourthRoundCOM.classList.remove('fa-circle-o');
      fourthRoundCOM.classList.add('fa-circle');

      comScoreIcon = 'fa-circle';
    }
    else {
      fourthRoundPLR.classList.remove('fa-circle-o');
      fourthRoundCOM.classList.remove('fa-circle-o');

      fourthRoundPLR.classList.add('fa-dot-circle-o');
      fourthRoundCOM.classList.add('fa-dot-circle-o');

      plrScoreIcon = 'fa-dot-circle-o';
      comScoreIcon = 'fa-dot-circle-o';
    }
  }

  if (roundNum === 5) {
    if (roundWinner === 'PLR') {
      fifthRoundPLR.classList.remove('fa-circle-o');
      fifthRoundPLR.classList.add('fa-circle');

      plrScoreIcon = 'fa-circle';
    }
    else if (roundWinner === 'COM') {
      fifthRoundCOM.classList.remove('fa-circle-o');
      fifthRoundCOM.classList.add('fa-circle');

      comScoreIcon = 'fa-circle';
    }
    else {
      fifthRoundPLR.classList.remove('fa-circle-o');
      fifthRoundCOM.classList.remove('fa-circle-o');

      fifthRoundPLR.classList.add('fa-dot-circle-o');
      fifthRoundCOM.classList.add('fa-dot-circle-o');

      plrScoreIcon = 'fa-dot-circle-o';
      comScoreIcon = 'fa-dot-circle-o';
    }
  }

  roundNumber++;
  roundNum = roundNumber;
  console.log(roundNum);
  // delay this | this is you ask if user wants to play again | while loop | yes play again | no outro
  if (roundNum === 6) {
    console.log('GAME OVER');
    roundNum = 0;

    pointCounters.forEach(point => {
      // point.classList.remove(plrScoreIcon);
      // point.classList.remove(comScoreIcon);

      point.classList.remove('fa-circle');
      point.classList.remove('fa-dot-circle-o');


      point.classList.add('fa-circle-o');
    });
    roundNumber = 0;

  }
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
  // let playerMove = '';

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
            rock.classList.add('selected');

            papr.classList.remove('selected');
            sisr.classList.remove('selected');

            papr.style.zIndex = -1;
            sisr.style.zIndex = -1;
            
            translate = 'translate(298px, 317px)';
            rock.style.transform = translate;

            playerMove = 'ROCK';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 1:

            papr.classList.add('selected');

            sisr.classList.remove('selected');
            rock.classList.remove('selected');

            sisr.style.zIndex = -1;
            rock.style.zIndex = -1;

            translate = 'translate(298px, 77px)';
            papr.style.transform = translate;

            playerMove = 'PAPER';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 2:
            sisr.classList.add('selected');

            rock.classList.remove('selected');
            papr.classList.remove('selected');

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
            rock.classList.add('selected');

            papr.classList.remove('selected');
            sisr.classList.remove('selected');

            translate = 'translate(298px, 317px)';

            playerMove = 'ROCK';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 1:
            papr.classList.add('selected');

            sisr.classList.remove('selected');
            rock.classList.remove('selected');

            translate = 'translate(298px, 77px)';

            playerMove = 'PAPER';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;

          case 2:
            sisr.classList.add('selected');

            rock.classList.remove('selected');
            papr.classList.remove('selected');
            
            translate = 'translate(298px, -164px)';

            playerMove = 'SCISSORS';
            currentIcon = playerMove;
            console.log(`You selected: ${playerMove}`);

            break;
        }
      }
      const delayCpuMove = setTimeout(computerPlay, 800, translate);
      delayCpuMove;
    });
  });
  //return playerMove;
}

playerSelection();

function yoShoutMe() {
  return 'Yo whats good!?';
}

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