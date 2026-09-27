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

let choix;
do {

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




function  ajouterCandidat() {



let candidat = {
    cin : prompt(" Enter your cin : "),
    nom : prompt(" Enter your First name : "),
    prenom : prompt(" Enter your Last name : "),
    partiPoliltique : prompt(" Enter your partiPolitique :"),
    age : Number(prompt(" Enter your age")),
    electeurs : []
    }

     lesCandidats.push(candidat)
    
}
   

 console.log(lesCandidats)



function   ajouterPlusieursCandidats() {


taille = Number(prompt("How many candidat we add : "));
lope  = 0

while ( lope < taille ){
/* let candidat = {
     cin : prompt(" Enter your cin : "),
     nom : prompt(" Enter your First name : "),
     prenom : prompt(" Enter your Ladt name : "),
     age : Number(prompt(" Enter your age")),
     partiPoliltique : prompt(" Enter your partiPolitique :"),
     electeurs : []
    }*/
     lope++ 
//      lesCandidats.push(candidat)
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
        choix = prompt("Enter a number : ")

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
            " | Parti politique : " + lesCandidats[i].partiPoliltique +
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

        if(lesCandidats[i].partiPoliltique === partie){

            console.log(
                "CIN : " + lesCandidats[i].cin +
                " | Nom : " + lesCandidats[i].nom +
                " | Prenom : " + lesCandidats[i].prenom +
                " | Parti politique : " + lesCandidats[i].partiPoliltique +
                " | Age : " + lesCandidats[i].age +
                " | Nombre de votes : " + lesCandidats[i].electeurs.length
            )
        }
    }
}


}
  
function  voterPourCandidat (){

let voter = prompt(" Enter your CIN : ")
let dejaVoter = false
for (i=0 ; i < lesCandidats.length ; i++){
    for (j=0 ; j < lesCandidats[i].electeurs.length; j++){

     if (voter === lesCandidats[i].electeurs[j]){
      console.log("Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau !")
      dejaVoter = true
     }
 }
}
if ( dejaVoter === false){
let choice = prompt(" Enter the CIN of the candidat you wish to vote for : ")
let candidatExiste = false
for (i=0 ; i < lesCandidats.length ; i++){
if ( choice === lesCandidats[i].cin ){
    lesCandidats[i].electeurs.push(voter)
    candidatExiste = true
console.log(lesCandidats[i].electeurs.length);
   }
    

    
 }
  if (candidatExiste === false){
    console.log("Candidat introuvable !")
   }
 }

}


function modifierCandidat(){

    let modifier = prompt("What is the CIN of the candidat you want to modify : ")

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
                        lesCandidats[i].partiPoliltique = prompt("Enter le nouveau parti politique : ")
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
let Supprimer = prompt(" What the CIN of the candidat you whant to Delete : ")
for ( i=0  ; i < lesCandidats.length ; i++){
if (Supprimer === lesCandidats[i].cin)
    lesCandidats.splice(i,1)
    console.log("Candidat supprimé avec succès");
    break;
}

}

function rechercherCandidat(){
let cName = prompt("Enter the name of the condidat you want to sersh for : ")
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
        (j + 1) + ". " +
        lesCandidats[j].nom +
        " → " +
        lesCandidats[j].electeurs.length +
        " votes"
    );
}    
}

function afficherNombreCandidatsPolitique(){
    let topPartie = {}
    for ( i=0 ; i < lesCandidats.length ; i++){
     let partie = lesCandidats[i].partiPoliltique
    
     if (topPartie[partie] === undefined) {
            topPartie[partie] = 1
        }
    
        else {
            topPartie[partie]++
           
        }


  }
console.log(topPartie)
}


