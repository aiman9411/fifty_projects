const button = document.querySelector('button');
const toasts = document.querySelector('.toasts');

const message = ['Message 1', 'Message 2', 'Message 3'];
const color = ['red', 'blue', 'green']

button.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('toast');
    div.style.color = color[Math.floor(Math.random() * color.length)];
    div.innerText = message[Math.floor(Math.random() * message.length)];
    toasts.appendChild(div);

    setTimeout(() => {
        div.remove()
    }, 3000);
})