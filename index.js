// Function to generate random numbers
function randomNumbers(){
    return Math.ceil(Math.random()*100)
}

// Genereate and tell user 4 random numbers
const numbers = []

for (let i = 0; i < 4 ; i++){
    numbers.push(randomNumbers())
}

alert(`Here are 4 random numbers: ${numbers.join(" - ")}`)

// the function to be put into set time out to check how many guesses the user got right
function getUserGuesses(){
    let guesses = 0
    for (let i = 0; i < 4; i++){
        const number = Number(prompt(`What was number ${i+1}`))
        if (numbers[i]===number){guesses +=1}
    }
    console.log(`You got ${guesses} guesses right`)
}

// after 15 seconds
setTimeout(getUserGuesses, 15000)