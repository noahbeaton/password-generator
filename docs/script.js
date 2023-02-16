// Assignment Code
var generateBtn = document.querySelector("#generate");
const uppercase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers =["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]
const specialcharacter =[" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", '"', ']']
var mergedresult = []
lengthprompt=0;
var selectedcharacters = []
var characterindex = [
  {uppercase, title:"upper case"}, 
  {lowercase, title:"lower case"}, 
  {numbers, title:"number"},
  {specialcharacter, title:"special"}]
i=0;
var checker=0;
// Write password to the #password input
function writePassword() {
while(i<characterindex.length){
  let characterprompt = prompt("Would you like "+ characterindex[i].title +" characters in your password? (yes/no)");
  if (characterprompt.match("yes")){
    if (i==0){
      selectedcharacters= selectedcharacters.concat(uppercase);
      checker++;
    }
    else if (i==1){
      selectedcharacters= selectedcharacters.concat(lowercase);
      checker++;
    }
    else if (i==2){
      selectedcharacters= selectedcharacters.concat(numbers);
      checker++;
    }
    else if (i==3){
      selectedcharacters= selectedcharacters.concat(specialcharacter);
      checker++;
    }
    i++;
  }
  if (characterprompt.match("no")){
    i++;
  }
  if(checker==0 && i==4){
    i=0;
  }
}
i=0
while(i<1){
  lengthprompt = parseInt(prompt("How many characters long would you like the password to be? (8-128)"))
  if(lengthprompt <= 128 && lengthprompt >= 8){
    i++;
  }
}
i=0;
var generatedcharacter = [];
function generatePassword(){
  while(i<lengthprompt){
    //get random character from selected prompts
    let promptindex = Math.floor(Math.random()*selectedcharacters.length);
    console.log(promptindex);
    generatedcharacter.push(selectedcharacters[promptindex]);
    console.log(generatedcharacter);
    i++;
  }
  return generatedcharacter.join("");
}
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
console.log(password);
console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
