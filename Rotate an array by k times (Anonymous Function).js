
// Rotate an array by k times using Anonymous Function

let rotate = function(arr,k) {
   
    for(let i = 0; i < k; i++)
   
    {
      
        arr.push(arr[0]);
      
        arr.shift();
   }
 
   return arr;
}

console.log(rotate([0,1,2,3,4,5], 5));

console.log(rotate(["a","b","c","d","e","f"], 5));