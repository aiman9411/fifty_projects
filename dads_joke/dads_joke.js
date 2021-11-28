const jokes = document.getElementById('jokes');
const button = document.getElementById('btn');

button.addEventListener('click', generateJokes);

generateJokes();

async function generateJokes() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    jokes.innerText = data.joke;
}