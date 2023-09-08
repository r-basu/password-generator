// Assignment code here
const letters = 'abcdefghijklmnopqrstuvwxyz'
const num = '0123456789'
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

let lettersArr = letters.split("");
let numArr = num.split("");
let symbolsArr = symbols.split("");

function generatePassword() {
  let passLength = window.prompt("Please choose a length of at least 8 characters and no more than 128 characters")
  while (passLength < 8 || passLength > 128) {
    passLength = window.prompt("Please choose a length of at least 8 characters and no more than 128 characters")
  }
  return passLength
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
