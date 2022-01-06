
const generateButton = document.getElementById("generateBtn");
const outputField = document.getElementById("genPasw");
const checkFieldReadable = document.getElementById("readable");
const numberOpt = document.getElementById("numSection");
const specialChar = document.getElementById("specSection");
const checkboxNumbers = document.getElementById("numbers");
const checkboxSpecials = document.getElementById("specialChar");
let txtIterator = 0;
let txtPsw = '';
generateButton.addEventListener("click", createPassw);
checkFieldReadable.addEventListener("change", blendInOutOptions = () => {
    if (checkFieldReadable.checked === true) {
        document.getElementById("specialChar").checked = false;
        document.getElementById("numbers").checked = false;
        numberOpt.hidden = true;
        specialChar.hidden = true;

    } else {
        numberOpt.hidden = false;
        specialChar.hidden = false;
    }
});

function createPassw() {
    const containsNumbers = document.getElementById("numbers").checked;
    const containsSpecChar = document.getElementById("specialChar").checked;
    const isReadable = document.getElementById("readable").checked;
    const pswLength = document.getElementById("pswLength").value;
    let psw = '';
    const bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const bigLetters2 = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
    const smalLetters = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    const vokals = ["a", "e", "i", "o", "u"];
    const spezials = ["@", "#", ".", "-", "_", "?", "!", "$", "&","~","|","%"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    // Readable Passwort
    if (isReadable === true) {
        if (pswLength >= 4) {
            psw += bigLetters2[Math.floor(Math.random() * bigLetters2.length)];
            let isVoc = false;
            for (let i = 0; i < pswLength - 1; i++) {
                if (isVoc === true) {
                    isVoc = false;
                    psw += smalLetters[Math.floor(Math.random() * smalLetters.length)];
                } else {
                    isVoc = true;
                    psw += vokals[Math.floor(Math.random() * vokals.length)];
                }
            }
        } else {
            alert("Password is too short")
        }
    } else {
        // Erster Buchstabe ist immer gross
        psw += bigLetters2[Math.floor(Math.random() * bigLetters2.length)];
        for (let i = 0; i < pswLength - 1; i++) {
            // Generiert eine Zufallszahl von 0 - 3
            let rnd = parseInt(Math.random() * 3);
            // Passwort soll Zahlen enthalten
            if (rnd === 0 && checkboxNumbers.checked === true) {
                psw += numbers[Math.floor(Math.random() * numbers.length)];
            } else if (rnd === 0 && checkboxNumbers.checked === false) {
                psw += smalLetters[Math.floor(Math.random() * smalLetters.length)];
            }

            // Passwort soll SpecialChars enthaöten
            if (rnd === 1 && checkboxSpecials.checked === true) {
                psw += spezials[Math.floor(Math.random() * spezials.length)];
            } else if (rnd === 1 && checkboxSpecials.checked === false) {
                psw += bigLetters2[Math.floor(Math.random() * bigLetters2.length)];
            }
            // Kleine Buchstaben
            if (rnd === 2) {
                psw += smalLetters[Math.floor(Math.random() * smalLetters.length)];
            }
        }
    }
// debugger
    outputField.value = '';
    txtIterator = 0;
    txtPsw = psw;
    typeAnimation();

}



function typeAnimation() {
    if (txtIterator < txtPsw.length) {
        outputField.value += txtPsw.charAt(txtIterator);
        txtIterator++;
        setTimeout(typeAnimation, 50);
    }
}