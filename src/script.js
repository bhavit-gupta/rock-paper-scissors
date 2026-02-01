let userCount = document.querySelector("#yourCount")
let compCount = document.querySelector("#compCount")
let msg = document.querySelector("#msg")
let reset = document.querySelector("#reset")
let winner = document.querySelector("#winner")

const choices = document.querySelectorAll(".choice")


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        const compChoice = Math.floor(Math.random() * 3)
        const options = ["rock", "paper", "scissor"]
        const computerChoice = options[compChoice]
        if (userChoice === computerChoice) {
            winner.innerText="Its a TIE"
            winner.classList.remove("hidden")
            msg.innerText = `Computer chose: ${computerChoice}`
        } else {
            if (
                userChoice === "rock" && computerChoice === "scissor" ||
                userChoice === "paper" && computerChoice === "rock" ||
                userChoice === "scissor" && computerChoice === "paper"
            ) {
                winner.innerText = "User won"
                msg.innerText = `Computer chose: ${computerChoice}`
                userCount.innerText++
                winner.classList.remove("hidden")
            }
            else {
                winner.innerText = "Computer won"
                msg.innerText = `Computer chose: ${computerChoice}`
                compCount.innerText++
                winner.classList.remove("hidden")
            }
        }
    })
})
reset.addEventListener("click", () => {
    userCount.innerText = 0
    compCount.innerText = 0
    msg.innerText = "Play your move"
    winner.classList.add("hidden")
})

