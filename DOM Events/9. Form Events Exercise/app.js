// Time to get some practice working with forms and form events! index.html already has a form element that contains two <input> elements, one for quantity and one for a product name.  index.html also contains an empty <ul> where you will append new <li>'s.  Watch the gif at the bottom for an overview of how your code should work. Your task is to follow these steps:

// Listen for the form submission

// When the form is submitted, prevent the default behavior

// Grab the quantity input value and the product input value

// Create a new <li> element.  Set the text on the new <li> to include the quantity and product name from the form.

// Append the new <li> to the <ul> on the page

// Reset the inputs

// Please note:
// 1. Udemy's interface does not yet recognize some of the newer JS syntax, e.g., .append()
// You will need to use alternate (older) syntax for this method in order to get the tests to pass.
// 2. The form will need to be assigned to a variable named form for the test to pass, I've already included this line of code for you in the app.js code.

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector("#list");
form.addEventListener("submit", inputList);

function inputList(e) {
    e.preventDefault();
    const quantity = document.querySelector("#qty");
    const product = document.querySelector("#product")
    addList(quantity.value, product.value);
    // form.elements.quantity.value = "";
    // form.elements.product.value = "";
    form.reset();
}

function addList(quantity, product) {
    const newList = document.createElement("li");
    newList.innerText = `${quantity} ${product}`;
    list.appendChild(newList);

}
