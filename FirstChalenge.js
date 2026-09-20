console.log("Hello World")
const prompt = require ("prompt-sync")();
const name = prompt(" enter your name ");
console.log("Hello " + name +" How old are you" )
let age = prompt("enter your age")
if (age < 18 ){
    console.log("You are not an adult")
}
else {
    console.log("You are an adult");
}
let Yes = prompt("Do you whant to know your wait by lbs" )
if (Yes == "yes" ){

    Weight = prompt("Enter your weight in Kg")

let Lbs = Weight * 2.20462
console.log(" Your Weight by lbs is " + Lbs )
}
else if  (Yes == "no") {
    console.log("Tank you for your time")
}
else {
    console.log("I dont understand please type (yes) or (no) ")
}

