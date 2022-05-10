
//Randomly select Rock, Paper, or Scissors
function computerPlay() {
    
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
};


//Player makes their choice
function playerSelection() {

    let input = prompt("Please choose 'Rock', 'Paper', or 'Scissors':");
    let result = input.toLowerCase();

    switch (result) {
        case "rock":
            return result;
            
        
        case "paper":
            return result;
            

        case "scissors":
            return result;
        
        default:
            alert("Invalid choice, please try again!");
            playerSelection();
            break;
    }

}

//Computer makes their choice
function computerSelection() {

}

//Play one round - logic on which choice beats one
function playRound() {

}

//Create a game - a game consists of 5 rounds. Whoever has the highest score wins.
function game() {

}