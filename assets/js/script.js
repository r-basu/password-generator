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

  let choicesObj = {
  upperCrit : false,
  lowerCrit : false, 
  numCrit : false,
  symbolCrit : false
  }

  while (choicesObj.upperCrit === false && choicesObj.lowerCrit === false && choicesObj.numCrit === false && choicesObj.symbolCrit === false) {
    window.alert("Please select atleast one character type to be included in the password!")
    choicesObj.upperCrit = confirm("Would you like uppercase (ABC) in the password? Ok for True, Cancel for False.")
    choicesObj.lowerCrit = confirm("Would you like lowercase (abc) in the password? Ok for True, Cancel for False.")
    choicesObj.numCrit = confirm("Would you like numbers (123) in the password? Ok for True, Cancel for False.")
    choicesObj.symbolCrit = confirm("Would you like special characters (\!@#) in the password?")
  }

  return [passLength, choicesObj.upperCrit, choicesObj.lowerCrit, choicesObj.numCrit, choicesObj.symbolCrit]
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
