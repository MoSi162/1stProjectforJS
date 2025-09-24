// List of choices
var choices = ["rock", "paper", "scissors"];

// Get player input
var playerChoice = prompt("Choose rock, paper or scissors:");

// Check if input is valid
if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    // Show what player chose
    console.log("You chose " + playerChoice);

    // Make computer pick randomly
    var randomNumber = Math.floor(Math.random() * 3);
    var computerChoice = choices[randomNumber];
    console.log("Computer chose " + computerChoice);

    // Decide winner
    if (playerChoice === computerChoice) {
        console.log("It’s a tie!");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
} else {
    // If input is wrong
    console.log("Error! Please choose either rock, paper, or scissors.");
}
