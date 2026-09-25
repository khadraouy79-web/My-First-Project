prompt = require("prompt-sync")();
let lesCandidats = []
taille = Number(prompt("How many candidat we have : "))

let candidat = {
    cin : prompt(" Enter your cin : "),
    nom : prompt(" Enter your First name : "),
    prenom : prompt(" Enter your Ladt name : "),
    age : Number(prompt(" Enter your age")),
    partiPoliltique : prompt(" Enter your partiPolitique :"),
    electeurs : []

}

while ( lesCandidats < taille ){
    lesCandidats += 
    console.log(candidat);

}
   




