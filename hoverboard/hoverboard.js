const container = document.querySelector(".container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const number = 503;

for (let i = 0; i < number; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

