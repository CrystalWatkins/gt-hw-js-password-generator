// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
alert("Please click Generate Password to Begin")
function writePassword() {
  var lengthOfPassword = prompt("Please enter desired password's length.")
  //The above line sets up how long the password will be
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please enter a Number between 8 and 128")
    return writePassword();
  } else if (isNaN(lengthOfPassword)) {
    alert("Please enter a valid number.");
    return writePassword();
  }
  console.log(lengthOfPassword);
  //the return code will allow the page to continue to go back until
  //it has received a valid input (ie number). The else if statement insures that
  //the input received is a number and the first if statement makes sure it is 
  // between 8 and 128 characters

  var upperCaseLetters = confirm("Do you want Upper Case Letters- Click OK or Cancel");
  var lowerCaseLetters = confirm("Do you want Lower Case Letters- Click OK or Cancel");
  var numbers = confirm("Do you want Numbers- Click OK or Cancel");
  var specialCharacters = confirm("Do you want Special Characters- Click OK or Cancel");
  //This asks the user what letters, numbers, or special characters that they want
  // in their password
  
  var upperCaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var numbersArray = [0,1,2,3,4,5,6,7,8,9];
  var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "*", "_", "+", "~", "|", "?","-", "=", "?"];
  var userOption = [];
  //this is declaring the string of things that can be used in the password

  if (upperCaseLetters === true) {
    userOption = userOption.concat(upperCaseLettersArray);
  }
  if (lowerCaseLetters === true) {
    userOption = userOption.concat(lowerCaseLettersArray);
  }
  if (numbers ===true) {
    userOption = userOption.concat(numbersArray);
  }
  if (specialCharacters ===true) {
    userOption = userOption.concat(specialCharactersArray);
  }
  else if (upperCaseLetters === false && lowerCaseLetters === false && numbers === false && specialCharacters === false) {
    alert("Please select at least one character type");
    return writePassword();
  }
  console.log(userOption);
  //these if statements are used to pull from the arrays declared above if they are selected. In the console.log
  //you can see what variables there are to choose from for the password generator

  var password= "";
  for (var i=0; i  < lengthOfPassword; i++) {
    var ranNum = Math.floor(Math.random() * userOption.length);
    console.log(ranNum);
    password += userOption[ranNum];
  }

console.log(password);
// The loop ran above states that you are going to randomly generate one item from the arrays chosen
// until the length of the password is met. It is also console.log(ed) at the bottom of the page

// var password = generatePassword(); 
// For the password to generate in the box, I commented out the above line of code. It will still
// show up in the console.log either way. Not sure why this happened
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);