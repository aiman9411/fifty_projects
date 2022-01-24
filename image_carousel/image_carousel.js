const img_container = document.getElementById("imgs");
const imgs = document.querySelectorAll(".image-container img");

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
    idx++;

    changeImg();
}

function changeImg() {
    if(idx > imgs.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = imgs.length - 1
    }

    img_container.style.transform = `translateX(${-idx * 500}px)`;
}