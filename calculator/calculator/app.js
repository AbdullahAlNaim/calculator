const pressing = document.querySelectorAll('.pressing');
const input = document.querySelector('input');
const equal = document.querySelector('#equal');
const times = document.querySelector('#times');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const clear = document.querySelector('#clear');

let num1 = 0;
let num2 = 0;
let result = 0;

//updating screen input
for (let x = 0; x < pressing.length; x++) {
    pressing[x].addEventListener('click', () => {

        input.value += pressing[x].innerText;
        num1 = parseInt(input.value);
        console.log(num1, num2, input.value)

    })
}

add.addEventListener('click', () => {
    num1 = parseInt(input.value);
    input.value = '';
    num2 = parseInt(input.value = pressing[x].value);
    result = num1 + num2;
    console.log(num1, num2, input.value, result);
})



times.addEventListener('click', () => {
    input.value = '';

    console.log(num1, num2);
})

divide.addEventListener('click', () => {
    input.value = '';
    num2 = parseInt(input.value) / num1;
    console.log(num1, num2, input.value);
})



minus.addEventListener('click', () => {
    input.value = '';
    num2 = parseInt(input.value) - num1;
    console.log(num1, num2);
})

clear.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    input.value = '';
    console.log(num1, num2, input.value);
})

equal.addEventListener('click', () => {
    input.value = result;
    console.log(num1, num2, input.value);
})
