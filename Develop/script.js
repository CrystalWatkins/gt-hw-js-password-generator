// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthOfPassword = prompt("Please enter desired password's length.")

if (lengthOfPassword < 8 || lengthOfPassword > 128) {
alert("Please enter a Number between 8 and 128")
} else if (isNaN(lengthOfPassword)) {
  alert("Please enter a valid number.");
  return;
}
console.log(lengthOfPassword);


var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);