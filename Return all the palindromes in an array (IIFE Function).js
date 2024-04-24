
// Return all the palindromes in an array using IIFE Function

const getAllPalindromes = ((words) => words.filter((word) => word.split("").reverse().join("") === word))(["abc", "car", "ada", "racecar", "cool"]);

console.log(getAllPalindromes);




