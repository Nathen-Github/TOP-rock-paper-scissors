//The starting function
playGame();

function playGame() {
    //Initializing scores
    let humanScore = 0, computerScore = 0;
    //5 rounds are played
    for (i = 0; i < 5; i++) {
        //playRound is the function to play one round of RPS
        let result = playRound(humanSelection(), computerSelection());
        if (result !== "tie") {
            result === "player" ? humanScore++ : computerScore++;
        }
    }
    humanScore > computerScore ?
        console.log("YOU WIN!")
        :
        console.log("YOU LOSE!");
}

function playRound(humanSelection, computerSelection) {
    //Game win and lose logic
    if (humanSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a tie!")
            return "tie";
        } else if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock!")
            return "computer";
        } else if (computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors!")
            return "player"
        }
    } else if (humanSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock!")
            return "player";
        } else if (computerSelection === "paper") {
            console.log("It's a tie!")
            return "tie";
        } else if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats Paper!")
            return "computer"
        }
    } else if (humanSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors!")
            return "computer";
        } else if (computerSelection === "paper") {
            console.log("You win! Scissors beats Paper!")
            return "player";
        } else if (computerSelection === "scissors") {
            console.log("It's a tie!")
            return "tie"
        }
    }
}

function humanSelection() {
    let selection;
    //Loops until input is valid
    while (true) {
        selection = prompt("Rock, paper, or scissors? ").toLowerCase();
        if (selection == "rock" || selection == "paper" || selection == "scissors") {
            //Breaks the loop once input is valid
            break;
        }
    }
    return selection;
}

function computerSelection() {
    //Math.random() * (max - min) + min -> this is the code to get a random number between max-min.
    //We convert the float result to an int by converting to an array and getting the first index
    let random = (Math.random() * (3 - 1) + 1).toString().split('')[0];
    //Unary plus to convert String result to Number
    switch(+random) {
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3: 
            return "scissors";
        default: 
            return "Something went wrong";
    }
}