const container = document.querySelector(".container");
const unsplashURL = 'https://source.unsplash.com/random/';
const row = 5;

insertImage();

function insertImage() {
    for(let i = 0; i < row * 3; i++) {
        const image = document.createElement("img");
        image.classList = "img";
        image.src = `${unsplashURL}${randomNumber()}x${randomNumber()}`;
        container.appendChild(image);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}