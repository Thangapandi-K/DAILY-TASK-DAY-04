
// Return all the prime numbers in an array using IIFE Function

let primeNum = (function(numArray){

    numArray = numArray.filter((number) => {
    
        for (let i = 2; i <= Math.sqrt(number); i++) {
    
        if (number % i === 0) return false;
    
        }
    
    return true;
    
    });
    
console.log(numArray);
    
    })([11, 12, 13, 14, 15, 16, 17, 19])




