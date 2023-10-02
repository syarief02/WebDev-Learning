// Sum Array Exercise
// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
// Hints:

// You'll need a variable to keep track of the total.  It should start out as zero.

// Loop over the array and for each element, add it to the total variable.

// After you have added every number to total, return total.

// DEFINE YOUR FUNCTION BELOW:
    
function sumArray(array){
    let sum = 0;
     if (array.length>0){
     
     for (let i=array.length-1;i>=0;i--)
     {
        sum = sum + array[i];
     }
     return sum}
 }
 console.log(sumArray([10,10,10]));