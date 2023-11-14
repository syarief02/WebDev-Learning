/*
This JavaScript code is primarily designed for a form submission and reset operation. It first selects the form, input field, and list from the HTML document using their respective IDs. 

Upon the form submission, it prevents the default form submission behavior, logs the submission and input value, creates a new list item with the input value, appends it to the list, and then resets the input field.

There is also a reset button functionality that, when clicked, removes all the children of the list, effectively clearing the list.
*/
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement("LI");
    newLi.append(catName);
    const fragment = document.createDocumentFragment();
    fragment.append(newLi);
    list.append(fragment);
    input.value = "";
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
    list.innerHTML = '';
});