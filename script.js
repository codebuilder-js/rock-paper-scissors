const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const result = document.querySelector('#result');

btnRock.addEventListener('click', () => {
  const playerChoice = btnRock.textContent.toLowerCase();
  
  rockPaperScissors(playerChoice, computerChoice());
  
  announceWinner();
});

btnPaper.addEventListener('click', () => {
  const playerChoice = btnPaper.textContent.toLowerCase();
  
  rockPaperScissors(playerChoice, computerChoice());
  
  announceWinner();
});

btnScissors.addEventListener('click', () => {
  const playerChoice = btnScissors.textContent.toLowerCase();
  
  rockPaperScissors(playerChoice, computerChoice());
  
  announceWinner();
});

let playerChoice;
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  let values = ['rock', 'paper', 'scissors'];
  let randomValue = values[Math.floor(Math.random() * values.length)].toLowerCase();
  
  return randomValue;
}

function rockPaperScissors(player, computer) {
  result.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
  
  if(player === 'rock') {
    if(computer === 'scissors') {
      result.innerHTML += '<br>player\'s rock beats scissors!';
      playerScore++;
    } else if (computer === 'paper') {
      result.innerHTML += '<br>computer\'s paper beats rock!';
      computerScore++;
    } else {
      result.innerHTML += '<br>it\'s a tie!';
    }
  }
  
  if(player === 'scissors') {
    if(computer === 'paper') {
      result.innerHTML += '<br>player\'s scissors beats paper!';
      playerScore++;
    } else if (computer === 'rock') {
      result.innerHTML += '<br>computer\'s rock beats scissors!';
      computerScore++;
    } else {
      result.innerHTML += '<br>it\'s a tie!';
    }
  }
  
  if(player === 'paper') {
    if(computer === 'rock') {
      result.innerHTML += '<br>player\'s paper beats rock!';
      playerScore++;
    } else if (computer === 'scissors') {
      result.innerHTML += '<br>computer\'s scissors beats paper!';
      computerScore++;
    } else {
      result.innerHTML += '<br>it\'s a tie!';
    }
  }
}

function defineWinner() {
  if(playerScore > computerScore) {
    result.textContent = `PLAYER IS VICTORY! FINAL SCORE - PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;
  } else if ( playerScore < computerScore) {
    result.textContent = `COMPUTER IS VICTORY! FINAL SCORE - PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;
  } else {
    result.textContent = `THE TIE HAS BEEN PLANTED! FINAL SCORE - PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;
  }
}

function announceWinner() {
  if(playerScore === 5 || computerScore === 5) {
    defineWinner();
    
    playerScore = 0;
    computerScore = 0;
  }
}