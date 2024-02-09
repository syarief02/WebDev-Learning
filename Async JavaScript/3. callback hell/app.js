document.body.style.transition = "1s";

setTimeout(function () {
    document.body.style.backgroundColor = 'red';
    setTimeout(function () {
        document.body.style.backgroundColor = 'orange';
        setTimeout(function () {
            document.body.style.backgroundColor = 'yellow';
        }, 3000);
    }, 2000);
}, 1000);



