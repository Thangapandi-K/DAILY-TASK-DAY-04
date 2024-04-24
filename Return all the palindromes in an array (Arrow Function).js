
// Return all the palindromes in an array using Arrow Function

const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(["abc", "ada", "car", "racecar", "cool"]));