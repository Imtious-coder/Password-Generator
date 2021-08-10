// Getting the ID's from HTML
const CharacterAmountRange = document.getElementById("CharacterAmountRange");
const CharacterAmountNumber = document.getElementById("CharacterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const PasswordDisplay = document.getElementById("PasswordDisplay");
const form = document.getElementById("passwordGeneratorForm");

// Setting Password Types...
const UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODE = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODE = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
);

// Event Listeners...
CharacterAmountRange.addEventListener("input", synsCharacterAmount);
CharacterAmountNumber.addEventListener("input", synsCharacterAmount);
form.addEventListener("submit", e => {
    e.preventDefault();
    const characterAmount = CharacterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmount, includeNumbers, includeUppercase, includeSymbols)
    PasswordDisplay.innerText = password;
})


// Main function (Password Generator)
function generatePassword(characterAmount, includeNumbers, includeUppercase, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODE;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODE);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODE);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODE);

    // Loop to get the random password
    let passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("")
}

// Array
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array;
}

// Setting values..
function synsCharacterAmount(e) {
    const value = e.target.value;
    CharacterAmountNumber.value = value
    CharacterAmountRange.value = value
}