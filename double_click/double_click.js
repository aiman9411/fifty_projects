const lovePicture = document.querySelector(".love-picture");
const times = document.querySelector(".number");
let clickTime = 0;
let timeClicked = 0;

lovePicture.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside= x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    lovePicture.appendChild(heart);
    times.innerHTML = ++timeClicked;

    setTimeout(() => {
        heart.remove()
    }, 1000);
}