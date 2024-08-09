playGame();

function playGame() {
    for (i = 0; i < 5; i++) {
        let result = playRound(humanSelection(), computerSelection());
        console.log(result);
    }
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock") {
        if (computerSelection === "rock") {
            return "tie";
        } else if (computerSelection === "paper") {
            return "computer";
        } else if (computerSelection === "scissors") {
            return "player"
        }
    } else if (humanSelection === "paper") {
        if (computerSelection === "rock") {
            return "player";
        } else if (computerSelection === "paper") {
            return "tie";
        } else if (computerSelection === "scissors") {
            return "computer"
        }
    } else if (humanSelection === "scissors") {
        if (computerSelection === "rock") {
            return "computer";
        } else if (computerSelection === "paper") {
            return "player";
        } else if (computerSelection === "scissors") {
            return "tie"
        }
    }
}

function humanSelection() {
    let selection;
    while (true) {
        selection = prompt("Rock, paper, or scissors? ").toLowerCase();
        if (selection == "rock" || selection == "paper" || selection == "scissors") {
            break;
        }
    }
    return selection;
}

function computerSelection() {
    let random = (Math.random() * (3 - 1) + 1).toString().split('')[0];
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