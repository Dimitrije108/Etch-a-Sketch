const container = document.querySelector('.container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

slider.addEventListener('input', function(){
    sliderValue.textContent = slider.value;
});

function grid() {
    for (let i = 0; i < slider.value; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < slider.value; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

console.log(grid());