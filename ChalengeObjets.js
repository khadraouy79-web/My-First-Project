
let Student = ["S1 , S2 , S3"]
let S1 = {
    Fname : "amine",
    Lname : "One",
    Notes : [20 , 18 , 19 , 15]
}
let S2 = {
    Fname : "Omar",
    Lname : "Tow",
    Notes : [20 , 18 , 19]
}
let S3 = {
    Fname : "Ayoub",
    Lname : "Three",
    Notes : [20 , 18 , 19]
}
console.log("Student Full Name " + S1.Fname + " " + S1.Lname );
let com = 0
for (let j=0 ; j < S1.Notes.length ; j++ ){
    com += S1.Notes[j]    
}
let moiyeen = com / S1.Notes.length ;

console.log(moiyeen)








