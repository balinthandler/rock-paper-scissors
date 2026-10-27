
/* 
Function for getting a random choice of Rock - Paper - Scissor 
*/
let humanScore = 0;
let computerScore = 0;

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
    return prompt("Rock-Paper-Scissor.. GO!").toLowerCase;
}

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

    switch (roundResult) {
        case "win":
            console.log(`You've won! ${humanChoice} beats ${computerChoice} `);
            humanScore += 1;
            break;
        case "lose":
            console.log(`You've lost! ${computerChoice} beats ${humanChoice} `);
            computerScore += 1;
            break;
        case "tie":
            console.log(`It's a tie!`);
            break;
    }
}

console.log(getHumanChoice())


