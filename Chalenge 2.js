const prompt = require("prompt-sync")()
let letters = prompt("Enter a word: ");
if (letters == "a" || letters == "e" || letters ==  "i" || letters == "o" ||letters ==  "u" ||letters == "y") {
    console.log(`la letter  ${letters}  est une voyelle.`)
}else {
    console.log(`la lettre ${letters}  est une consonne.`)
}

