function choiceConvert(stringToConvert) {
    let formattedString = stringToConvert.toLowerCase().replace(/[^a-z]/g, "");

    return formattedString;
}

function getComputerChoice() {
    let choice = Math.round(Math.random() * 100) / 100;
    let computerPick;
    if(choice <= 0.33) {
        computerPick = "rock";
    }
    else if(choice <= 0.66) { 
        computerPick = "paper";
    }
    else {
        computerPick = "scissors";
    }

    let formattedComputerPick = choiceConvert(computerPick);
    return formattedComputerPick;
}
console.log(getComputerChoice());

function getHumanChoice($choice) {
    let choice = prompt("Choose between Rock, Paper, or Scissors");
    // if(choice === null) {
    //     return;
    // }
    let formattedChoice = choiceConvert(choice);
    return formattedChoice;
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let result;
    let roundResult;
    let gameResult;
    const pointsRequired = 5;
    let gameOver = "false";

    function playRound(humanChoice, computerChoice) {
        if(humanSelection === "rock") {
            if(computerSelection === "scissors") {
                result = "win";
            }
            else if (computerSelection === "paper") {
                result = "lose";
            }
            else {
                result = "tie";
                console.log("It's a tie!");
            }
        }
        else if (humanSelection === "paper") {
            if(computerSelection === "rock") {
                result = "win";
            }
            else if (computerSelection === "scissors") {
                result = "lose";
            }
            else {
                result = "tie";
                console.log("It's a tie!");
            }
        }
        else if (humanSelection === "scissors") {
            if(computerSelection === "paper") {
                result = "win";
            }
            else if (computerSelection === "rock") {
                result = "lose";
            }
            else {
                result = "tie";
                console.log("It's a tie!");
            }
        }
        else {
            result = "invalid";
        }

        return result;
    }

    if(humanScore === pointsRequired || computerScore === pointsRequired) {
        return;
    }

    for(i = 0; i<=pointsRequired; i++) {
        roundResult = playRound(humanSelection, computerSelection);
    }

    if(roundResult === "win") {
        humanScore++;
        if(humanScore === pointsRequired) {
            gameResult = "win";
            gameOver = true;
        }
    }
    else if(roundResult === "lose") {
        computerScore++;
        if(computerScore === pointsRequired) {
            gameResult = "lose";
            gameOver = true;
        }
    }

    console.log(roundResult);
    
}

playGame();