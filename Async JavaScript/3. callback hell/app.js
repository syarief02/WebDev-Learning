document.body.style.transition = "1s background-color";

// Nested callback example:
// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(function () {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(function () {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

function delayedColorChange(newColor, delay) {
    setTimeout(function () {
        document.body.style.backgroundColor = newColor;
    }, delay);
}

delayedColorChange('olive', 3000);
