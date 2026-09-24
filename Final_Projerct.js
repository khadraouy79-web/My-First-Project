prompt = require("prompt-sync")();

let candidat = {
    cin : prompt(" Enter your cin : "),
    nom : prompt(" Enter your First name : "),
    prenom : prompt(" Enter your Ladt name : "),
    age : Number(prompt(" Enter your age")),
    partiPoliltique : prompt(" Enter your partiPolitique :"),
    electeurs : []

}

for (i =0 ; i < candidat.electeurs[3]; i++ ){
    let lesCandidats = prompt(" lES Condidats : ")
    candidat.electeurs.push(lesCandidats)
}

console.log(candidat.electeurs);


