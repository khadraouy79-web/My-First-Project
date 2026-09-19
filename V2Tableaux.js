const prompt = require("prompt-sync")()
let taille = parseInt(prompt ("how may Object on Tabel?" ))
let tableau = []
for (i = 0 ; i < taille ; i++){
    let resultat = prompt (`enter a Object ${i + 1}:`);
    tableau.push(resultat);
}
    console.log("Her is your Tabel");
    console.log(tableau);





