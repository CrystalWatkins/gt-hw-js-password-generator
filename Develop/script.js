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

  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "*", "_", "+", "~", "|", "?","-", "=", "?"];

  var userOption = [];

  if (upperCaseLetters) {
    userOption = userOption.concat(upperCaseLetters);
  }

  if (lowerCaseLetters) {
    userOption = userOption.concat(lowerCaseLetters);
  }

  if (numbers) {
    userOption = userOption.concat(numbers);
  }

  if (specialCharacters) {
    userOption = userOption.concat(specialCharacters);
  }

  if (userOption.length === 0) {
    alert("please select at least one character type");
    return lengthOfPassword();
  }

  console.log(userOption);

  var password = "";
  
  for (var i = 0; i < lengthOfPassword; i++) {
    var ranNum = Math.floor(Math.random() * userOption.length);
    console.log(ranNum);

    password += userOption[ranNum];
    console.log(password);

    console.log(userOption[ranNum]);
  }

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);