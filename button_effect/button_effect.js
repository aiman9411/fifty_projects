const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


        // console.log(buttonTop, buttonLeft);
        // console.log(x, y);

        const xCursor = x - buttonLeft;
        const yCursor= y - buttonTop;

        // console.log(xCursor, yCursor);
        const span = document.createElement('span');
        span.classList.add('circle');
        span.style.top = yCursor + 'px';
        span.style.left = xCursor + 'px';

        this.appendChild(span);
        setTimeout(() => span.remove(), 500);
    })
})