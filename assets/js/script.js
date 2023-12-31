// Assignment code here
const letters = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = letters.toUpperCase();
const lowerCase = letters.toLowerCase();
const num = [0,1,2,3,4,5,6,7,8,9]
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

function generatePassword() {

  // Password length choice
  let passLength = 0;
  while (passLength < 8 || passLength > 128) {
    passLength = window.prompt("Please choose a number for password character length, at least 8 and no more than 128")
  }

  // Password character types choices
  let choicesObj = {
  upperCrit : false,
  lowerCrit : false, 
  numCrit : false,
  symbolCrit : false
  }

  while (choicesObj.upperCrit === false && choicesObj.lowerCrit === false && 
    choicesObj.numCrit === false && choicesObj.symbolCrit === false) {
    window.alert("Please select atleast one character type to be included in the password!")
    choicesObj.upperCrit = confirm("Would you like uppercase (ABC) in the password? Ok for True, Cancel for False.")
    choicesObj.lowerCrit = confirm("Would you like lowercase (abc) in the password? Ok for True, Cancel for False.")
    choicesObj.numCrit = confirm("Would you like numbers (123) in the password? Ok for True, Cancel for False.")
    choicesObj.symbolCrit = confirm("Would you like special characters (\!@#) in the password?")
  }

  // Validated critera and generating the array of fit criteria.
  let genPass = "";
  let password = "";
  if ((passLength >= 8 || passLength <= 128) && 
  (choicesObj.upperCrit === true || choicesObj.lowerCrit === true || 
  choicesObj.numCrit === true || choicesObj.symbolCrit === true)){

    //If criteria picked, string concat to generated password pool
    if (choicesObj.upperCrit === true) {
      genPass += upperCase
    }

    if (choicesObj.lowerCrit === true) {
      genPass += lowerCase
    }

    if (choicesObj.numCrit === true) {
      genPass += num
    }

    if (choicesObj.symbolCrit === true) {
      genPass += symbols
    }

    // Parse passLength string into int for for loop.
    // Random index generated from generated password pool length - within bounds
    // Random character pulled from random index of gen pass, and added to password until password length is met.
    for (let i = 0; i <= parseInt(passLength); i++) {
      const randomIndex = parseInt(Math.random() * genPass.length)
      const randomCharacter = genPass[randomIndex]

      password += randomCharacter
    }

  return password;
  }
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
