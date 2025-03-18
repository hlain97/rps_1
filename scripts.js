const rock = document.querySelector("#rock");
const papers = document.querySelector("#papers");
const scissors = document.querySelector("#scissors");
const narrator = document.querySelector("#narrator");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const paraPlayer = document.createElement('p');
const paraComputer = document.createElement('p');
const paraNarrator = document.createElement('p');

let playerCount = 0;
let computerCount = 0;


paraPlayer.textContent = "Player Score: " + playerCount.toString();
paraComputer.textContent = "Computer Score: " + computerCount.toString();
paraNarrator.textContent = "Rock, papers, scissors - what's it gonna be?"

playerScore.appendChild(paraPlayer);
computerScore.appendChild(paraComputer);
narrator.appendChild(paraNarrator);

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
papers.addEventListener('click', () => {
    playRound('papers', getComputerChoice());
});
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

let comparison = function(){
    if(playerCount == 5){
        paraNarrator.textContent = 'HUMANS WIN';
        narrator.appendChild(paraNarrator);
        
    } else if (computerCount == 5){
        paraNarrator.textContent = 'COMPUTERS WIN';
        narrator.appendChild(paraNarrator);
    }
}

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

// let getHumanChoice = function(){

//     let selection = prompt('Rock, Paper, Scissors:');
//     let choice = '';

//     if(selection === 'rock'){
//         choice = 'rock';
//         console.log(choice);
//         return choice;
//     } else if (selection === 'paper'){
//         choice = 'paper';
//         console.log(choice);
//         return choice;
//     } else {
//         choice = 'scissors';
//         console.log(choice);
//         return choice;
//     }
// }

let playRound = function(player, computer){
    if(player == 'rock' && computer == 'paper'){
        paraNarrator.textContent ='Computer wins! Paper > Rock';
        narrator.appendChild(paraNarrator);
        computerCount += 1;
        paraComputer.textContent = "Computer Score: " + computerCount.toString();
        comparison();
    } else if (player == 'paper' && computer == 'scissors'){
        paraNarrator.textContent = 'Computer wins! Scissors > Paper';
        narrator.appendChild(paraNarrator);
        computerCount += 1;
        comparison();
        paraComputer.textContent = "Computer Score: " + computerCount.toString();
    } else if (player == 'scissors' && computer == 'rock'){
        paraNarrator.textContent = 'Computer wins! Rock > Scissors';
        narrator.appendChild(paraNarrator);
        computerCount += 1;
        paraComputer.textContent = "Computer Score: " + computerCount.toString();
        comparison();
    } else if (player == 'rock' && computer == 'rock' || player == 'paper' && computer == 'paper' || player == 'scissors' && computer == 'scissors'){
        paraNarrator.textContent = 'This is a tie!';
        narrator.appendChild(paraNarrator);
        comparison();
    } else { 
        paraNarrator.textContent = 'You beat the computer!!!!';
        narrator.appendChild(paraNarrator);
        playerCount += 1;
        paraPlayer.textContent = "Player Score: " + playerCount.toString();
        comparison();
    }
}
