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

