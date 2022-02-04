const ratings = document.querySelectorAll(".rating");
const container = document.querySelector(".container");
const button = document.getElementById("button");
const ratingContainer = document.querySelector(".rating-container");
let selectedRating ="Happy";

ratingContainer.addEventListener("click", (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
        console.log(selectedRating);
    }
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