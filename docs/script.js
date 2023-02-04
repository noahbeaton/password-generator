// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]
var specialcharacter =[" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", '"', ']']
console.log(specialcharacter);

var selectedcharacters = []
console.log(selectedcharacters);
var characterindex = [
  {uppercase, title: "upper case"}, 
  {lowercase, title: "lower case"}, 
  {number, title: "number"}, 
  {specialcharacter, title: "special character"}]
i=0;
// Write password to the #password input
function writePassword() {
while(i<characterindex.length){
  console.log(selectedcharacters);
  let characterprompt = prompt("Would you like "+ characterindex[i].title +" letters in your password? (yes/no)");
  if (characterprompt.match("yes")){
    selectedcharacters.push(characterindex[i]);
    console.log(selectedcharacters);
    i++;
  }
  if (characterprompt.match("no")){
    i++;
  }

}


  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
