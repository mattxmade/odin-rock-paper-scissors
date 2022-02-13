let translate = '';
let currentIcon = '';
const resetPosition = 'translate(0,0)';

let playerMove = '';

let lastWidth = 0;

function cardReveal(computerChoice) {
  const card = document.querySelector('.card__inside');
  const cardBody = document.querySelector('.card__body');
  const displayCpuChoice = document.getElementById('revealRPS');

  
  console.log(`player: ${playerMove}, cpu: ${computerChoice}`);

  if (playerMove === computerChoice) {
    displayCpuChoice.textContent = `DRAW GAME!| You : ${playerMove} | CPU : ${computerChoice}`;
  }
  if (playerMove === 'ROCK' && computerChoice === 'SCISSORS') {
    displayCpuChoice.textContent = `YOU WIN! | You : ${playerMove} | CPU : ${computerChoice}`;
  }
  if (playerMove === 'PAPER' && computerChoice === 'ROCK') {
    displayCpuChoice.textContent = `YOU WIN! | You : ${playerMove} | CPU : ${computerChoice}`;
  }
  if (playerMove === 'SCISSORS' && computerChoice === 'PAPER') {
    displayCpuChoice.textContent = `YOU WIN! | You : ${playerMove} | CPU : ${computerChoice}`;
  }

  if (computerChoice === 'ROCK' && playerMove === 'SCISSORS') {
    displayCpuChoice.textContent = `YOU LOSE! | You : ${playerMove} | CPU : ${computerChoice}`;
  }
  if (computerChoice === 'PAPER' && playerMove === 'ROCK') {
    displayCpuChoice.textContent = `YOU LOSE! | You : ${playerMove} | CPU : ${computerChoice}`;
  }
  if (computerChoice === 'SCISSORS' && playerMove === 'PAPER') {
    displayCpuChoice.textContent = `YOU LOSE! | You : ${playerMove} | CPU : ${computerChoice}`;
  }

  if (playerMove !== '') {
    cardBody.appendChild(displayCpuChoice);
    card.classList.toggle('is-flipped');
  }
}

// 1) Computer Move
function computerPlay(playerIconPosition) {
  const keyPair = [];
  const cpuIcon = document.querySelector('.js-computer-icon');

  // moves stored inside array
  const moveSelection = ['ROCK', 'PAPER', 'SCISSORS'];

  const computerChoice = moveSelection[Math.floor(Math.random() * moveSelection.length)];

  keyPair.push(cpuIcon);
  keyPair.push(computerChoice);

  if (window.innerWidth <= 1210) {
    cpuIcon.style.zIndex = -1;
    cpuIcon.style.visibility = 'hidden';
    cpuIcon.style.position = 'absolute';
    console.log('TODO');
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
  undoSelect.addEventListener('click', (e) => {

    if (window.innerWidth > 1210) {
      undoSelect.style.cursor = 'default';

      deselectAllIcons.forEach(icon => {
        icon.classList.remove('visible');
        icon.classList.remove('selected');

        rock.style.transform = resetPosition;
        papr.style.transform = resetPosition;
        sisr.style.transform = resetPosition;

        rock.style.zIndex = 1;
        papr.style.zIndex = 1;
        sisr.style.zIndex = 1;
      });
    }
    const delayCpuMove = setTimeout(computerPlay, 500, resetPosition);
    delayCpuMove;
  });

  iconSelect.forEach((icon, index) => {

    icon.addEventListener('click', (e) => {
      if (window.innerWidth > 1210) {
        undoSelect.style.cursor = 'pointer';

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