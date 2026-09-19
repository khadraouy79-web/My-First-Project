const prompt = require('prompt-sync')();
const num = prompt('Enter a number: ');
if (num % 2 === 0) {
    console.log(`Le nombre ${num} est pair.`)
}
else {
    console.log(`Le nombre ${num} est impair.`)
}
