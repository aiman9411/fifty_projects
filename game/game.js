const screens = document.querySelectorAll(".screen");
const selectInsectButtons = document.querySelectorAll(".select");
const startButton = document.querySelector(".start");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const gameContainer = document.getElementById("game-container");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selectedInsects = [];

startButton.addEventListener("click", () => screens[0].classList.add("up"));

selectInsectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selectedInsects = { src, alt };
        
        screens[1].classList.add("up");
        setTimeout(createInsect, 1000);
        startGame();
    })
})

function createInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");
    const { x, y } = getRandomLocation();
}