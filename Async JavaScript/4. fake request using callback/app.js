function fakeRequestCallback(url, success, failure) {
    const delay = 500 + Math.floor(Math.random() * 4500);
    setTimeout(function () {
        if (delay > 4000) {
            failure('connection timeout :(');
        }
        else {
            success(`here is your fake data from ${url}`);
        }
    }, delay)
}

fakeRequestCallback('books.com',
    function (response) {
        console.log(response);
    },
    function (err) {
        console.log(err);
    }
)
