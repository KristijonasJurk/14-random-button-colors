const buttons = document.getElementsByTagName('button');

let copyClass = [];
for (let i = 0; i < buttons.length; i++) {
    let copy = buttons[i].classList[1];
    copyClass.push(copy);
}
console.log(copyClass);

function changeColor(change) {
    if (change.value === 'red') {
        funcRed()
    }
    if (change.value === 'random') {
        funcRandom()
    }
    if (change.value === 'reset') {
        funcReset()
    }
}
function funcRed() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('red')
    }
}
const data = ['red', 'blue', 'yellow', 'green']
function funcRandom() {
    for (let i = 0; i < buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4)
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(data[randomNumber]);
    }
}
function funcReset() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(copyClass[i]);
    }
}
