let prompt = require("prompt-sync")();
let Choisse = prompt ("choose a lettare :");
let names = ["amine","omar","bilal","Ali"];
for ( i = 0 ; i < names.length ; i++ ){
    for ( y = 0 ; y < names[i].length ; y++){
        if (names[i][y].toLowerCase() === Choisse.toLowerCase())  {
            console.log(names[i]);
            break;}
    }
}











