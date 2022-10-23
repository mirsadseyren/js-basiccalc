
let numpadButtons = document.querySelectorAll('button.numpad')

let slash = document.getElementById('slash')
let multiply = document.getElementById('mult')
let sum = document.getElementById('sum')
let minus = document.getElementById('minus')
let clear = document.getElementById('clear')
let calc = document.getElementById('calc')
let monitor = document.getElementById('monitor')

let secondValue;

function calculate(){
    secondValue = monitor.value
    if (expression === '+'){
        monitor.value = Number(firstValue) + Number(secondValue)
    }
    else if (expression === '-'){
        monitor.value = Number(firstValue) - Number(secondValue)        
    }
    else if (expression === '*'){
        monitor.value = Number(firstValue) * Number(secondValue)
    }
    else if (expression === '/'){
        monitor.value = Number(firstValue) / Number(secondValue)
    }

}

function addNumber(number){
    monitor.value += number
}
function clearScreen(){
    monitor.value = ''
}

clearScreen()

clear.onclick = () => {clearScreen()}

for (let i = 0 ; i < numpadButtons.length; i++){
    numpadButtons[i].onclick = (event) => {
        addNumber(Number(event.target.innerText))
    }
}

let firstValue;
let expression;

sum.onclick = () => {
    firstValue = monitor.value
    expression = '+'
    clearScreen()
}
minus.onclick = () => {
    firstValue = monitor.value
    expression = '-'
    clearScreen()
}
multiply.onclick = () => {
    firstValue = monitor.value
    expression = '*'
    clearScreen()
}
slash.onclick = () => {
    firstValue = monitor.value
    expression = '/'
    clearScreen()
}


calc.onclick = calculate
