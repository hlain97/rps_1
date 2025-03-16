console.log('hello ser');

let getComputerChoice = function(){
    let random = Math.random();
    let choice = '';

    if(random <= 0.33){
        choice = 'rock';
        return choice;
    } else if( random <=  0.66 ){
        choice = 'paper';
        return choice;
    } else {
        choice = 'scissors';
        return choice;
    }
}

let getHumanChoice = function(){

    let selection = prompt('Rock, Paper, Scissors:');
    let choice = '';

    if(selection === 'rock'){
        choice = 'rock';
        console.log(choice);
        return choice;
    } else if (selection === 'paper'){
        choice = 'paper';
        console.log(choice);
        return choice;
    } else {
        choice = 'scissors';
        console.log(choice);
        return choice;
    }
}

let playRound = function(player, computer){
    if(player == 'rock' && computer == 'paper'){
        console.log('Computer wins! Paper > Rock')
    } else if (player == 'paper' && computer == 'scissors'){
        console.log('Computer wins! Scissors > Paper')
    } else if (player == 'scissors' && computer == 'rock'){
        console.log('Computer wins! Rock > Scissors')
    } else {
        console.log('You beat the computer!!!!');
    }
}


for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
}


