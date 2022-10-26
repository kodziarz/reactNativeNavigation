const express = require("express")
const app = express()
app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
// app.use(express.text()) // w razie problemów z danymi użyj text()
const PORT = 3000;

const users = []
app.post("/", function (req, res) {
    console.log(req.body)
    res.send(req.body)
})

app.get("/", (req, res) => {
    res.send("ok")
})

app.options("/user", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.set("Content-Type", "text/plain; charset=utf-8")
    res.end();
})

app.put("/user", (req, res) => {
    let newLogin = req.body.login
    let newPassword = req.body.password

    res.set("Access-Control-Allow-Origin", "*")
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.set("Content-Type", "text/plain; charset=utf-8")
    // res.end();
    //jeżeli jeszcze takich nie ma
    if (users.every(({ login, password }) => { return login !== newLogin && password !== newPassword })) {
        users.push({
            login: newLogin,
            password: newPassword
        })
        res.status(200).json({ message: "User added" })
        console.log("dodano użytkownika: ", {
            login: newLogin,
            password: newPassword
        });
    } else {
        res.status(400).json({ message: "User already Exists" })
        console.log("użytkownik już istniał");
    }
})

app.post("/user", (req, res) => {
    let newLogin = req.body.login
    let newPassword = req.body.password

    res.set("Access-Control-Allow-Origin", "*")
    //jeżeli jeszcze takich nie ma
    if (users.every(({ login, password }) => { return login !== newLogin && password !== newPassword })) {
        users.push({
            login: newLogin,
            password: newPassword
        })
        res.status(200).json({ message: "User added" })
        console.log("dodano użytkownika: ", {
            login: newLogin,
            password: newPassword
        });
    } else {
        res.status(400).json({ message: "User already Exists" })
        console.log("użytkownik już istniał");
    }
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})