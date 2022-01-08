const statementEl = document.getElementById('statement');
const speedEl = document.getElementById('speed');
const text = "My name is Aiman";
let idx = 1;

genStatement();

function genStatement() {
    statementEl.innerText = text.slice(0,idx);
    idx++;
    
    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(genStatement, 300);
}

