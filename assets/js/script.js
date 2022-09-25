document.addEventListener("DOMContentLoaded", function(){
    let buttons = this.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer()
            } else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType)
            }
        })
    }

    runGame("addition")
})

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value)
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect) {
        alert("Hey, you got it right")
        incrementScore()
    }  else {
        alert(`Aww...you answered ${userAnswer} , The correct answer is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer()
    }
      runGame(calculatedAnswer[1])
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = (document.getElementById("operator").innerText)

    if (operator === "+") {
        return [operand1 + operand2, "addition"]
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"]
    } else {
        alert(`Unimplemented Operator ${operator}`)
        throw `Unimplemented Operator ${operator}. Aborting!`
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore
}

/** Take note that operand1 and 2 are the parameters of this function
 * and they take num1 and num 2 as arguments so when you console.log the parameter 
 * it give you the value of the variables that were pass as arguments. 
 * Basically, arguments are variables already delcared and passed into a function
 * when it is being called. While parameters are declared inside parenthesis of a function
 * when its being defined
*/
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "+"
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "x"
}




