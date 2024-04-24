
// Print Odd Numbers in an array using Arrow Function

const oddNum = array => {
    
    for(var i = 0; i < array.length; i++){
           
       if(array[i] % 2 !== 0) {
              
          console.log(array[i]);
       } 
    }
 }
 
 oddNum([1, 2, 3, 4, 5]);