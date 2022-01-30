const contents = document.querySelectorAll(".content");
const buttons = document.querySelectorAll("nav ul li");

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        removeImage();
        removeActive();

        button.classList.add("active");
        contents[idx].classList.add("show");
    })
})

function removeImage() {
    contents.forEach(img => img.classList.remove("show"));
}

function removeActive() {
    buttons.forEach(button => button.classList.remove("active"));
}