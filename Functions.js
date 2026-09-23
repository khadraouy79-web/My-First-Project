const prompt = require("prompt-sync")();
let name = prompt("Enter your Name :")
function syHello(name){
    console.log("Hello " + name)
}

syHello(name);


function numbers (a,b){
    return (a + b);
}

let result = numbers (7,3)
console.log(result)


