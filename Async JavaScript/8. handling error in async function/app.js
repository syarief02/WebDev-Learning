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

async function makeTwoRequest() {
    let data1 = await fakeRequestPromise('/page1');
    console.log(data1);
}