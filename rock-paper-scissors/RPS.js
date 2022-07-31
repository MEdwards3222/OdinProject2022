
//Computer randomly select Rock, Paper, or Scissors
function computerPlay() {
    return ['paper','rock','scissors'][Math.floor(Math.random()*3)];
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
            return 1;
        }

        else if (computerSelection == "paper") {
            return -1;
        }

        else if (computerSelection == "rock") {
            return 0;
        }

        else {
            alert("Something went wrong... Sorry, errors count as ties! It's totally a feature, not a bug.");
            return 0;
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return 1;
        }

        else if (computerSelection == "scissors") {
            return -1;
        }

        else if (computerSelection == "paper") {
            return 0;
        }

        else {
            alert("Something went wrong... Sorry, errors count as ties! It's totally a feature, not a bug.");
            return 0;
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return 1;
        }

        else if (computerSelection == "rock") {
            return -1;
        }

        else if (computerSelection == "scissors") {
            return 0;
        }

        else {
            alert("Something went wrong... Sorry, errors count as ties! It's totally a feature, not a bug.");
            return 0;
        }
    }

    return console.log("Play round failed to execute properly!");
}

//==========================Event Listeners=============================



    const btn = document.querySelector("button");
    const btns = Array.from(document.querySelectorAll("button"));
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const results = document.querySelector(".results");
    const score = document.querySelector(".score");

    let playerScore = 0;
    let comScore = 0;

    


    btns.forEach(btn => btn.addEventListener("mouseover", btnHoverOn, false));
    btns.forEach(btn => btn.addEventListener("mouseout", btnHoverOff, false));
    rock.addEventListener("click", selectRock, false);
    paper.addEventListener("click", selectPaper);
    scissors.addEventListener("click", selectScissors);

    score.textContent = `Player Score: ${playerScore} | Computer Score: ${comScore}`;

    function btnHoverOn(e) {
        e.target.setAttribute("style", "background-color: rgb(58, 129, 68);");
    }

    function btnHoverOff(e) {
        e.target.setAttribute("style", "background-color: rgb(68, 139, 68);");
    }

    function selectRock(e) {
        let result = playRound("rock", computerPlay());
        switch(result) {
            case 1:
                results.textContent = "You chose Rock! Computer chose Scissors! You win!"
                playerScore++;
                break;
            case -1:
                results.textContent = "You chose Rock! Computer chose Paper! You lose..."
                comScore++;
                break;
            case 0:
                results.textContent = "You chose Rock! Computer chose Rock! It's a tie!"

        }

        score.textContent = `Player Score: ${playerScore} | Computer Score: ${comScore}`;
    }

    function selectPaper(e) {
        let result = playRound("paper", computerPlay());
        switch(result) {
            case 1:
                results.textContent = "You chose Paper! Computer chose Rock! You win!"
                playerScore++;
                break;
            case -1:
                results.textContent = "You chose Paper! Computer chose Scissors! You lose..."
                comScore++;
                break;
            case 0:
                results.textContent = "You chose Paper! Computer chose Paper! It's a tie!"

        }

        score.textContent = `Player Score: ${playerScore} | Computer Score: ${comScore}`;
    }

    function selectScissors(e) {
       let result = playRound("scissors", computerPlay());

       switch(result) {
        case 1:
            results.textContent = "You chose Scissors! Computer chose Paper! You win!"
            playerScore++;
            break;
        case -1:
            results.textContent = "You chose Scissors! Computer chose Rock! You lose..."
            comScore++;
            break;
        case 0:
            results.textContent = "You chose Scissors! Computer chose Scissors! It's a tie!"

        }

        score.textContent = `Player Score: ${playerScore} | Computer Score: ${comScore}`;

    }



//==========================Event Listeners=============================

//=====================TO REMOVE========================================

//Create a game - a game consists of 5 rounds. Whoever has the highest score wins.
/*function game() {
let playerScore = 0;
let comScore = 0;
let tie = 0;

    for (i = 0; i < 5; i++) {
        let result = 0;

        console.log(`Beginning round ${i}!`);
        playerChoice = playerSelection();
        comChoice = computerPlay();

        result = playRound(playerChoice, comChoice);

        if (result == 1){
            playerScore++;
        }

        if (result == -1) {
            comScore++;
        }

        if (result == 0) {
            tie++;
        }

        alert(`Round ${i+1}\n Current Score: \n\t Player Score: ${playerScore}\n\t Computer Score: ${comScore}\n\t Total Ties: ${tie}`);
    }

    if (playerScore > comScore) {
        alert(`The current Score: \n\t Player Score: ${playerScore}\n\t Computer Score: ${comScore}\n\t Total Ties: ${tie}\n\n You win!!`);
        alert("Game over! Thank you for playing!");
        return 0;
    }

    else if (comScore > playerScore) {
        alert(`The current Score: \n\t Player Score: ${playerScore}\n\t Computer Score: ${comScore}\n\t Total Ties: ${tie}\n\n You lose, better luck next time!`);
        alert("Game over! Thank you for playing!");
        return 0;
    }

    else if (playerScore == comScore) {
        alert(`The current Score: \n\t Player Score: ${playerScore}\n\t Computer Score: ${comScore}\n\t Total Ties: ${tie}\n\n It's a tie! Such fierce competition!`);
        alert("Game over! Thank you for playing!");
        return 0;
    }
}

game(); */

//=====================TO REMOVE========================================