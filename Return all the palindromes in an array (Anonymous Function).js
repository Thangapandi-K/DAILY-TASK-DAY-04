
// Return all the palindromes in an array using Anonymous Function

const getAllPalindromes = function(words) { 
    
    return words.filter((word) => word.split("").reverse().join("") === word); }

console.log(getAllPalindromes(["abc", "ada", "car", "racecar", "cool"]));
