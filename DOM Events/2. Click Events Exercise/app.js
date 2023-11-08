// Click Events Exercise
// Let's get some practice using addEventListener. I've provided you with two buttons, each with an id: 'hello' and 'goodbye'.  Your goal is to add a click listener to each button. 

// When the hello button is clicked, you should console.log "hello"

// When the goodbye button is clicked, you should console.log "goodbye"

// Make sure to use addEventListener!

const btnHello = document.querySelector("#hello");
const btnGoodbye = document.querySelector("#goodbye");

function hello(){
    console.log("hello");
}

function goodbye(){
    console.log("goodbye");
}

btnHello.addEventListener("click", hello);
btnGoodbye.addEventListener("click", goodbye);