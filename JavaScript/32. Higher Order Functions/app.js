function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.ceil(Math.random() * 6);
    console.log(roll);
}

callTenTimes(rollDie);