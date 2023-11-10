const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", randColor);
document.body.style.textAlign = "center";

function randColor() {
    const bgColor = newRandColor();
    document.body.style.background = bgColor;
    setTextColor(bgColor);
}

function newRandColor() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    const color = `RGB(${r}, ${g}, ${b})`;

    return color;
}

function setTextColor(bgColor) {
    if (getBrightness(bgColor) === "dark") {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }
}

function getBrightness(color) {
    // Extract the RGB values from the color string
    const rgb = color.match(/\d+/g);
    const r = parseInt(rgb[0]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);

    // Calculate the brightness using the formula (0.299 * R + 0.587 * G + 0.114 * B)
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    // Check the brightness value
    if (brightness < 128) {
        return "dark";
    } else {
        return "light";
    }
}
