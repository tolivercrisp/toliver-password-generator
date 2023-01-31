// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function -- Produces a random number
function randomInteger(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var random = Math.random()
  return Math.floor(min*(1-random) + random*max)
}

// Function -- random item from a generated list
function ranItem(list) {
  return list[randomInteger(list.length)]
}

// Main function -- Generates the actual password
function generatePassword() {

  // Arrays for character types
  const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "-"]


  // Window confirmation message that retrieves a boolean value from
  var numberConfirm = window.confirm("Would you like to include NUMBERS in your password?")
  var upperConfirm = window.confirm("Would you like to include UPPERCASE LETTERS in your password?")
  var lowerConfirm = window.confirm("Would you like to include LOWERCASE LETTERS in your password?")
  var symbolConfirm = window.confirm("Would you like to include SYMBOLS in your password?")



}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
