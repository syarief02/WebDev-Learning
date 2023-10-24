// ClassList Practice
// In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 

// Please use JavaScript and the classList property to invert which elements have the highlight class. 

// Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.   Your end result should look like this:



// Please don't touch the markup in index.html! Do this all via JavaScript!

// WRITE YOUR CODE IN HERE:

const list = document.querySelectorAll("li");

for (let li of list){
    li.classList.toggle("highlight");
}