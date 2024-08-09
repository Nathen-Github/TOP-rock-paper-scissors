computerSelection();

function computerSelection() {
    let random = Math.random() * (3 - 1) + 1;
    switch(random) {
        case 1:
            return "Rock";
        case 2: 
            return "Paper";
        case 3: 
            return "Scissors";
    }
}
