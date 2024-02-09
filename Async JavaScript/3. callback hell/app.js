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

function delayedColorChange(newColor, delay, doNext) {
    setTimeout(function () {
        document.body.style.backgroundColor = newColor;
        doNext()
    }, delay);
}

delayedColorChange('red', 1000, function () {
    delayedColorChange('orange', 1000, function () {
        delayedColorChange('yellow', 1000, function () {
            delayedColorChange('green', 1000, function () {
                delayedColorChange('blue', 1000, function () {
                    delayedColorChange('indigo', 1000, function () {
                        console.log("all done");
                    });
                });
            });
        });
    });
});

//the common callback hell:
searchMoviesAPI('amadeus', function () {
    saveToMyDB(movies, function () {
        //if it works, run this
    }, function () {
        //if it doesn't work, run this
    })
}, function () {
    //if API is down, or request failed
})