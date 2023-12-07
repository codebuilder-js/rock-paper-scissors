let playerChoice;
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  let values = ['rock', 'paper', 'scissors'];
  let randomValue = values[Math.floor(Math.random() * values.length)].toLowerCase();
  
  return randomValue;
}

function rockPaperScissors(player, computer) {
  playerChoice = prompt('Choose between rock, paper or scissors:').toLowerCase();
  
  console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  
  if(player === 'rock') {
    if(computer === 'scissors') {
      console.log('player\'s rock beats scissors!');
      playerScore++;
    } else if (computer === 'paper') {
      console.log('computer\'s paper beats rock!');
      computerScore++;
    } else {
      console.log('it\'s a tie!')
    }
  }
  
  if(player === 'scissors') {
    if(computer === 'paper') {
      console.log('player\'s scissors beats paper!');
      playerScore++;
    } else if (computer === 'rock') {
      console.log('computer\'s rock beats scissors!');
      computerScore++;
    } else {
      console.log('it\'s a tie!')
    }
  }
  
  if(player === 'paper') {
    if(computer === 'rock') {
      console.log('player\'s paper beats rock!');
      playerScore++;
    } else if (computer === 'scissors') {
      console.log('computer\'s scissors beats paper!');
      computerScore++;
    } else {
      console.log('it\'s a tie!')
    }
  }
}

function defineWinner() {
  if(playerScore > computerScore) {
    console.log(`PLAYER IS VICTORY! FINAL SCORE - PLAYER: ${playerScore} | COMPUTER: ${computerScore}`);
  } else if ( playerScore < computerScore) {
    console.log(`COMPUTER IS VICTORY! FINAL SCORE - PLAYER: ${playerScore} | COMPUTER: ${computerScore}`);
  } else {
    console.log(`THE TIE HAS BEEN PLANTED! FINAL SCORE - PLAYER: ${playerScore} | COMPUTER: ${computerScore}`);
  }
}

for(let i = 1; i <= 5; i++) {
  rockPaperScissors(playerChoice, computerChoice());
}

defineWinner();