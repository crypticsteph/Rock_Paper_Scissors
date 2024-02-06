let rps = ["rock","paper","scissors"];

function getComputerChoice() {
let computer = rps[ Math.floor(Math.random()*rpc.length)];
return  computer;
}

function round(playerSelection, computerSelection){
if(playerSelection == computerSelection) {
    return 'Tie Game';
} else if(
    (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")  
) {
    return "Player Wins Match";

} else{
    return "Computer Wins Match"; 
}
}
function game() {
    for (let i = 0; i < 5; i++) {
    
        let playerSelection = prompt("Select: rock, paper or scissors");
        let computerSelection = getComputerChoice();
        console.log(round(playerSelection, computerSelection));
    }
}

game();