let compScore = 0;
let playerScore = 0;

function computerChoice() {
    return compChoice = Math.floor(Math.random() * 3); //0 to 2
}

function humanChoice(choice) {
    //paper = 0, rock = 1, scissors = 2
    if (choice.toLowerCase() == "paper") {
        //console.log("Paper");
        return 0;
    }
    else if (choice.toLowerCase() == "rock") {
        //console.log("Rock");
        return 1;
    } else {
        //console.log("Scissors");
        return 2;
    }
}

function gameLogic(player, comp) {
    console.log("Player: ", player);
    console.log("Computer: ", comp);
    //paper, rock; rock, scissors
    if (player - comp == 1) {
        playerScore += 1;
    }
    else if (player - comp == -1) {
        compScore += 1;
    }
    //paper, scissors
    else if (player > comp) {
        playerScore += 1;
    } 
    else if (comp > player) {//if I don't do this, the computer wins even when we tie
        compScore += 1;
    }
}

for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Choose Rock Paper Scissors:");
    player = humanChoice(playerChoice);
    console.log(player)
    compChoice = computerChoice();
    gameLogic(player, compChoice);
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + compScore);
}

