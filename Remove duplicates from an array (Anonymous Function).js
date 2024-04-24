
// Remove duplicates from an array using Anonymous Function

const unique = function(input) {
    
    let ans = [];
    
    ans = input.filter((a,b) => input.indexOf(a) == b)
    
    console.log(ans);

}

unique([52, 87, 52, "4", "task", "3", "hello", "task", "4"]);