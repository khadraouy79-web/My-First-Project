const prompt = require("prompt-sync")();
const Rnum = prompt("enter a number");
for (let i = 1 ; i <= 10 ; i++){
    let resultat = Rnum * i
    console.log(`${Rnum} * ${i} = ${resultat}`);
}
