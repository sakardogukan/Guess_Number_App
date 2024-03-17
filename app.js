const form = document.querySelector("form")
const input = document.querySelector(".formArea-Input")
const button = document.querySelector(".formArea-button")
const messagePar = document.querySelector(".message")

let pcGuess
const pcGuessCalc = () => {
    pcGuess = Math.floor(Math.random() * 100)
}

window.onload = async function (e) {
    pcGuessCalc()
    console.log(pcGuess)
}

localStorage.setItem("youGuess", input.value)
let youGuess = localStorage.getItem("youGuess")

const YELLOW = "#ffc538"
const RED = "#fb778b"
const GREEN = "#5ab7ac"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(input.value)
    guessCalc()
    e.target.reset()
})

const guessCalc = () => {
    if (pcGuess == input.value) { draw() }
    else if (pcGuess < input.value) { azalt() }
    else if (pcGuess > input.value) { artir() }
}

const draw = () => {
    messagePar.textContent = "You Win"
    messagePar.style.color = GREEN
    window.onload()
}

const artir = () => {
    messagePar.textContent = "Your Guess Increment..."
    messagePar.style.color = RED
}

const azalt = () => {
    messagePar.textContent = "Your Guess Decrement..."
    messagePar.style.color = RED
}