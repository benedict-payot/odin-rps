let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let choice = Math.round(Math.random() * 100) / 100;
    let computerPick;
    if(choice <= 0.33) {
        computerPick = "Rock";
    }
    else if(choice <= 0.66) { 
        computerPick = "Paper";
    }
    else {
        computerPick = "Scissors";
    }
    return computerPick;
}
console.log(getComputerChoice());

function getHumanChoice($choice) {
    let choice = prompt("Choose between Rock, Paper, or Scissors");
    let formattedChoice = choice.toLowerCase().replace(/[^a-z]/g, "");
    console.log(formattedChoice);
    return formattedChoice;
}