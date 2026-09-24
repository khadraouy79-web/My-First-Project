let tableau = [26,58,96,22,79,46]

for(let i=0 ; i< tableau.length -1 ; i++){
    for (let j=0 ; j < tableau.length -i -1 ; j++)
    
 if (tableau[j] > tableau[j + 1]) {
            let temp = tableau[j];
            tableau[j] = tableau[j + 1];
            tableau[j + 1] = temp;
 }
}

console.log(tableau);

