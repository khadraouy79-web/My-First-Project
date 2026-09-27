prompt = require("prompt-sync")();

let lesCandidats = [

  {cin: "BB234567",nom: "Benali",prenom: "Sara",partiPolitique: "independent",age: 42, electeurs: ["EE567890","GG789012","II901234",]},
  {cin: "DD456789",nom: "Idrissi",prenom: "Nadia",partiPolitique: "justice",age: 29,electeurs: ["HD456789","FF678901","HH890123","HA12234"]},
  {cin: "AA123456", nom: "Alami", prenom: "Youssef", partiPolitique: "lampe", age: 35, electeurs:["HA123456","HB234567"]},
  {cin: "CC564381", nom:"Fassi", prenom:"mehdi",partiPolitique:"fleure", age : 30 , electeurs:["YY7789"]}

]

let choix;
do {
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

    choix = prompt('Votre choix : ');

        switch (choix) {
            case '1':
                ajouterCandidat();
                break;
            case '2':
                ajouterPlusieursCandidats();
                break;
            case '3':
                afficherListeCandidats();
                break;
            case '4':
                voterPourCandidat();
                break;
            case '5':
                modifierCandidat();
                break;
            case '6':
                supprimerCandidat();
                break;
            case '7':
                rechercherCandidat();
                break;
            case '8':
                afficherStatistiques();
                break;
            case '9':
                console.log('Au revoir !');
                break;
            default:
                console.log('Choix invalide, réessayez.');
        }

       

} while (choix !== '9');


function ajouterCandidat() {

    console.log("Saisissez les informations du nouveau candidat :")
    let cin = prompt("Entrez votre CIN : ")
    let nom = prompt("Entrez votre nom : ")
    let prenom = prompt("Entrez votre prénom : ")
    let partiPolitique = prompt("Entrez votre parti politique : ")

    while(nom === "" || prenom === "" || partiPolitique === ""){
        console.log("Les informations ne peuvent pas être vides !")

        nom = prompt("Entrez votre nom : ")
        prenom = prompt("Entrez votre prénom : ")
        partiPolitique = prompt("Entrez votre parti politique : ")
    }

    let age = Number(prompt("Entrez votre âge : "))

    while(age <= 0 || isNaN(age)){
        console.log("Age invalide !")
        age = Number(prompt("Entrez votre âge : "))
    }

    let candidat = {
        cin : cin,
        nom : nom,
        prenom : prenom,
        partiPolitique : partiPolitique,
        age : age,
        electeurs : []
    }

    lesCandidats.push(candidat)
}
   

function   ajouterPlusieursCandidats() {


taille = Number(prompt("Combien de candidats voulez-vous ajouter : "));
lope  = 0

while ( lope < taille ){

     lope++ 

ajouterCandidat()
    

 }
   

}

function afficherListeCandidats (){

    console.log(`
    1. Afficher tous les candidats
    2. Trier les candidats par nombre de votes
    3. Filtrer par parti politique
    0. Retour
    `)

    let choix

    do {
        choix = prompt("Entrez un numéro : ")

        switch(choix){

            case "1":
                afficherTousLesCandidats()
                break

            case "2":
                trierCandidats()
                break

            case "3":
                filtrerParParti()
                break

            case "0":
                console.log("Retour au menu principal")
                break

            default:
                console.log("Choix invalide")
        }

    } while(choix !== "0")


function afficherTousLesCandidats(){

    for(i = 0 ; i < lesCandidats.length ; i++){

        console.log(
            "CIN : " + lesCandidats[i].cin +
            " | Nom : " + lesCandidats[i].nom +
            " | Prenom : " + lesCandidats[i].prenom +
            " | Parti politique : " + lesCandidats[i].partiPolitique +
            " | Age : " + lesCandidats[i].age +
            " | Nombre de votes : " + lesCandidats[i].electeurs.length
        )

    }
}


function trierCandidats(){

    for(i = 0 ; i < lesCandidats.length ; i++){

        for(j = 0 ; j < lesCandidats.length - 1 ; j++){

            if(lesCandidats[j].electeurs.length < lesCandidats[j + 1].electeurs.length){

                let temp = lesCandidats[j]

                lesCandidats[j] = lesCandidats[j + 1]

                lesCandidats[j + 1] = temp
            }
        }
    }

    for(i = 0 ; i < lesCandidats.length ; i++){

        console.log(
            (i + 1) + ". " +
            lesCandidats[i].nom +
            " → " +
            lesCandidats[i].electeurs.length +
            " votes"
        )
    }
}


function filtrerParParti(){

    let partie = prompt("Enter le parti politique : ")

    for(i = 0 ; i < lesCandidats.length ; i++){

        if(lesCandidats[i].partiPolitique === partie){

            console.log(
                "CIN : " + lesCandidats[i].cin +
                " | Nom : " + lesCandidats[i].nom +
                " | Prenom : " + lesCandidats[i].prenom +
                " | Parti politique : " + lesCandidats[i].partiPolitique +
                " | Age : " + lesCandidats[i].age +
                " | Nombre de votes : " + lesCandidats[i].electeurs.length
            )
        }
    }
}


}
  
function  voterPourCandidat (){

let voter = prompt(" Entrez votre CIN : ")
let dejaVoter = false

    while(voter === ""){
        console.log("CIN ne peut pas être vide !")
        voter = prompt("Entrez votre CIN : ")
    }

for (i=0 ; i < lesCandidats.length ; i++){
    for (j=0 ; j < lesCandidats[i].electeurs.length; j++){

     if (voter === lesCandidats[i].electeurs[j]){
      console.log("Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau !")
      dejaVoter = true
     }
 }
}
if ( dejaVoter === false){
let choice = prompt(" Entrez la CIN du candidat pour lequel vous souhaitez voter : ")

        while(choice === ""){
            console.log("CIN du candidat ne peut pas être vide !")
            choice = prompt("Entrez la CIN du candidat pour lequel vous souhaitez voter : ")
        }

let candidatExiste = false
for (i=0 ; i < lesCandidats.length ; i++){
if ( choice === lesCandidats[i].cin ){
    lesCandidats[i].electeurs.push(voter)
    candidatExiste = true
    break

   }       
 }
  if (candidatExiste === false){
    console.log("Candidat introuvable !")
   }
 }

}


function modifierCandidat(){

    let modifier = prompt("Quelle est la CIN du candidat que vous souhaitez modifier : ")

    for(i = 0 ; i < lesCandidats.length ; i++){

        if(modifier === lesCandidats[i].cin){

            console.log(`
            1. Modifier le parti politique
            2. Modifier l'âge
            0. Retour
            `)

            let choix

            do {

                choix = prompt("Enter a number : ")

                switch(choix){

                    case "1":
                        lesCandidats[i].partiPolitique = prompt("Enter le nouveau parti politique : ")
                        console.log("Parti politique modifié avec succès")
                        break

                    case "2":
                        lesCandidats[i].age = Number(prompt("Enter le nouvel âge : "))
                        console.log("Age modifié avec succès")
                        break

                    case "0":
                        console.log("Retour")
                        break

                    default:
                        console.log("Choix invalide")
                }

            } while(choix !== "0")

        }
    }
}




function supprimerCandidat(){
let Supprimer = prompt(" Quelle est la CIN du candidat que vous souhaitez supprimer : ")
for ( i=0  ; i < lesCandidats.length ; i++){
if (Supprimer === lesCandidats[i].cin){
    lesCandidats.splice(i,1)
    console.log("Candidat supprimé avec succès");
    break;
}
}

}

function rechercherCandidat(){
let cName = prompt("Entrez le nom du candidat que vous souhaitez rechercher : ")
for (i=0 ; i < lesCandidats.length ; i++){
    if (cName === lesCandidats[i].nom){
        console.log(lesCandidats[i])
    }

}

}

function afficherStatistiques (){
console.log( `
           1 . Pour Afficher le nombre total de candidats. 
           2 . Pour Afficher le nombre total de votes exprimés dans toute l'élection. 
           3 . Pour Afficher le Top 3 des candidats ayant le plus de votes. 
           4 . Pour  Afficher le nombre de candidats par parti politique. 
           0 . Back to menu .

`
)
let choices;
do {
  choices = prompt ("Enter a number : ")
  switch(choices){
    case "1" :
        afficherTotalCandidats();
        break;

    case "2" :
        afficherNombreTotalVotes();
        break;
    case "3" :
        afficherTopCandidats();
        break;
    case "4" :
        afficherNombreCandidatsPolitique();
        break;
    case "0" :  
        console.log('Back to menu !');
         break;
}
} while (choices !== '0');



} 


function afficherTotalCandidats(){

let  numCandidat = lesCandidats.length;
console.log(" le nombre total de candidats : " +  numCandidat)
}

function afficherNombreTotalVotes(){
    let totalVotes = 0
    for(i=0 ; i < lesCandidats.length ; i++)
        totalVotes = totalVotes + lesCandidats[i].electeurs.length
    console.log("le nombre total de votes exprimés dans toute l'élection : " + totalVotes);


}

function afficherTopCandidats(){
    for (i=0 ; i < lesCandidats.length ; i++)
        for (j=0 ; j <  lesCandidats.length -1 ; j++)
    if (lesCandidats[j].electeurs.length < lesCandidats[j + 1].electeurs.length) {

            let temp = lesCandidats[j];
            lesCandidats[j] = lesCandidats[j + 1];
            lesCandidats[j + 1] = temp;

}
for(i=0 ; i < 3 && i < lesCandidats.length ; i++){
 console.log(
        (i + 1) + ". " +
        lesCandidats[i].nom +
        " → " +
        lesCandidats[i].electeurs.length +
        " votes"
    );
}    
}

function afficherNombreCandidatsPolitique(){

    let parties = []

    for(i = 0 ; i < lesCandidats.length ; i++){

        let partie = lesCandidats[i].partiPolitique
        let existe = false

        for(j = 0 ; j < parties.length ; j++){

            if(parties[j] === partie){
                existe = true
            }

        }

        if(existe === false){
            parties.push(partie)
        }
    }

    for(i = 0 ; i < parties.length ; i++){

        let nombre = 0

        for(j = 0 ; j < lesCandidats.length ; j++){

            if(lesCandidats[j].partiPolitique === parties[i]){
                nombre++
            }

        }

        console.log(parties[i] + " : " + nombre + " candidats")
    }
}


