function choiceConvert(stringToConvert) {
    let formattedString = stringToConvert.toLowerCase().replace(/[^a-z]/g, "");
    return formattedString;
}

function getComputerChoice() {
    let choice = Math.random();
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
    return choiceConvert(computerPick);
}

function getHumanChoice() {
    let choice = prompt("Choose between Rock, Paper, or Scissors");
    if(choice === null) {
        return;
    }
    return choiceConvert(choice);
}

function playRound(humanSelection, computerSelection) {
    if(computerSelection === "rock") {
        if(humanSelection === "paper") {
            return "win";
        }
        else if (humanSelection === "scissors") {
            return "lose";
        }
        else {
            return "tie";
        }
    }
    else if (computerSelection === "paper") {
        if(humanSelection === "rock") {
            return "lose";
        }
        else if (humanSelection === "scissors") {
            return "win";
        }
        else {
            return "tie";
        }
    }
    else if (computerSelection === "scissors") {
        if(humanSelection === "paper") {
            return "lose";
        }
        else if (humanSelection === "rock") {
            return "win";
        }
        else {
            return "tie";
        }
    }
    return "invalid";
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    const pointsRequired = 5;

    while(humanScore < pointsRequired && computerScore < pointsRequired) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);

        console.log(`Human: ${humanSelection}, Computer: ${computerSelection}, Result: ${roundResult}`);

        if(roundResult === "win") {
            humanScore++;
        }
        else if(roundResult === "lose") {
            computerScore++;
        }

        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if(humanScore === pointsRequired) {
        console.log("Human wins the game!");
        return;
    } else if(computerScore === pointsRequired) {
        console.log("Computer wins the game!");
        return;
    }
}

playGame();
