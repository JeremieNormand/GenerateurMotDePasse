var lowercasesToggle = false;
const lowercasesBtn = document.querySelector('#lowercasesBtn');
function onClickToggleLowercases() {
    lowercasesToggle = !lowercasesToggle;
    toggleBtn(lowercasesBtn, lowercasesToggle);
}

var uppercasesToggle = false;
const uppercasesBtn = document.querySelector('#uppercasesBtn');
function onClickToggleUppercases() {
    uppercasesToggle = !uppercasesToggle;
    toggleBtn(uppercasesBtn, uppercasesToggle);
}

var digitsToggle = false;
const digitsBtn = document.querySelector('#digitsBtn');
function onClickToggleDigits() {
    digitsToggle = !digitsToggle;
    toggleBtn(digitsBtn, digitsToggle);
}

var symbolsToggle = false;
const symbolsBtn = document.querySelector('#symbolsBtn');
function onClickToggleSymbols() {
    symbolsToggle = !symbolsToggle;
    toggleBtn(symbolsBtn, symbolsToggle);
}

function toggleBtn(btn, toggle) {
    if (toggle) {
        btn.style.background = '#E2C044';
        btn.style.color = '#000000';
    }
    else {
        btn.style.background = '#587B7F';
        btn.style.color = '#FFFFFF';
    }
}

function onClickGenerate() {
    var validBtns = validateBtns();
    var validLength = validateLength();
    if (validBtns && validLength) {
        generatePassword();
    }
}

const generateBtn = document.querySelector('#generateBtn');

function validateBtns() {
    if (!lowercasesToggle && !uppercasesToggle && !digitsToggle && !symbolsToggle) {
        lowercasesBtn.style.background = '#C05757';
        lowercasesBtn.style.color = '#FFFFFF';
        uppercasesBtn.style.background = '#C05757';
        uppercasesBtn.style.color = '#FFFFFF';
        digitsBtn.style.background = '#C05757';
        digitsBtn.style.color = '#FFFFFF';
        symbolsBtn.style.background = '#C05757';
        symbolsBtn.style.color = '#FFFFFF';
        return false;
    }
    if (!lowercasesToggle) {
        lowercasesBtn.style.background = '#587B7F';
        lowercasesBtn.style.color = '#FFFFFF';
    }
    if (!uppercasesToggle) {
        uppercasesBtn.style.background = '#587B7F';
        uppercasesBtn.style.color = '#FFFFFF';
    }
    if (!digitsToggle) {
        digitsBtn.style.background = '#587B7F';
        digitsBtn.style.color = '#FFFFFF';
    }
    if (!symbolsToggle) {
        symbolsBtn.style.background = '#587B7F';
        symbolsBtn.style.color = '#FFFFFF';
    }
    return true;
}

const lengthInput = document.querySelector('#lengthInput');

function validateLength() {
    if (lengthInput.value == '') {
        lengthInput.style.background = '#C05757';
        lengthInput.style.color = '#FFFFFF';
        return false;
    }
    if (Number.isNaN(parseInt(lengthInput.value))) {
        lengthInput.style.background = '#C05757';
        lengthInput.style.color = '#FFFFFF';
        return false;
    }
    if (parseInt(lengthInput.value) < 8) {
        lengthInput.style.background = '#C05757';
        lengthInput.style.color = '#FFFFFF';
        return false;
    }
    lengthInput.style.background = '#FFFFFF';
    lengthInput.style.color = '#000000';
    return true;
}

const passwordOutput = document.querySelector('#passwordOutput');

const lowercases = 'abcdefghijklmnopqrstuvwxyz';
const uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';
const symbols = '!@#$%^&*()_+-=';

function generatePassword() {
    var password = '';
    var length = parseInt(lengthInput.value);
    for (let i = 0; i < length; i++) {
        var characters = [];
        if (lowercasesToggle && uppercasesToggle && digitsToggle && symbolsToggle) {
            characters = [ lowercases, uppercases, digits, symbols ];
        }

        if (!lowercasesToggle && uppercasesToggle && digitsToggle && symbolsToggle) {
            characters = [ uppercases, digits, symbols ];
        }
        if (lowercasesToggle && !uppercasesToggle && digitsToggle && symbolsToggle) {
            characters = [ lowercases, digits, symbols ];
        }
        if (lowercasesToggle && uppercasesToggle && !digitsToggle && symbolsToggle) {
            characters = [ lowercases, uppercases, symbols ];
        }
        if (lowercasesToggle && uppercasesToggle && digitsToggle && !symbolsToggle) {
            characters = [ lowercases, uppercases, digits ];
        }

        if (!lowercasesToggle && !uppercasesToggle && digitsToggle && symbolsToggle) {
            characters = [ digits, symbols ];
        }
        if (!lowercasesToggle && uppercasesToggle && !digitsToggle && symbolsToggle) {
            characters = [ uppercases, symbols ];
        }
        if (!lowercasesToggle && uppercasesToggle && digitsToggle && !symbolsToggle) {
            characters = [ uppercases, digits ];
        }
        if (lowercasesToggle && !uppercasesToggle && !digitsToggle && symbolsToggle) {
            characters = [ lowercases, symbols ];
        }
        if (lowercasesToggle && !uppercasesToggle && digitsToggle && !symbolsToggle) {
            characters = [ lowercases, digits ];
        }
        if (lowercasesToggle && uppercasesToggle && !digitsToggle && !symbolsToggle) {
            characters = [ lowercases, uppercases ];
        }

        if (!lowercasesToggle && !uppercasesToggle && !digitsToggle && symbolsToggle) {
            characters = [ symbols ];
        }
        if (lowercasesToggle && !uppercasesToggle && !digitsToggle && !symbolsToggle) {
            characters = [ lowercases ];
        }
        if (!lowercasesToggle && uppercasesToggle && !digitsToggle && !symbolsToggle) {
            characters = [ uppercases ];
        }
        if (!lowercasesToggle && !uppercasesToggle && digitsToggle && !symbolsToggle) {
            characters = [ digits ];
        }
        var j = Math.floor(Math.random() * characters.length);
        password += characters[j][Math.floor(Math.random() * characters[j].length)];
    }
    
    passwordOutput.value = password;
}