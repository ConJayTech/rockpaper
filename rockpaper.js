 
    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll('button');
    const outcome = document.querySelector('.result');
    const playerScoreSpan = document.querySelector('.player-score');
    const computerScoreSpan = document.querySelector('.computer-score');

    
    // Getting Computer Input
    function computerSelection() {
        return choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
    }      
    
    //Playing a Round
    const playRound = (playerSelection, computerSelection) => {

        if (computerSelection == playerSelection) {
            const p = document.createElement('p');
            p.innerText = `Computer chose ${computerSelection}, It's a tie!`;
            outcome.appendChild(p);
            return "It's a tie!";
        } else if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")) {
            const p = document.createElement('p');
            p.innerText = `Computer chose ${computerSelection}, You Lose!`;
            outcome.appendChild(p);
            return "You Lose!";

        } else if (
            (computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "scissors" && playerSelection == "rock") ||
            (computerSelection == "paper" && playerSelection == "scissors")) {
            const p = document.createElement('p');
            p.innerText = `Computer chose ${computerSelection}, You Win!`;
            outcome.appendChild(p);
            return "You Win!";
        }
    }
   
    //Check for winner
    const checkForWinner = (playerScore, computerScore) => {
        if (playerScore === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('player-won')
            h2.innerText = `You won ${playerScore} to ${computerScore}, congratulations!`
            outcome.append(h2)
        }
        if (computerScore === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('computer-won')
            h2.innerText = `You lost ${computerScore} to ${playerScore}, better luck next time!`
            outcome.append(h2)
        }
    }

    //Update Scores
    const updateScores = (playerScore, computerScore) => {
        playerScoreSpan.innerText = `Player Score:${playerScore}`;
        computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
    }

    //Buttons and Event Listeners    
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
        
                const result = playRound(button.id, computerSelection());
                    if (result.includes("Win!")) {
                    playerScore++;
                        } else if (result.includes("Lose!")) {
                    computerScore++;
                        };
                    updateScores(playerScore, computerScore);
                    checkForWinner(playerScore, computerScore);    
                   });
            });