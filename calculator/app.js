let pressing = document.querySelectorAll('.pressing');
let input = document.querySelector('input');

let calculation = 0;

for(let x = 0; x < pressing.length; x++){
    pressing[x].addEventListener('click', () => {
        input.value += pressing[x].innerText;
    })
}

