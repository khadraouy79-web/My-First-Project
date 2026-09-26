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
    prenom : prompt(" Enter your Ladt name : "),
    age : Number(prompt(" Enter your age")),
    partiPoliltique : prompt(" Enter your partiPolitique :"),
    electeurs : []
    }

     lesCandidats.push(candidat)
    

}
   

 console.log(lesCandidats)



function   ajouterPlusieursCandidats() {


taille = Number(prompt("How many candidat we add : "));
lope  = 0

while ( lope < taille ){
// let candidat = {
//     cin : prompt(" Enter your cin : "),
//     nom : prompt(" Enter your First name : "),
//     prenom : prompt(" Enter your Ladt name : "),
//     age : Number(prompt(" Enter your age")),
//     partiPoliltique : prompt(" Enter your partiPolitique :"),
//     electeurs : []
//     }
     lope++ 
//      lesCandidats.push(candidat)
ajouterCandidat()
    

}
   


}

function afficherListeCandidats (){
console.log(lesCandidats)
}
  
function  voterPourCandidat (){

let voter = prompt(" Enter your CIN : ")
let dejaVoter = false
for (i=0 ; i < lesCandidats.length ; i++){
    for (j=0 ; j < lesCandidats[i].electeurs.length; j++)

  if (voter == lesCandidats[i].electeurs[j]){
     console.log("The CIN is alrady exist")
     dejaVoter = true
 }
}
if ( dejaVoter === false){
let choice = prompt(" Enter the cin of party you wish to vote for : ")
for (i=0 ; i < lesCandidats.length ; i++){
if ( choice === lesCandidats[i].cin ){
    lesCandidats[i].electeurs.push(voter)}
    

    console.log(lesCandidats[i].electeurs.length);
}
}

}

function modifierCandidat (){
let modifier = prompt(" What the CIN of the candidat you whant to modifiay : ")
for(i=0 ; i < lesCandidats.length ; i++){
if ( modifier === lesCandidats[i].cin){
    lesCandidats[i].age = prompt("enter the age ")
}

}
}

function supprimerCandidat(){
let Supprimer = prompt(" What the CIN of the candidat you whant to Delete : ")
for ( i=0  ; i < lesCandidats.length ; i++){
if (Supprimer === lesCandidats[i].cin)
    lesCandidats.splice(i,1)


console.log("Candidat supprimé avec succès");

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

`
)
let choices;
do {
  choices = prompt ("Enter a number : ")
  switch(choices){
    case

  }


}
let  numCandidat = lesCandidats.length
console.log(" le nombre total de candidats : " +  numCandidat) 



}


