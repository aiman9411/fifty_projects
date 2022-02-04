const ratings = document.querySelectorAll(".rating");
const container = document.querySelector(".container");
const button = document.getElementById("button");
const ratingContainer = document.querySelector(".rating-container");
let selectedRating ="Happy";

ratings.forEach(item => {
    item.addEventListener("click", () => {
        removeActive();
        item.classList.add("active");
        selectedRating = item.innerText;
    })
})

button.addEventListener("click", () => {
    container.innerHTML = 
    `
    <p>Thank You!</p>
    <p>Feedback: ${selectedRating}</p>
    <p>We will use your feedback to improve our <br>customer support</p>
    `
})

function removeActive() {
    ratings.forEach(item => item.classList.remove('active'))
}
