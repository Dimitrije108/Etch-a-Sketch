const container = document.querySelector('.container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');
let inputValue = 16;

slider.addEventListener('input', function(){
    sliderValue.textContent = slider.value;
});

btn.addEventListener('click', function(){
    inputValue = input.value;
    grid(inputValue);
})

function grid(inputValue) {
    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    for (let i = 0; i < inputValue; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < inputValue; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

grid(inputValue);