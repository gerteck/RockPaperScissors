console.log("Hello There!")

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;


function capitalize(string) {
    const str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
}

const rock = document.querySelector('button.rock');
const paper = document.querySelector('button.paper');
const scissors = document.querySelector('button.scissors');


console.log(rock);

rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));


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

const results = document.querySelector('.results');



function playRound(playerSelection, computerSelection) {
    let player = capitalize(playerSelection.toLowerCase());
    let computer = capitalize(computerSelection.toLowerCase());
    console.log("played!");
    let string = "";

    if (computer == player) {
        string = "Tie! " + player + " ties with " + computer; 
    
    } else if (player == "Rock") {
        if (computer == "Scissors") {
            string = "You Win! " + player + " beats " + computer; 
        }
        else {
            string = "You Lose! " + computer + " beats " + player;
        }
    
    } else if (player == "Paper") {
        if (computer == "Rock") {
            string = "You Win! " + player + " beats " + computer; 
        }
        else {
            string = "You Lose! " + computer + " beats " + player;
        }
    
    } else if (player == "Scissors") {
        if (computer == "Paper") {
            string = "You Win! " + player + " beats " + computer; 
        }
        else {
            string = "You Lose! " + computer + " beats " + player;
        }
    }
    
    results.textContent = string;
    // return string;
}

// Plays RPS 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Please Choose Rock, Paper or Scissors", "e.g. Rock")
        let result = playRound(input, getComputerChoice());
        console.log(result);
    }
}

//game();




