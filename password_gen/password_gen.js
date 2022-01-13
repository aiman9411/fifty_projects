const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('gen-button');
const copyEl = document.getElementById('copy-button');


generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked; 

    resultEl.innerText = generatePassword(hasUpper, hasLower, 
        hasNumber, hasSymbol, length);

})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = '';
    const typeCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].
    filter(item => Object.values(item)[0])
    
    if(typeCount === 0) {
        return '';
    }
}

const randomFunc = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
}


function getLower() {
    return String.fromCharCode(Math.floor(Math.random * 26) + 97)
};

function getUpper() {
    return String.fromCharCode(Math.floor(Math.random * 26) + 65)
};

function getNumber() {
    return String.fromCharCode(Math.floor(Math.random * 10) + 48)
};

function getSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

