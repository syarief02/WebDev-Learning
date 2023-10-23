// Magical Forest Circle Exercise
// I've provided you with some basic markup in index.html.  Please do not change any of the markup directly.  Instead, use JavaScript to make the following changes:

// Select the div with the id of container.  Using JavaScript, set it's text alignment to 'center';

// Select the image and use JavaScript to give it a width of 150px and a border radius of 50%

// Remember to use camelCased property names in JavaScript! (backgroundColor, not background-color, etc.)

const container = document.querySelector("#container");

container.style.textAlign = "center";

const image = document.querySelector("img")
image.style.width = "150px";
image.style.borderRadius = "50%";