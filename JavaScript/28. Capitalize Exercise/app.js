// Capitalize Exercise
// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"
// Hints:

// Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.

// Single out the first letter and capitalize it. (use a string method to help!)

// Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)

// For example: 'eggplant' becomes 'E' + 'ggplant'

// DEFINE YOUR FUNCTION BELOW:

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1); 
    
} 
    
    console.log(capitalize('eggplant'));
