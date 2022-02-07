const container = document.querySelector(".container");
const show = document.getElementById("button");
const black = document.getElementById("black");

show.addEventListener('click', () => {
    container.classList.remove("hide");
    black.classList.add("active");
})