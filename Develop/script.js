// Assignment code here

// console.log(Array.from({length: 121}, (v, k) => k+8))

// variables for prompts
var lengthChoice = Array.from({length: 121}, (v, k) => k+8);
var caseChoice = ["lower","upper","both"];
var specialChoice = ["number","special","both"];

// variables for password array
var letters = ("abcdefghijklmnopqrstuvwxyz");
var randomLetter = letters[Math.floor(Math.random()*letters.length)];

var special = ("!@#$%&*");
var randomSpecial = special[Math.floor(Math.random()*special.length)];

var num = ("0123456789");
var randomNum = num[Math.floor(Math.random()*num.length)];

// generate password function. runs after generate button is pushed.
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

// pseudo-code for creating password string... WIP
// iterate until length is reached.
// for true randomization, password array should be scrambled as the last step of the function.
// var password = String {
//   length: passwordLength,
//   case: function(){
//     if (passwordCase==="lower"){
//       password[0,1,2,3] = randomLetter; //i++
//     } else if (passwordCase==="upper"){
//       password[0,1,2,3] = randomLetter.toUpperCase;
//     }
//     else {
//       password[0,1] = randomLetter;
//       password[2,3] = randomLetter.toUpperCase;
//     }
//   },

//   special: function(){
//     if(passwordSpecial==="special"){
//       password[4,5,6,7] = randomSpecial;
//     } else if (passwordSpecial==="number"){
//       password[4,5,6,7] = randomNum;
//     } else {
//       password[4,5] = randomSpecial;
//       password[6,7] = randomNum;
//     }
//   }
// }
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
