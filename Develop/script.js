// Assignment code here

// console.log(Array.from({length: 120}, (v, k) => k+8))

var lengthChoice = Array.from({length: 121}, (v, k) => k+8);
var caseChoice = ["lower","upper","both"];
var specialChoice = ["number","special","both"];

var generatePassword = function() {

let passwordLength = Number(prompt("Choose a character length for your password. Input a whole number between 8-128:"));

if (lengthChoice.includes(passwordLength)===false) 
  {
  alert("Your selection is invalid. Please try again.")
}; 

let passwordCase = prompt("Choose which letter case types to include in your password. Input upper lower or both:");

if (caseChoice.includes(passwordCase)===false) 
  {
  alert("Your selection is invalid. Please try again.")
}; 

let passwordSpecial = prompt("Choose to include numbers and/or special characters in your password. Input number special or both:")

if (specialChoice.includes(passwordSpecial)===false)
 {
  alert("Your selection is invalid. Please try again.")
} 

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
