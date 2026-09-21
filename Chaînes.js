const prompt = require("prompt-sync")()

let Fname = prompt("whats your first name : ");
let Lname = prompt("whats your last name : ");
console.log( Fname + " " + Lname);
let letters = 0
for (let c of Fname) {
    letters++;
console.log(c)
}
console.log(`La longueur de "${Fname}" est de ${letters} caractères.`);

