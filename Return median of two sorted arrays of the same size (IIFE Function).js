
// Return median of two sorted arrays of the same size using IIFE Function

const getMedian = (function(arr1, arr2, n) {

    let i = 0; 
    let j = 0; 
    let count;
    let m1 = -1, m2 = -1;

 
    for (count = 0; count <= n; count++) {
        
        if (i == n) {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
 
        else if (j == n) {
            m1 = m2;
            m2 = arr1[0];
            break;
        
        } if (arr1[i] <= arr2[j]) {
            m1 = m2; 
            m2 = arr1[i];
            i++;
        
        } else {
            m1 = m2; 
            m2 = arr2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;

})([4, 6, 7, 8, 10], [5, 16, 21, 11, 44], 5)

console.log(getMedian);




