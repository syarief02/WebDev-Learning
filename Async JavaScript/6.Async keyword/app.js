async function login(username, password) {
    if (!username || !password) throw "missing credentials"
    if (password === "joeyyy") return "welcome"
    throw "invalid password"
}

login("joeyyy","joeyy")
    .then(msg => {
        console.log("Logged in!")
        console.log(msg)
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })