

const handsContainer = document.querySelector("#handsContainer");
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


handsContainer.addEventListener("mouseover", (event) => {
    if (event.target.className == "hands") {
        event.target.style.backgroundColor = "rgb(255, 255, 255)";
    }
})

handsContainer.addEventListener("mouseout", (event) => {
    if (event.target.className == "hands") {
        event.target.style.backgroundColor = "rgb(229, 236, 255)";
    }
})



// Returns computer choice of hand
function getComputerChoice() {

    //Get random number between 1 and 3
    let num = Math.floor(Math.random()*3 + 1);

    //Assign number to string
    switch (num) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
    
}

// Function for getting human choice

handsContainer.addEventListener("click", (event) => {
    let humanChoice = ""
    switch(event.target) {
        case(rock):
            humanChoice = "rock";
            break;
        case(paper):
            humanChoice ="paper";
            break;
        case(scissors):
            humanChoice = "scissors";
            break;
    }
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice,computerChoice);
    let resultMessage = getRoundMessage(humanChoice, computerChoice, result);

    showResult(resultMessage);

})

function showResult(message) {
    let resultPara = document.querySelector(".result");

    if (!resultPara) {
        resultPara = document.createElement("p");
        resultPara.className = "result"
        resultPara.style.color = "white";
        resultPara.textContent = message;
        container.appendChild(resultPara);
    } else {
        resultPara.textContent = message;
        
    }
}


// Returns round result (win/tie/lose) 
function playRound(humanChoice, computerChoice) {
    let roundResult = ""

    // CONDITIONALS for round result
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                roundResult = "tie";
                break;
            case "paper":
                roundResult = "lose";
                break;
            case "scissors":
                roundResult = "win";
                break;     
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                roundResult = "win";
                break;
            case "paper":
                roundResult = "tie";
                break;
            case "scissors":
                roundResult = "lose";
                break;                 
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                roundResult = "lose";
                break;
            case "paper":
                roundResult = "win";
                break;
            case "scissors":
                roundResult = "tie";
                break;  
        }
    }

    return roundResult;
}

    // Returns the result message of the current round
function getRoundMessage(humanChoice, computerChoice, roundResult) {
    switch (roundResult) {
        case "win":
            return `You've won! ${humanChoice} beats ${computerChoice}.`;
            break;
        case "lose":
            return `You've lost! ${computerChoice} beats ${humanChoice}.`;
            break;
        case "tie":
            return `It's a tie!`;
            break;
    }
}

// Plays a whole game (5 rounds)
function playGame(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++){
        let roundResult = playRound(humanChoice, computerChoice);
        if (roundResult === "win") {
            ++humanScore;
        } else if (roundResult === "lose") {
            ++computerScore;
        } 
    }

   // showGameResult(humanScore, computerScore);

}

playGame();
