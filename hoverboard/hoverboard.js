const container = document.querySelector(".container");

const number = 503;

for (let i = 0; i < number; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}