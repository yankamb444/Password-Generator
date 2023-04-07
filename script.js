// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!","#","$","%","^","&","*","@"]
var upperCase = ["A", "S", "D", "F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P","Z","X","C","V","B","N","M"]
var lowerCase = ["a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m"]

var trial = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // Let boxone,two,three,four serve the function of asking the user if the they wish to include uppercase, numbers, special characters, or lowercase letters in their password. 
  var globalPassword =""

  let boxOne = confirm("Would you like to include uppercase letters in your password?")
  let boxTwo = confirm("Would you like to include numbers in your password?")
  let boxThree = confirm("Would you like to include special characters in your password?")
  let boxFour = confirm("Would you like to include lower case letters in your password?")
  let boxFive = prompt("Please select a password length between 8 and 128.")

  // The first "if": Should the user refuse to accept uppercase letters, numbers, special characters, or lower case letters - an alert will pop up letting the user know they must accept at least one of the categories

  if (boxOne===false && boxTwo===false && boxThree===false && boxFour===false) {
     alert("Please select at least one of the following when prompted: Uppercase letters, numbers, special characters, or lower case letters.");
     return 
  }

    //  This second "if" serves the function of alerting the user to input a value between 8 and 128 should the user attempt to input vales under 8 or greater than 128
  if (boxFive<8 || boxFive>128) {
    alert("Please enter a number greater than 8 but less than 128.")
    return
  }

// if (boxOne,Two,Three,Four) follow the same pattern: If the user chooses to accept upper case letters, numbers, special characters, and lower case characters - the trial.push function will push the choices of each array into the empty array declared var trial [] at the top
  if (boxOne) {
    trial = trial.concat (upperCase)
    
  }

  if (boxTwo) {
    trial = trial.concat (numbers)
  }

  if (boxThree) {
   trial = trial.concat (specialCharacters)
  }

  if (boxFour){
    trial = trial.concat (lowerCase)
  }
  for (var i=0; i <boxFive; i++) {
    var randomNumber = Math.floor(Math.random () * trial.length)
    var randomCharacter = trial[randomNumber]
    globalPassword += randomCharacter 
    console.log (randomNumber)
    console.log (trial)
 }
   return globalPassword 
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

