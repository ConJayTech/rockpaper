    // Getting User Input
    function getPlayerChoice () {
        const PlayerSelection = prompt("Choose rock, paper, or scissors").toLocaleLowerCase();
        if(PlayerSelection ==="paper" || PlayerSelection ==="rock" || PlayerSelection ==="scissors"){
            console.log("You choose " + (PlayerSelection));
        } else {
            console.log("Unrecognized Input");
        } }
        
        // Getting Computer Input
        function getComputerChoice () {
            return choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
        }  
         
    
        //Playing a Round
        function playRound(PlayerSelection,ComputerSelection) {
            ComputerSelection = getComputerChoice();
            //PlayerSelection = getPlayerChoice();
            //game works when defining parameters in console
            if (ComputerSelection == PlayerSelection) {
                return "It's a tie!";
            } else if (
                (ComputerSelection == "rock" && PlayerSelection == "scissors") ||
                (ComputerSelection == "scissors" && PlayerSelection == "paper") ||
                (ComputerSelection == "paper" && PlayerSelection == "rock")) {
                return "Computer Wins!";
            } else if (
                (ComputerSelection == "rock" && PlayerSelection == "paper") ||
                (ComputerSelection == "scissors" && PlayerSelection == "rock") ||
                (ComputerSelection == "paper" && PlayerSelection == "scissors")) {
                return "Player Wins!";
            }
        }