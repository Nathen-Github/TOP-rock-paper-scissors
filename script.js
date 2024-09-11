const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const contentWrap = document.querySelector(".content-wrap");
const buttonWrap = document.querySelector(".rps-button-wrapper");
const textWrap = document.querySelector(".title-wrapper");

rock.addEventListener("click", () => {
    handleClick("rock");
})

paper.addEventListener("click", () => {
    handleClick("paper");
})

scissors.addEventListener("click", () => {
    handleClick("scissors");
})

function handleClick(whichRPS) {
    contentWrap.removeChild(buttonWrap);
    contentWrap.removeChild(textWrap);
    
    const result = playRound(whichRPS, computerSelection());
    const showResult = document.createElement("p");
    showResult.setAttribute("id", "result");
    showResult.textContent = result;

    const retry = document.createElement("div");
    retry.textContent = "Retry";
    retry.setAttribute("id", "retry");

    contentWrap.appendChild(retry);
    contentWrap.appendChild(showResult);

    retry.addEventListener("click", () => {
        resetPage(retry, showResult);
    })
}

function resetPage(retry, showResult) {
    contentWrap.removeChild(retry);
    contentWrap.removeChild(showResult);
    contentWrap.appendChild(textWrap);
    contentWrap.appendChild(buttonWrap);
}

//The starting function
function playRound(humanSelection, computerSelection) {
    //Game win and lose logic
    if (humanSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie!";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock!";
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors!"
        }
    } else if (humanSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock!";
        } else if (computerSelection === "paper") {
            return "It's a tie!";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper!"
        }
    } else if (humanSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beats Paper!";
        } else if (computerSelection === "scissors") {
            return "It's a tie!";
        }
    }
}

function computerSelection() {
    let random = Math.floor(Math.random() * 3) + 1;
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