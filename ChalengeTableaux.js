
let numbers = [1,5,7,35,97,45,12,8]

let max = numbers[0]

for (let i = 0 ; i < numbers.length ; i++ ){
    if ( numbers[i] >  max){
        max = numbers[i];
    }


}

console.log(max);

