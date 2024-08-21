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
/*
function getHumanChoice(){
    let humanChoice;
    const $btnRock = document.querySelector('#rock');
    const $btnPaper = document.querySelector('#paper');
    const $btnScissors = document.querySelector('#scissors');
    
    $btnRock.addEventListener("click", () => {
        humanChoice = 'Rock'
    }); 
    $btnPaper.addEventListener("click", () => {
        humanChoice = 'Paper';
    });
    $btnScissors.addEventListener("click", () => {
    humanChoice = 'Scissors';
    });

    return humanChoice;
}
*/

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        // change this code to switch statements
        let winner;
    
        if(humanChoice === computerChoice){
            winner = `It's a tie. The computer also chose ${computerChoice}`;
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            winner = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
            winner = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else if (humanChoice === 'Paper' && computerChoice === "Rock") {
            winner = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else if (humanChoice === 'Paper' && computerChoice === "Scissors") {
            winner = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper'){
            winner = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock'){
            winner = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        return winner; 
    }

    function showRunningScore(humanScore, computerScore){
        return `Human score: ${humanScore} - Computer Score: ${computerScore}`;
    }

    /*
    function checkScoreToEndGame(humanScore, computerScore){
        if (humanScore === 5 || computerScore === 5){
            return true;
        }
    }
    */
    

    function showFinalWinner(humanScore, computerScore){
        let finalWinner;
        if (humanScore > computerScore) {
            finalWinner = `You are the winner`;
        } else {
            finalWinner = `You lost! The winner is the computer`;
        }
        return finalWinner;
    }

    const $btnRock = document.querySelector('#rock');
    const $btnPaper = document.querySelector('#paper');
    const $btnScissors = document.querySelector('#scissors');

    $btnRock.addEventListener("click", () => {
    const humanChoice = 'Rock';
    const roundResult = document.createElement('div');
    document.body.appendChild(roundResult);
    roundResult.textContent = playRound(humanChoice, getComputerChoice());
    const runningScore = document.createElement('div');
    document.body.appendChild(runningScore);
    runningScore.textContent = showRunningScore(humanScore, computerScore);
    
    if (humanScore == 5 || computerScore == 5) {
        const finalWinner = document.createElement('div');
        document.body.appendChild(finalWinner);
        finalWinner.textContent = showFinalWinner(humanScore, computerScore);
    }
    });

    $btnPaper.addEventListener("click", () => {
    humanChoice = 'Paper';
    const roundResult = document.createElement('div');
    document.body.appendChild(roundResult);
    roundResult.textContent = playRound(humanChoice, getComputerChoice());
    const runningScore = document.createElement('div');
    document.body.appendChild(runningScore);
    runningScore.textContent = showRunningScore(humanScore, computerScore);
    
    if (humanScore == 5 || computerScore == 5) {
        const finalWinner = document.createElement('div');
        document.body.appendChild(finalWinner);
        finalWinner.textContent = showFinalWinner(humanScore, computerScore);
    }
    }); 

    $btnScissors.addEventListener("click", () => {
    humanChoice = 'Scissors';
    const roundResult = document.createElement('div');
    document.body.appendChild(roundResult);
    roundResult.textContent = playRound(humanChoice, getComputerChoice());
    const runningScore = document.createElement('div');
    document.body.appendChild(runningScore);
    runningScore.textContent = showRunningScore(humanScore, computerScore);
    
    if (humanScore == 5 || computerScore == 5) {
        const finalWinner = document.createElement('div');
        document.body.appendChild(finalWinner);
        finalWinner.textContent = showFinalWinner(humanScore, computerScore);
    }
    });
}

playGame();

