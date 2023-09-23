// For...Of Practice
// Let's practice using for...of. I've provided you with an array called numbers.  Please use a for...of loop to loop over it, and print out the square of each value (the number multiplied by itself).

// NOTES:

// 1. Udemy's coding exercise platform does NOT support the ** operator.
// 2. You could accomplish this by using a while loop or a for loop, but please use a for...of loop! Unfortunately, I can't enforce the type of loop you use, but please I'm begging you to use a for...of.  I will hunt you down if you don't.  Thank you and have a great day!

// Your output should look like this:

// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers){
    console.log(Math.pow(num,2));
}