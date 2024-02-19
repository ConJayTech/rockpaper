    // Getting User Input
    //function playerSelection() {
    //    const PlayerChoice = prompt("Choose rock, paper, or scissors").toLocaleLowerCase();
    //    if(PlayerChoice ==="paper" || PlayerChoice ==="rock" || PlayerChoice ==="scissors"){
    //        return PlayerChoice;
     //   } else {
    //        return "Unrecognized Input";
    //    } }
        
    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll('button');
    const outcome = document.querySelector('.result');

    
    // Getting Computer Input
    function computerSelection() {
        return choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
    }      
    
    //Playing a Round
    const playRound = (playerSelection, computerSelection) => {
        console.log("Player: " + playerSelection + " VS" + " Computer: " + computerSelection)
        //const outcome = document.querySelector('.result');
        if (computerSelection == playerSelection) {
            const p = document.createElement('p');
            p.innerText = 'It\'s a tie!';
            outcome.appendChild(p);
            return "It's a tie!";
        } else if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")) {
            const p = document.createElement('p');
            p.innerText = 'You Lose!';
            outcome.appendChild(p);
            return "You Lose!";

        } else if (
            (computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "scissors" && playerSelection == "rock") ||
            (computerSelection == "paper" && playerSelection == "scissors")) {
            const p = document.createElement('p');
            p.innerText = 'You Win!';
            outcome.appendChild(p);
            return "You Win!";
        }
    }
   
    //Playing a Game of 5 Rounds
    //function game() {
       // let computerScore = 0;
       // let playerScore = 0;

        //for (i=0;i<5;i++) {

    //Buttons and Event Listeners    
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
        
                const result = playRound(button.id, computerSelection());
                console.log(result);
                    if (result.includes("Win!")) {
                    playerScore++;
                    console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
                        } else if (result.includes("Lose!")) {
                    computerScore++;
                    console.log("Computer:" + computerScore + "|" + "Player:" + playerScore);
                        }
                   });
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