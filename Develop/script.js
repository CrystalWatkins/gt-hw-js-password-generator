// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthOfPassword = prompt("Please enter desired password's length.")
  
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please enter a Number between 8 and 128")
    return writePassword();
  } else if (isNaN(lengthOfPassword)) {
    alert("Please enter a valid number.");
    return writePassword();
  }
  console.log(lengthOfPassword);

  var upperCaseLetters = confirm("Do you want Upper Case Letters- Click OK or Cancel");
  var lowerCaseLetters = confirm("Do you want Lower Case Letters- Click OK or Cancel");
  var numbers = confirm("Do you want Numbers- Click OK or Cancel");
  var specialCharacters = confirm("Do you want Special Characters- Click OK or Cancel");

  var upperCaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var numbersArray = [0,1,2,3,4,5,6,7,8,9];
  var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "*", "_", "+", "~", "|", "?","-", "=", "?"];

  var userOption = [];

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

  var password= "";
  for (var i=0; i  < lengthOfPassword; i++) {
    var ranNum = Math.floor(Math.random() * userOption.length);
    console.log(ranNum);
    password += userOption[ranNum];
  }
  
console.log(password);

// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);