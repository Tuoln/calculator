function add(n1, n2){
    return n1 + n2
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function operate(operator, n1, n2){
    if(operater === "+")
        return add(n1, n2)
    else if(operater === "-")
        return subtract(n1, n2)
    else if(operater === "*")
        return multiply(n1, n2)
    else
        return divide(n1, n2)
}

let display = document.querySelector(".display")
let wholeText = "";
display.innerText = "";

let allButtons = document.querySelectorAll('button')
allButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        wholeText += e.target.innerText
        display.innerText = wholeText
    })
});


let equalButton = document.querySelector("#equal")
equalButton.addEventListener("click", (e) => {
    let answer = eval(wholeText.substring(0, wholeText.length - 1))
    display.innerText = answer
    wholeText = ""
})

let del = document.querySelector(".del")
del.addEventListener("click", (e) => {
    wholeText = wholeText.substring(0, wholeText.length - 4)
    display.innerText = wholeText
})

let ac = document.querySelector(".ac")
ac.addEventListener("click", (e) => {
    wholeText = ""
    display.innerText = wholeText
})

