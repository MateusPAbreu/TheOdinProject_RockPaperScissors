let compScore = 0;
let playerScore = 0;

function computerChoice(){
    return compChoice = Math.floor(Math.random() *3); //0 to 2
}

function humanChoice(choice){
    //paper = 0, rock = 1, scissors = 2
    if(choice.toLowerCase() == "paper"){
        //console.log("Paper");
        return 0;
    } 
    else if(choice.toLowerCase() == "rock"){
        //console.log("Rock");
        return 1;
    }else{
        //console.log("Scissors");
        return 2;
    }
}

function gameLogic(comp, player){
    // if((comp - player) == 1 || (comp - player) == -1){
    //     if(comp<player){//paper and rock
    //         compScore = compScore+1;
    //     }else{//rock scissors
    //         playerScore = playerScore + 1;
    //     }
    // }else{//scissors and paper

    // }
}

choice = prompt("Choose Rock Paper Scissors:");
humanChoice(choice);