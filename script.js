let computerOptions = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let winner;


function computerShot(){
    let choiceNumber = Math.floor(Math.random()*3);
    let computerChoice = computerOptions[choiceNumber];
    return computerChoice;
}


function playRound(player, computer){
    player = player.toLowerCase();
    let roundWinner;
    if(player === computer){
        roundWinner = 'tie';
    }if (player === 'rock' && computer === 'paper'){
        roundWinner = 'computer won';
        computerScore++;
    }if(player === 'paper' && computer === 'scissors'){
        roundWinner = 'computer won'
        computerScore++;
    }if(player === 'scissors' && computer === 'rock'){
        roundWinner = 'computer won'
        computerScore++;
    }if(computer === 'rock' && player === 'paper'){
        roundWinner = 'player won'
        playerScore++;
    }if(player === 'rock' && computer === 'scissors'){
        roundWinner = 'player won';
        playerScore++;
    }if(player === 'scissors' && computer === 'paper'){
        roundWinner = 'player won';
        playerScore++;
    }
    console.log(roundWinner)
    console.log('Your score:' + playerScore)
    console.log('Computer score:' + computerScore)
    return roundWinner;
}

function game() {
    let playerChoice;
    let winner
    for(let i=0; i<5; i++){
        playerChoice = prompt("Insert your decision");
        while(playerChoice != 'paper' && playerChoice != 'scissors' && playerChoice != 'rock'){
            playerChoice = prompt("insert a valid decision");
        }
        playRound(playerChoice, computerShot());
    }
    if(playerScore<computerScore){
        winner = 'The computer won sorry!'
    }else if(playerScore == computerScore){
        winner = 'Its a tie!'
    }else{
        winner = 'You won congrats!!'
    }
    playerScore = 0;
    computerScore = 0;

    return winner;
}