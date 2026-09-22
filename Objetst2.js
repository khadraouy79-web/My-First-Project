
let Student = { Fname : "Amine" ,
     Lname : "El Khadraouy" ,
      nots : [17 ,18 , 19 ,20] 

}
console.log(` Student : ${Student.Fname} ${Student.Lname}`);
console.log("Liste des notes :" + Student.nots.join(","));

let som = 0
for (let notes of Student.nots){
som += notes
}

let moyenne = som / Student.nots.length;
console.log(`Moyenne : ${moyenne}`);

