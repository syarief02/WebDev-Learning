function fakeRequestPromise(url) {
    return new Promise(function (resolve, reject) {
        const delay = 500 + Math.floor(Math.random() * 4500);
        setTimeout(function () {
            if (delay > 4000) {
                reject("request rejected");
            }
            else {
                resolve(`here's your fake data from ${url}`);
            }
        }, delay)
    })
}

fakeRequestPromise('blablaabl.com/page1')
    .then(function () {
        console.log("connection success 1");
        fakeRequestPromise('blablaabl.com/page2')
            .then(function () {
                console.log("connection success 2");
                fakeRequestPromise('blablaabl.com/page3')
                    .then(function () {
                        console.log("connection success 3");
                    })
                    .catch(function () {
                        console.log("error");
                    })
            })
            .catch(function () {
                console.log("error");
            })
    })
    .catch(function () {
        console.log("error");
    })
