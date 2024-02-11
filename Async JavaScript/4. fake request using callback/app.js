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
        fakeRequestCallback('books.com',
            function (response) {
                console.log("second callback successfull");
                fakeRequestCallback('books.com',
                    function (response) {
                        console.log("third callback successfull");
                    },
                    function (err) {
                        console.log(err);
                    }
                );
            },
            function (err) {
                console.log(err);
            }
        );

    },
    function (err) {
        console.log(err);
    }
);
