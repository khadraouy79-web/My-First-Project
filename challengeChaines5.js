const prompt = require ("prompt-sync")()
let Yes = prompt ("Do you whant to play a Game : ")
if (Yes == "yes"){
const word = prompt ("Type a Word and i will reversed it")

const reversed = word.split('').reverse().join('');
console.log("The reversed word you Type is : " +reversed); 
}
else if (Yes == "no"){
    console.log("Tank you for your time")
}
else {
    console.log(" I dont understend please Type (yes) or (no)")
}
