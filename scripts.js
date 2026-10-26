
/* 
Function for getting a random choice of Rock - Paper - Scissor 
*/

function getComputerChoice() {

    //Get random number between 1 and 3
    let num = Math.floor(Math.random()*3 + 1);

    //Assign number to string
    switch (num) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissor";
            break;
    }
    
}

getComputerChoice()
