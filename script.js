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
function randomChoice(list) {
  return list[randomInteger(list.length)]
}

// Main function -- Generates the actual password
function generatePassword() {

    // Array (empty) -- Stores the character types that the user wants to include
    var passwordElementStorage = []

    // String (empty) -- Stores the finalized password to be display once it is generated at the end of the function
    var finalPassword = ""

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

// The Users response to the question is stored in the variable 'userAnswer'
  var userAnswer = window.prompt("How many characters would you like in your generated password? (8-128)")

// Changes the data type of the user's answer from 'string' to 'number' to use later
  var userLengthChoice = parseInt(userAnswer)

//   Makes sure that the requested length is in the valid range, and if not, throws error message to client
  if (userLengthChoice < 8 || userLengthChoice > 128) {
    window.alert("Requested password length must be between 8 and 128.")
    window.location.reload();
  }

// If the user wants to include a specific character type, push each respective character type array
// to be stored in the passwordElementStorage variable
if (numberConfirm) {
    passwordElementStorage.push(numberArray)
  }

  if (upperConfirm) {
    passwordElementStorage.push(upperArray)
  }

  if (lowerConfirm) {
    passwordElementStorage.push(lowerArray)
  }

  if (symbolConfirm) {
    passwordElementStorage.push(symbolArray)
  }

//
if (passwordElementStorage.length === 0) {
    window.alert("Please select at least one character type.")
    return
  }

// 'For Loop' that stores random characters in the 'final password' variable until the # of characters
// equals the length of 'userLengthChoice'  
  for (var i = 0; i < userLengthChoice; i++) {
    var randomElementList = randomChoice(passwordElementStorage)
    var randomCharacter = randomChoice(randomElementList)
    finalPassword += randomCharacter
  }

    // Returns the finalized, generated password which will be passed on to 'writePassword()'
    return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);