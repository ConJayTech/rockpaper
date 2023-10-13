    // Getting User Input
    function playerSelection () {
        const PlayerChoice = prompt("Choose rock, paper, or scissors").toLocaleLowerCase();
        if(PlayerChoice ==="paper" || PlayerChoice ==="rock" || PlayerChoice ==="scissors"){
            return PlayerChoice;
        } else {
            return "Unrecognized Input";
        } }
        
    // Getting Computer Input
    function computerSelection () {
        return choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
    }      
    
    //Playing a Round
    function playRound(playerSelection, computerSelection) {
        console.log("Player: " + playerSelection + " VS" + " Computer: " + computerSelection)
        if (computerSelection == playerSelection) {
            return "It's a tie!";
        } else if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")) {
            return "Computer Wins!";
        } else if (
            (computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "scissors" && playerSelection == "rock") ||
            (computerSelection == "paper" && playerSelection == "scissors")) {
            return "Player Wins!";
        }
    }
