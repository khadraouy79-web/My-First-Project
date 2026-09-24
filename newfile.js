const prompt = require ("prompt-sync")()
let numbers = prompt ( "enter nuber of the Tabel : ")
let tabel = []
let tabel2 = []
let i = 1
while ( i <=numbers  ){
     let result = prompt("enter nubers : ");
     tabel.push(result)
     i++;
 
    
}
tabel2.push(tabel.slice(2,7))
console.log(tabel);
console.log(tabel2)


     





