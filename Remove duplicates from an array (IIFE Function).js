
// Remove duplicates from an array using IIFE Function

const unique = (function(input) {
    
    let ans = [];
    
    ans = input.filter((a,b) => input.indexOf(a) == b)
    
    console.log(ans);

})([52, 87, 52, "4", "task", "3", "hello", "task", "4"]);