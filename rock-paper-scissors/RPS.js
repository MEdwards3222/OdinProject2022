
//Computer randomly select Rock, Paper, or Scissors
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
            return (playerSelection());
            
    }

}


//Play one round - logic on which choice beats one. If a result returns '1' - increment Player point in game() function. If a result returns '-1' - increment Computer point in game().
//If a result returns '0' - game is a tie and no one scores points.
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            alert(`Computer chose: ${computerSelection}. You win!`);
            return 1;
        }

        else if (computerSelection == "paper") {
            alert(`Computer chose: ${computerSelection}. You lose...`);
            return -1;
        }

        else if (computerSelection == "rock") {
            alert(`Computer chose: ${computerSelection}. It's a tie...!`);
            return 0;
        }

        else {
            alert("Something went wrong... Sorry, errors count as ties! It's totally a feature, not a bug.");
            return 0;
        }
    }

}

//Create a game - a game consists of 5 rounds. Whoever has the highest score wins.
function game() {

}