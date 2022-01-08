const statementEl = document.getElementById('statement');
const speedEl = document.getElementById('speed');
const sentenceEl = document.getElementById('sentence');
const form = document.getElementById('form');
let text = "My name is Aiman"; 
let idx = 1;
let speed = 300/speedEl.value;

genStatement();

function genStatement() {
    statementEl.innerText = text.slice(0,idx);
    idx++;
    
    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(genStatement, speed);
}

speedEl.addEventListener('input', (e) => speed = 300/e.target.value);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    text = sentenceEl.value;
    sentenceEl.value = '';
})