// Filter Exercise
// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// // => ["mark", "carrie98", "MoanaFan"]


// Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

// function validUserNames(usernames) {
//   // your code here
// }


// or if you want to get fancy with an arrow function:

// const validUserNames = usernames => // your code here;


// There is no need to define an actual array of usernames, that part is done for you behind the scenes.

function validUserNames(usernames) {
    // your code here
    return usernames.filter(
        x => (
            x.length < 10
        )
    );
}

const names = validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
console.log(names);