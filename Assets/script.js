// A minumum of 2 character types will be included in password. This will create a more secure password.

// Variables used in prompts.
var lengthChoice = Array.from({length: 121}, (v, k) => k+8);
var caseChoice = ['lower','upper','both'];
var specialChoice = ['number','special','both'];

// Generate password function. Runs after generate button is clicked.
// After this function completes, return value is used in writePassword function.
var generatePassword = function() {

  // Three prompts and alerts.
  function prompt1() {
    let passwordLength = Number(prompt('Choose a character length for your password. Input a whole number between 8-128:'));
    if (lengthChoice.includes(passwordLength)===false) {
      alert('Your selection is invalid. Please try again.');
      return prompt1();
    } else {
      return passwordLength;
    }
  }
  passwordLength = prompt1();

  function prompt2() {
    let passwordCase = prompt('Choose which letter case types to include in your password. Input upper lower or both:');
    if (caseChoice.includes(passwordCase)===false) {
      alert('Your selection is invalid. Please try again.');
      return prompt2();
    } else {
      return passwordCase;
    }
  }
  passwordCase = prompt2();

  function prompt3() {
    let passwordSpecial = prompt('Choose to include numbers and/or special characters in your password. Input number special or both:');
    if (specialChoice.includes(passwordSpecial)===false) {
      alert('Your selection is invalid. Please try again.');
      return prompt3();
    } else {
      return passwordSpecial;
    }
  }
  passwordSpecial = prompt3();

  // Variables and functions used in for loop.
  var letters = ('abcdefghijklmnopqrstuvwxyz');
  function getRandomLetter () {
    return letters[Math.floor(Math.random()*letters.length)];
  }

  var special = ('\'\\ !#$%&"()*+,-./:;<=>?@[]^_`{|}~'); //slashes at position 0 and 2 allow ' and \ to be included in string
  function getRandomSpecial () { 
    return special[Math.floor(Math.random()*special.length)];
  }

  var num = ('0123456789');
  function getRandomNum () {
    return num[Math.floor(Math.random()*num.length)];
  } 

  // Define variable as empty array - to be filled via for loop.
  var userPassword = [];
  
  // Variables for first 4 if's in for loop.
  var needsNumber = passwordSpecial === 'number' || passwordSpecial === 'both';
  var needsSpecial = passwordSpecial === 'special' || passwordSpecial === 'both';
  var needsUpper = passwordCase === 'upper' || passwordCase === 'both';
  var needsLower = passwordCase === 'lower' || passwordCase === 'both';

  // Combo variables/functions for final else in for loop.
  var comboA = letters + letters.toUpperCase() + special + num;
  function getRandomComboA () {
    return comboA[Math.floor(Math.random()*comboA.length)];
  }
  var comboB = letters + special + num;
  function getRandomComboB () {
    return comboB[Math.floor(Math.random()*comboB.length)];
  }
  var comboC = letters + special;
  function getRandomComboC () {
    return comboC[Math.floor(Math.random()*comboC.length)];
  }
  var comboD = letters + num;
  function getRandomComboD () {
    return comboD[Math.floor(Math.random()*comboD.length)];
  }
  var comboE = letters.toUpperCase() + special + num;
  function getRandomComboE () {
    return comboE[Math.floor(Math.random()*comboE.length)];
  }
  var comboF = letters.toUpperCase() + special;
  function getRandomComboF () {
    return comboF[Math.floor(Math.random()*comboF.length)];
  }
  var comboG = letters.toUpperCase() + num;
  function getRandomComboG () {
    return comboG[Math.floor(Math.random()*comboG.length)];
  }

  // First 4 if's ensure addition of at least one of each selected character.
  // Last else fills up the rest of password length with random characters from unique array based on prompt selection combo.
  for (let i = 0; i < passwordLength; i++) {

    if (needsNumber) {
      char = getRandomNum();
      needsNumber = false;
    } else if (needsSpecial) {
      char = getRandomSpecial();
      needsSpecial = false;
    } else if (needsUpper) {
      char = getRandomLetter().toUpperCase();
      needsUpper = false;
    } else if (needsLower) {
      char = getRandomLetter();
      needsLower = false;
    } else {
      if(passwordCase==='both' && passwordSpecial==='both'){
        char = getRandomComboA();
      }
      else if(passwordCase==='lower' && passwordSpecial==='both'){
        char = getRandomComboB();
      }
      else if(passwordCase==='lower' && passwordSpecial==='special'){
        char = getRandomComboC();
      }
      else if(passwordCase==='lower' && passwordSpecial==='number'){
        char = getRandomComboD();
      }
      else if(passwordCase==='upper' && passwordSpecial==='both'){
        char = getRandomComboE();
      } 
      else if(passwordCase==='upper' && passwordSpecial==='special'){
        char = getRandomComboF();
      }
      else {
        char = getRandomComboG();
      }
    }

    userPassword.push(char); // Push char to the end of the array variable.
  }

  userPassword = userPassword.join(''); // Join chars in a string with no separator.

  var shufflePassword = userPassword.split('').sort(function(){return 0.5-Math.random()}).join(''); // Shuffle string.

  return shufflePassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); //runs generate password function.
  var passwordText = document.querySelector('#password'); //defines where password will go by HTML ID.

  passwordText.value = password; //sets defined area to display password that is generated.

}

// Add "click" event listener to generate button. This invokes the function to generate password.
generateBtn.addEventListener('click', writePassword); 
