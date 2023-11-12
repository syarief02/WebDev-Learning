function makeRandColor() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    return `RGB(${r},${g},${b})`;
}

const button = document.querySelectorAll("button");
const h1 = document.querySelectorAll("h1");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", colorized);
}

for (let i = 0; i < h1.length; i++) {
    h1[i].addEventListener("click", colorized);
}

function colorized() {
    this.style.background = makeRandColor();
    this.style.color = makeRandColor();
    //usually we have to write the index number of the loop  which is  "i" when calling the operation.
    //"this" make it available to be written on separate function.
    //use the keyword "this" inside the callback functions.
}