const prompt = require("prompt-sync")();


let choisses = prompt ("enter a letter")
let Words = "adrzedardfafa"
let com=0;
for (i = 0 ; i < Words.length ; i++){
    if (Words[i] === choisses){
        com = 1+com
    }
       
}
console.log(com);






