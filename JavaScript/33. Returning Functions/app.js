// Returning Functions

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONRATS, I'M A GOOD FUNCTION!");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    }
    else return function () {
        alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
        alert("STOP TRYING TO CLOSE THIS WINDOW!")
        alert("STOP TRYING TO CLOSE THIS WINDOW!")
        alert("STOP TRYING TO CLOSE THIS WINDOW!")
        alert("STOP TRYING TO CLOSE THIS WINDOW!")
        alert("STOP TRYING TO CLOSE THIS WINDOW!")
    }
}

function isBetween(num) {
    return num >= 50 && num <= 100;
}

function isBetween2(num) {
    return num >= 1 && num <= 10;
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isAdult = makeBetweenFunc(20,50);