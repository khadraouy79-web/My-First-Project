

let s1 = {
    Fname : "amine",
    Lname : "One",
    Notes : [20 , 18 , 19 , 20]
}
let s2 = {
    Fname : "Omar",
    Lname : "Tow",
    Notes : [20 , 18 , 19]
}
let s3 = {
    Fname : "Ayoub",
    Lname : "Three",
    Notes : [20 , 18 , 19]
}

let students = [s1,s2,s3]
console.log("Students Full Name " + s1.Fname + " " + s1.Lname );
let com = 0
for (let j=0 ; j < s1.Notes.length ; j++ ){
    com += s1.Notes[j]    
}
let moiyeen = com / s1.Notes.length ;

console.log(moiyeen)

console.log("Students Full Name " + s2.Fname + " " + s2.Lname );
let com1 = 0
for (let j=0 ; j < s2.Notes.length ; j++ ){
    com1 += s2.Notes[j]    
}
let moiyeen1 = com1 / s2.Notes.length ;

console.log(moiyeen1)

console.log("Students Full Name " + s3.Fname + " " + s3.Lname );
let com2 = 0
for (let j=0 ; j < s3.Notes.length ; j++ ){
    com2 += s3.Notes[j]    
}
let moiyeen2 = com2 / s2.Notes.length ;

console.log(moiyeen2)





