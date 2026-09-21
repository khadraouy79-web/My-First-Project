const prompt = require('prompt-sync')();
let Fword = prompt ("enter password")
let Sword = prompt ("confirmd your password")
if ( Fword === Sword){
    console.log("Your password is saved")
}
else {
    console.log("Your confirmd password dont match with password")
}


