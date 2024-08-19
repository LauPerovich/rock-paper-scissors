function getComputerChoice(){
    let randomNumber = Math.random();
    let computerChoice;

    if (randomNumber <= 0.3){
        computerChoice = 'Rock';
    } else if (randomNumber <= 0.6){
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function getHumanChoice(humanChoice){
    let result;

    if (humanChoice === 'rock') {
        result = 'Rock';
    } else if (humanChoice === 'paper'){
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
    return result;
}

function playRound(humanChoice, computerChoice){
    let winner;

    if(humanChoice === computerChoice){
        winner = `It's a tie. The computer also chose ${computerChoice}`;
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        winner = `You lose! ${computerChoice} beats ${humanChoice}`;
        //computerScore++;
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
        winner = `You win! ${humanChoice} beats ${computerChoice}`;
       // humanScore++;
    } else if (humanChoice === 'Paper' && computerChoice === "Rock") {
        winner = `You win! ${humanChoice} beats ${computerChoice}`;
       // humanScore++;
    } else if (humanChoice === 'Paper' && computerChoice === "Scissors") {
        winner = `You lose! ${computerChoice} beats ${humanChoice}`;
       // computerScore++;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper'){
        winner = `You win! ${humanChoice} beats ${computerChoice}`;
       // humanScore++;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock'){
        winner = `You lose! ${computerChoice} beats ${humanChoice}`;
       // computerScore++;
    }
    return console.log(winner); 
}

function playGame(){
    let round = 1;
    let humanScore = 0;
    let computerScore = 0;

    /*
    do {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round++;
    } while(round <= 5);
    */
    function showFinalWinner(humanScore, computerScore){
        let finalWinner;
        if (humanScore > computerScore) {
            finalWinner = `You are the final winner with a score of ${humanScore}`;
        } else {
            finalWinner = `You lost! The final winner is the computer with a score of ${computerScore}`;
        }
        return console.log(finalWinner);
    }

    showFinalWinner(humanScore, computerScore);
}

const $btnRock = document.querySelector('#rock');
const $btnPaper = document.querySelector('#paper');
const $btnScissors = document.querySelector('#scissors');

$btnRock.addEventListener("click", () => {
    const humanChoice = 'Rock';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

$btnPaper.addEventListener("click", () => {
    const humanChoice = 'Paper';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

$btnScissors.addEventListener("click", () => {
    const humanChoice = 'Scissors';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

// playGame();

