const rpc = ["rock","paper","scissors"];

function computerSelection(){
const computer = rpc[ Math.floor(Math.random()*rpc.length)];
return  computer;
}

function playerSelection(){
    let input = prompt("Type: Rock, Paper or Scissors");
    input = input.toLocaleLowerCase();
    
}

