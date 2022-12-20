// variables for prompts
var lengthChoice = Array.from({length: 121}, (v, k) => k+8);
var caseChoice = ["lower","upper","both"];
var specialChoice = ["number","special","both"];

// generate password function. runs after generate button is clicked.
// after this function completes, return value is used in writePassword function.
var generatePassword = function() {

  // Three prompts and alerts.
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

  // variables and functions for password array
  var letters = ("abcdefghijklmnopqrstuvwxyz");
  function getRandomLetter () {
    return letters[Math.floor(Math.random()*letters.length)];
  }

  var special = ("!@#$%&*");
  function getRandomSpecial () { 
    return special[Math.floor(Math.random()*special.length)];
  }

  var num = ("0123456789");
  function getRandomNum () {
    return num[Math.floor(Math.random()*num.length)];
  } 

  // define variable as empty array - to be filled via loop.
  var userPassword = []
  
  // variables for first 4 if's in loop
  var needsNumber = passwordSpecial === 'number' || passwordSpecial === 'both';
  var needsSpecial = passwordSpecial === 'special' || passwordSpecial === 'both';
  var needsUpper = passwordCase === 'upper' || passwordCase === 'both';
  var needsLower = passwordCase === 'lower' || passwordCase === 'both';

  // TO DO: combo variables/functions for final else in loop will go here.

  // first 4 if's ensure that we have at least one of each required character.
  // last else fills up the rest of the length with random characters from unique array based on prompt combo.
  for (let i = 0; i<= passwordLength; i++) {

    let char
    if (needsNumber) {
      char = getRandomNum()
      needsNumber = false
    } else if (needsSpecial) {
      char = getRandomSpecial()
      needsSpecial = false
    } else if (needsUpper) {
      char = getRandomLetter().toUpperCase()
      needsUpper = false
    } else if (needsLower) {
      char = getRandomLetter()
      needsLower = false
    } else {
      // TO DO: create unique combo arrays.
      // if(comboA){}
      // else if(comboB){}
      // else if(comboC){}
      // else{}
    }

    userPassword.push(char); //pushes chars to the end of the array variable.
  }

  // TO DO: scramble array here for extra randomization
  userPassword = userPassword.join(); // TO DO: remove comma separator.

  return userPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); //runs generate password function.
  var passwordText = document.querySelector("#password"); //defines where password will go by HTML ID.

  passwordText.value = password; //sets defined area to display password that is generated.

}

// Add "click" event listener to generate button. This invokes the function to generate password.
generateBtn.addEventListener("click", writePassword); 
