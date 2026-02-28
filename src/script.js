let userCount = document.querySelector("#yourCount")
let compCount = document.querySelector("#compCount")
let msg = document.querySelector("#msg")
let reset = document.querySelector("#reset")
let winner = document.querySelector("#winner")

const choices = document.querySelectorAll(".choice")

// Function to handle showing the winner banner with animation
const showWinner = (text, isUserWin, isTie = false) => {
    winner.innerText = text;
    winner.classList.remove("hidden", "scale-95", "opacity-0");
    winner.classList.add("scale-100", "opacity-100");

    // Reset classes
    winner.classList.remove("text-yellow-300", "text-purple-300", "text-pink-300", "border-yellow-400/30", "border-purple-400/30", "border-pink-400/30", "bg-yellow-900/40", "bg-purple-900/40", "bg-pink-900/40");

    if (isTie) {
        winner.classList.add("text-yellow-300", "border-yellow-400/30", "bg-yellow-900/40");
    } else if (isUserWin) {
        winner.classList.add("text-purple-300", "border-purple-400/30", "bg-purple-900/40");
        userCount.innerText++;
        // Trigger bounce animation on score
        userCount.classList.add("scale-125");
        setTimeout(() => userCount.classList.remove("scale-125"), 300);
    } else {
        winner.classList.add("text-pink-300", "border-pink-400/30", "bg-pink-900/40");
        compCount.innerText++;
        // Trigger bounce animation on score
        compCount.classList.add("scale-125");
        setTimeout(() => compCount.classList.remove("scale-125"), 300);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        const compChoice = Math.floor(Math.random() * 3)
        const options = ["rock", "paper", "scissor"]
        const computerChoice = options[compChoice]

        // Add a slight click animation to the message box
        msg.classList.add("scale-95");
        setTimeout(() => msg.classList.remove("scale-95"), 150);

        msg.innerText = `Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`

        if (userChoice === computerChoice) {
            showWinner("IT'S A TIE!", false, true);
        } else {
            if (
                userChoice === "rock" && computerChoice === "scissor" ||
                userChoice === "paper" && computerChoice === "rock" ||
                userChoice === "scissor" && computerChoice === "paper"
            ) {
                showWinner("YOU WON!", true, false);
            }
            else {
                showWinner("COMPUTER WON!", false, false);
            }
        }
    })
})

reset.addEventListener("click", () => {
    userCount.innerText = "0"
    compCount.innerText = "0"
    msg.innerText = "Make your move..."

    // Hide winner with animation
    winner.classList.remove("scale-100", "opacity-100");
    winner.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
        winner.classList.add("hidden");
    }, 500); // Wait for transition to finish

    // Button click animation
    reset.classList.add("scale-90");
    setTimeout(() => reset.classList.remove("scale-90"), 150);
})
