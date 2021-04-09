
let bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let bigLetters2 = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
let smalLetters = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
let vokals = ["a","e","i","o","u"];
let spezials = ["@","#",".","-","_","?","!","$","&","1","2","3","4","5","6","7","8","9"];

var psw = "";
let arrayMaxLength = bigLetters.length;
let arrayMaxBigL = bigLetters2.length;
let arrayMaxVokals = vokals.length;
let arrayMaxSpezials = spezials.length;
let arrayMaxSmall = smalLetters.length;

// Button for Psw
document.getElementById('btnPassw').addEventListener('click', function(){    
    let pswLenght = parseInt(document.getElementById('txt_Psw_Length').value);
    if (pswLenght > 60){
        // More than 100 chars
        alert("Wooow, that´s tooo much :). Please try something under 61");
        document.getElementById('txt_Psw_Length').value = 60;
    }else if (pswLenght < 5){
        alert("Ok, this Password length isn´t really save :) Please try a character length bigger than 4");
        document.getElementById('txt_Psw_Length').value = 5;
    }else{
            // Actually create the Password
            var isVocal = false;
            let randomNumb = parseInt(Math.random() * arrayMaxBigL);
            psw = psw + bigLetters2[randomNumb];
            for( i = 0 ; i < pswLenght - 4; i++){
                if(isVocal == true) {
                    let randomNumb = parseInt(Math.random() * arrayMaxSmall);
                    psw = psw + smalLetters[randomNumb];
                    isVocal = false;
                }else{
                    let randomNumb = parseInt(Math.random() * arrayMaxVokals);
                    psw = psw + vokals[randomNumb];
                    isVocal = true;
                }
            }
            for(i = 0; i < 3; i++){
                let randomNumb = parseInt(Math.random() * arrayMaxSpezials);
                psw = psw + spezials[randomNumb];
            }
        // Display Passw
        document.getElementById('txtPassword').value = psw;
        // Add to List    
        const newElem = document.createElement('li');
        newElem.innerHTML = psw;
        document.getElementById('pswList').appendChild(newElem);  
        // Reset
        psw = "";
    }
})

