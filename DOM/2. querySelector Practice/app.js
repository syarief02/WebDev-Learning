// querySelector Practice
// I've provided you with some simple markup in index.html.  Your task is to use querySelector and querySelectorAll to select some of those elements.

// Select all elements that have the class of "done" and save them in a variable called doneTodos.

// Select the one checkbox and save it in a variable called checkbox. Be careful, there is more than one input element on the page! You'll need to select using the type attribute. (if you can't remember the css attribute selector...google it! That's what I would do!)

// Write your code in app.js.  Please do not change any of the elements in index.html

// Your code goes in here!

const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector("#scales")