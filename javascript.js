console.log("Hello There!")

function capitalize(string) {
    const str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
}

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

// Returns string
function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3);
    switch(ran) {
        case ROCK:
            return "rock";

        case PAPER:
            return "paper";

        case SCISSORS:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = capitalize(playerSelection.toLowerCase());
    let computer = capitalize(computerSelection.toLowerCase());

    //Rock
    if (computer == player) {
        return "Tie! " + player + " ties with " + computer; 
    
    } else if (player == "Rock") {
        if (computer == "Scissors") {
            return "You Win! " + player + " beats " + computer; 
        }
        else {
            return "You Lose! " + computer + " beats " + player;
        }
    
    } else if (player == "Paper") {
        if (computer == "Rock") {
            return "You Win! " + player + " beats " + computer; 
        }
        else {
            return "You Lose! " + computer + " beats " + player;
        }
    
    } else if (player == "Scissors") {
        if (computer == "Paper") {
            return "You Win! " + player + " beats " + computer; 
        }
        else {
            return "You Lose! " + computer + " beats " + player;
        }
    }

    return "If not error."
}

// Plays RPS 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Please Choose Rock, Paper or Scissors", "e.g. Rock")
        let result = playRound(input, getComputerChoice());
        console.log(result);
    }
}

game();




