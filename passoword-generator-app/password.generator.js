const totalCharsEl = document.querySelector(".chars");
const totalCharsInputEl = document.querySelector(".totalchars");
const upperCaseEl = document.querySelector(".uppercase");
const upperCaseInputEl = document.querySelector(".upper");
const lowerCaseEl = document.querySelector(".lowercase");
const lowerCaseInputEl = document.querySelector(".lower");
const numbersEl = document.querySelector(".numbers");
const numberInputEl = document.querySelector(".num");
const symbolEl = document.querySelector(".symbols");
const symbolInputEl = document.querySelector(".sym");
const button = document.querySelector(".button");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/\\";

totalCharsInputEl.value = 8;

totalCharsInputEl.addEventListener("input", ()=>{
    if(totalCharsInputEl.value >= 8){
        totalCharsEl.style.color = "#41b14f"
    }else{
        totalCharsEl.style.color = "red"
    }
})

upperCaseInputEl.addEventListener("input", ()=>{
    console.log("checked")
    if(upperCaseInputEl.checked){
        console.log("inside")
        upperCaseEl.style.color="#41b14f";
        console.log(upperCaseEl)
    }else{
        upperCaseEl.style.color="red"
    }
})

lowerCaseInputEl.addEventListener("input", ()=>{
    if(lowerCaseInputEl.checked){
        lowerCaseEl.style.color="#41b14f"
    }else{
        lowerCaseEl.style.color="red"
    }
})

numberInputEl.addEventListener("input", ()=>{
    if(numberInputEl.checked){
        numbersEl.style.color="#41b14f"
    }else{
        numbersEl.style.color="red"
    }
})

symbolInputEl.addEventListener("input", ()=>{
    if(symbolInputEl.checked){
        symbolEl.style.color="#41b14f"
    }else{
        symbolEl.style.color="red"
    }
})

button.addEventListener("click", (e)=>{
    if(upperCaseInputEl.checked || lowerCaseInputEl.checked || numberInputEl.checked || symbolInputEl.checked){
        generatePassword();
    }else{
        alert("include atleast one type")
    }
})

function getUpperCase(){
    return upperCase[Math.floor(Math.random() * upperCase.length)]
}

function getLowerCase(){
    return lowerCase[Math.floor(Math.random() * lowerCase.length)]
}


function getNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(){
    let size = totalCharsInputEl.value;
    let pwd = [];
    while(size>0){
        if(upperCaseInputEl.checked && size>0){
            pwd.push(getUpperCase());
            size--;
        }
        if(lowerCaseInputEl.checked && size>0){
            pwd.push(getLowerCase());
            size--;
        }
        if(numberInputEl.checked && size>0){
            pwd.push(getNumbers());
            size--;
        }
        if(symbolInputEl.checked && size>0){
            pwd.push(getSymbols());
            size--;
        }
    }
    let password = pwd.join("");
    copyToClipboard(password);
    console.log(password);
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

