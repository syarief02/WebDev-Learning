function fakeRequestPromise(url) {
    return new Promise(function (resolve, reject) {
        const delay = 500 + Math.floor(Math.random() * 4500);
        setTimeout(function () {
            if (delay > 2000) {
                reject("request rejected");
            }
            else {
                resolve(`here's your fake data from ${url}`);
            }
        }, delay)
    })
}

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    } catch (e) {
        console.log("there's an error")
        console.log("error is : ", e)
    }

}