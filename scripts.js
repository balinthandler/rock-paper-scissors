
const handsContainer = document.querySelector("#handsContainer");
const instructions = document.querySelector(".instructions");
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

let round = 1;
let humanScore = 0;
let computerScore = 0;

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

// Get human choice
function getHumanChoice(buttonId) {
    switch(buttonId) {
        case("rock"):
            return "rock";
            break;
        case("paper"):
            return "paper";
            break;
        case("scissors"):
            return "scissors";
            break;
    }
}

handsContainer.addEventListener("click", (event) => {

    let humanChoice = getHumanChoice(event.target.id);
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice,computerChoice);
    let resultMessage = getRoundMessage(humanChoice, computerChoice, result);

    showResult(resultMessage);
    showScore(humanScore, computerScore);
    round += 1;

    if (humanScore == 5 || computerScore == 5) {
        cleanNodesAtGameOver(humanScore, computerScore)
    } 
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

function showScore(humanScore, computerScore) {
    let score = document.querySelector(".score");

    if (!score) {
        score = document.createElement("p");
        score.className = "score"
        score.style.color = "white";
        score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        container.appendChild(score);
    } else {
        score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        
    }
}

function getGameOverMessage(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return `You've won the game!`
    } else if (humanScore < computerScore) {
        return `You've lost the game!`
    }
}

function cleanNodesAtGameOver(humanScore, computerScore) {
        let gameOverNode = document.createElement("div");
        gameOverNode.textContent = getGameOverMessage(humanScore, computerScore);
        gameOverNode.id = "gameOverText";

        handsContainer.replaceChildren(gameOverNode);
        instructions.remove();
        document.querySelector(".result").remove();
        
        
}
function setScore(roundResult) {
    switch(roundResult) {
        case("win"):
            humanScore += 1;
            break;
        case("lose"):
            computerScore += 1;
            break;
        case("tie"):
            break;
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
    setScore(roundResult);
    return roundResult;
}

    // Returns the result message of the current round
function getRoundMessage(humanChoice, computerChoice, roundResult) {
    switch (roundResult) {
        case "win":
            return `Round ${round}. You've won! ${humanChoice} beats ${computerChoice}.`;
            break;
        case "lose":
            return `Round ${round}. You've lost! ${computerChoice} beats ${humanChoice}.`;
            break;
        case "tie":
            return `Round ${round}. It's a tie!`;
            break;
    }
}

