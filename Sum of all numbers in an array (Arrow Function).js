
// Sum of all numbers in an array using Arrow Function

let sum = arr => {
    
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
    
        sum += arr[i]
    
    } 
    
    return sum;
    
}

console.log(sum([1, 2, 3, 4, 5]));