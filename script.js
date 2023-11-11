const container = document.querySelector('.container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
const gridBtn = document.querySelector('.gridBtn');
const input = document.querySelector('input');
const randomColorBtn = document.querySelector('.randomColorBtn');
const disableRandomColor = document.querySelector('.randomColorBtnOff');
const darkeningBtn = document.querySelector('.darkeningBtn');
const darkeningBtnOff = document.querySelector('.darkeningBtnOff');
let inputValue = 16;

slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
});

gridBtn.addEventListener('click', () => {
    inputValue = input.value;
    grid(inputValue);
});

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgb(255 0 0)';
});

randomColorBtn.addEventListener('click', () => {
    container.addEventListener('mouseover', function (e) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    });
});

disableRandomColor.addEventListener('click', () => {
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'rgb(255 0 0)';
    });
});

function grid(inputValue) {
    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };
    };
    for (let i = 0; i < inputValue; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < inputValue; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        };
        container.appendChild(row);
    };
};

grid(inputValue);