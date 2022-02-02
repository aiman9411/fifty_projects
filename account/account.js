const numbers = document.querySelectorAll(".number");

const button = document.getElementById("proceed");

numbers[0].focus();

    numbers.forEach((number, idx) => {
        number.addEventListener("keydown", (e) => {
            if(e.key >= 0 && e.key <= 9 && idx < 5 && idx >= 0) {
                numbers[idx].value = '';
                setTimeout(() => numbers[idx + 1].focus(), 1);
            } else if(e.key === "Backspace" && idx > 0) {
                setTimeout(() => numbers[idx - 1].focus(), 1);
            } else if(e.key >= 0 && e.key <= 9 && idx === 5) {
                numbers[idx].value = '';
                setTimeout(() => numbers[idx].focus(), 1);
            } else if(e.key === "Backspace" && idx === 0) {
                setTimeout(() => numbers[idx].focus(), 1);
            }
        })
    })

button.addEventListener("click", () => {
    const print = document.getElementById("print");
    print.classList.add("active");
    numbers.forEach(number => {
        if(number.checkValidity()) {
            print.innerHTML = "You may proceed!"
            number.classList.remove('empty');
        } else {
            number.classList.add('empty');
            print.innerHTML = "Please fill in the required fields!"
        }
    })
})