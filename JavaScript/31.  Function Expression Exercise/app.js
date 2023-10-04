// Function Expression Exercise
// Define a function that returns the square of a number. Define the function as a function expression, stored in a variable called square.  NOTE: Udemy's coding exercise platform does NOT support the ** operator. 

// square(4) //16
// square(3) //9

//NOTE: Udemy's coding exercise platform does NOT support the ** operator.  You'll need to multiply a number by itself or use the Math.pow() method.

let square = function(num){
    return Math.pow(num,2);
}

console.log(square(4));