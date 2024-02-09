document.body.style.transition = "1s";

setTimeout(function () {
    document.body.style.backgroundColor = 'red';
    setTimeout(function () {
        document.body.style.backgroundColor = 'orange';
        setTimeout(function () {
            document.body.style.backgroundColor = 'yellow';
        }, 1000);
    }, 1000);
}, 1000);



