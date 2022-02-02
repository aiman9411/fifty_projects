const numbers = document.querySelectorAll(".number");

numbers[0].focus()

numbers.forEach((number, idx) => {
    number.addEventListener("keyup", (e) => {
        if(e.key >= 0 && e.key <= 9) {
            setTimeout(() => numbers[idx + 1].focus(), 0.1);
        } else if(e.key === "Backspace") {
            setTimeout(() => numbers[idx - 1].focus(), 0.1);
        }
    })
})