// Query everything
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

// Start the counter
let activeNum = 1;

// Work on Next button
next.addEventListener('click', () => {

    activeNum++
    if(activeNum > circles.length) {
        activeNum === circles.length
    }

    update();
})

// Work on Prev button
prev.addEventListener('click', () => {
    activeNum--
    if(activeNum < 1) {
        activeNum === 1
    }

    update();
})

// Create Update Function
function update() {
    circles.forEach((circle, idx) => {
        if(activeNum > idx) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }
    })

    progress.style.width = ((activeNum - 1)/(circles.length - 1))*100 + '%';

    if(activeNum === circles.length) {
        next.disabled = true;
    } else if (activeNum === 1) {
        prev.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}