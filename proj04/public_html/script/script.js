/**
 * Dongyoung Yang
 * This is a script file of Project 4.
 * It has 4 functions and some variables to encrypt the original message.
 * It uses the Caesar Cipher and the Square Cipher to encrypt.
 */

const caesar = document.getElementById('caesarOutput');
const square = document.getElementById('squareOutput');
const original = document.getElementById('original');
const slider = document.getElementById('slider');
const table = document.getElementsByTagName('td');

// It will call two encryption functions when input is changed.
original.addEventListener("input", () => {
    caesarEncryption();
    squareEncryption();
})

slider.addEventListener("input", ()=>{
    changeLabel();
    caesarEncryption();
})

/**
 * changeLabel() updates the label based on the slider's current value.
 */
function changeLabel() {
    document.getElementById('numSlider').innerText = slider.value;
}

/**
 * caesarEncryption() encrypts the original message using the Caesar Cipher.
 * First, it converts the original message to uppercase if it is not already.
 * Then, it encrypts the message based on the slider's current value.
 * It doesn't encrypt numbers and special characters. It only encrypts alphabetical characters.
 * After encryption, it updates the innerText of the caesar(caesarOutput) element to show the result.
 */
function caesarEncryption(){
    let encrypted = '';
    for(let i = 0; i < original.value.length; i++){
        if(original.value.toUpperCase().charCodeAt(i) >= 91 || original.value.toUpperCase().charCodeAt(i) <= 64){
            encrypted += original.value[i];
        } else if(original.value.toUpperCase().charCodeAt(i) + Number(slider.value) >= 91){
            encrypted += String.fromCharCode(original.value.toUpperCase().charCodeAt(i) + Number(slider.value) - 26);
        } else{
            encrypted += String.fromCharCode(original.value.toUpperCase().charCodeAt(i) + Number(slider.value));
        }
    }
    caesar.innerText = encrypted;
}

/**
 * updateSquare() updates the square table randomly.
 * It creates a new array, shuffles it, and pushes the current innerText from the table cells.
 * The array is randomly shuffled using the sort and Math.random functions.
 * After shuffling, it updates the innerText of each table cell with the shuffled data.
 * Lastly, it calls the squareEncryption() function.
 */
function updateSquare(){
    let shuffle = [];
    for(const data of table){
        shuffle.push(data.innerText);
    }
    shuffle.sort(() => Math.random() - 0.5);
    shuffle.forEach((newData, index) => {
        table[index].innerText = newData;
    });
    squareEncryption();
}


/**
 * squareEncryption() encrypts the original message using the Square Cipher.
 * First, it converts the original message to uppercase if it is not already.
 * Then, it encrypts the message based on the square table.
 * It doesn't encrypt numbers, and special characters. It only encrypts alphabetical characters except 'Z'.
 * After encryption, it updates the innerText of the square(squareOutput) element to show the result.
 */
function squareEncryption(){
    let encrypted = '';
    for(let i = 0; i < original.value.length; i++){
        if(original.value.toUpperCase().charCodeAt(i) >= 90 || original.value.toUpperCase().charCodeAt(i) <= 64){
            encrypted += original.value[i].toUpperCase();
        } else{
            encrypted += table[original.value.toUpperCase().charCodeAt(i) - 65].innerText;
        }
    }
    square.innerText = encrypted;
}
