// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
    var lengthOfPassword = prompt("Enter Your Desired Length of Password.")
  if(lengthOfPassword < 8 || lengthOfPassword > 128 {
    alert("Enter a Number That is Between 8 and 128.");
    return;
  } if ("number" != typeof(lengthOfPassword)) {
    alert("Please enter a valid number.");
  }
  




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);