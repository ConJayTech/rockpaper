    // Getting User Input
    //function playerSelection() {
    //    const PlayerChoice = prompt("Choose rock, paper, or scissors").toLocaleLowerCase();
    //    if(PlayerChoice ==="paper" || PlayerChoice ==="rock" || PlayerChoice ==="scissors"){
    //        return PlayerChoice;
     //   } else {
    //        return "Unrecognized Input";
    //    } }
        
    // Getting Computer Input
    function computerSelection() {
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
            return "You Lose!";

        } else if (
            (computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "scissors" && playerSelection == "rock") ||
            (computerSelection == "paper" && playerSelection == "scissors")) {
            return "You Win!";
        }
    }
   
    //Playing a Game of 5 Rounds
    //function game() {
       // let computerScore = 0;
       // let playerScore = 0;

        //for (i=0;i<5;i++) {
        const buttonRock = document.querySelector("#rock");
        const buttonPaper = document.querySelector("#paper");
        const buttonScissors = document.querySelector("#scissors");
        buttonRock.addEventListener('click', () => {
            const result = playRound("rock", computerSelection());
            console.log(result);
            if (result.includes("Win!")) {
                playerScore++;
                console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
            } else if (result.includes("Lose!")) {
                computerScore++;
                console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
            }
        });

        buttonPaper.addEventListener('click', () => {
            const result = playRound("paper", computerSelection());
            console.log(result);
            if (result.includes("Win!")) {
                playerScore++;
                console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
            } else if (result.includes("Lose!")) {
                computerScore++;
                console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
            }
        });

        buttonScissors.addEventListener('click', () => {
            const result = playRound("scissors", computerSelection());
            console.log(result);
            if (result.includes("Win!")) {
                playerScore++;
                console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
            } else if (result.includes("Lose!")) {
                computerScore++;
                console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
            }
        });
    
        
//        console.log(
//            "Final Results: Player: " + playerScore + " | " + "Computer: " + computerScore
//        );
//        if (playerScore>computerScore) {
//            console.log("You Win the Game!");
//        } else if (playerScore<computerScore) {
//            console.log("You Lose the Game!");
//        } else {
//            console.log("The Game was a tie!");
//        }
    //}
   
//game();