const blocks = document.querySelectorAll('.block');
window.addEventListener('scroll', checkBlocks);

function checkBlocks() {
    var triggerBottom = window.innerHeight / 10 * 4;
    blocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;

        if(blockTop < triggerBottom) {
            block.classList.add('show');
        } else {
            block.classList.remove('show');
        }
    })
}