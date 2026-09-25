prompt = require("prompt-sync")();


console.log(`
╔══════════════════════════════════════════╗
║       GESTION DES ÉLECTIONS              ║
║             MENU PRINCIPAL               ║
╠══════════════════════════════════════════╣
║ 1 → Ajouter un nouveau candidat          ║
║ 2 → Ajouter plusieurs candidats          ║
║ 3 → Afficher les candidats               ║
║ 4 → Voter pour un candidat               ║
║ 5 → Modifier un candidat                 ║
║ 6 → Supprimer un candidat                ║
║ 7 → Rechercher un candidat par nom       ║
║ 8 → Afficher les statistiques            ║
║ 9 → Quitter                              ║
╚══════════════════════════════════════════╝
`);
let lesCandidats = []
function  ajouterCandidat() {


taille = Number(prompt("How many candidat we add : "))


while ( lesCandidats.length < taille ){
let candidat = {
    cin : prompt(" Enter your cin : "),
    nom : prompt(" Enter your First name : "),
    prenom : prompt(" Enter your Ladt name : "),
    age : Number(prompt(" Enter your age")),
    partiPoliltique : prompt(" Enter your partiPolitique :"),
    electeurs : []
    }
// Ajout cod bAch 
     lesCandidats.push(candidat)
    

}
   

 console.log(lesCandidats)
}

ajouterCandidat();
                
let voter = prompt(" Enter your CIN : ")
let choice = prompt(" Enter the name of the Political party you wish to vote for : ")
for (i=0 ; i < lesCandidats.length ; i++){
if ( choice === lesCandidats[i].partiPoliltique ){
    lesCandidats[i].electeurs.push(voter)
    

    console.log(lesCandidats[i].electeurs.length);
}
}






