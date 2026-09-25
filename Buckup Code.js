

let lesCandidats = []
taille = Number(prompt("How many candidat we have : "))


while ( lesCandidats.length < taille ){
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


