
/* 
Function for getting a random choice of Rock - Paper - Scissor 
*/


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
            return "scissor";
            break;
    }
    
}

// Function for getting human choice

function getHumanChoice() {
    return prompt("Rock-Paper-Scissor.. GO!").toLowerCase();
}

// Function for playing one round
function playRound(humanChoice, computerChoice) {
    let roundResult = ""

    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                roundResult = "tie";
                break;
            case "paper":
                roundResult = "lose";
                break;
            case "scissor":
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
            case "scissor":
                roundResult = "lose";
                break;                 
        }
    } else if (humanChoice === "scissor") {
        switch (computerChoice) {
            case "rock":
                roundResult = "lose";
                break;
            case "paper":
                roundResult = "win";
                break;
            case "scissor":
                roundResult = "tie";
                break;  
        }
    }

    switch (roundResult) {
        case "win":
            console.log(`You've won! ${humanChoice} beats ${computerChoice}.`);
            console.log(`Your choice: ${humanChoice}`);
            console.log(`Computer's choice: ${computerChoice}`);
            break;
        case "lose":
            console.log(`You've lost! ${computerChoice} beats ${humanChoice}.`);
            console.log(`Your choice: ${humanChoice}`);
            console.log(`Computer's choice: ${computerChoice}`);
            break;
        case "tie":
            console.log(`It's a tie!`);
            console.log(`Your choice: ${humanChoice}`);
            console.log(`Computer's choice: ${computerChoice}`);
            break;
    }

    return roundResult;
}

// Shows the result of the game in console
function showGameResult(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You've won the game!");
        console.log(`Your points: ${humanScore}`);
        console.log(`Computer's points: ${computerScore}`);
    } else if (humanScore === computerScore) {
        console.log("It's a tie!");
        console.log(`Your points: ${humanScore}`);
        console.log(`Computer's points: ${computerScore}`);
    } else {
        console.log("You've lost the game!");
        console.log(`Your points: ${humanScore}`);
        console.log(`Computer's points: ${computerScore}`);
    }
}

// Plays a whole game (5 rounds)
function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++){
        let roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult === "win") {
            ++humanScore;
        } else if (roundResult === "lose") {
            ++computerScore;
        } 
    }

    showGameResult(humanScore, computerScore);

}

playGame();

