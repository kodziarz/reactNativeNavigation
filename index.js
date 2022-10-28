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

    //jeżeli jeszcze takich nie ma
    if (users.every(({ login, password }) => { return login !== newLogin && login !== "" && password !== "" })) {
        users.push({
            login: newLogin,
            password: newPassword,
            registerDate: Date.now()
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

app.delete("/user", (req, res) => {
    let login = req.body.login
    let password = req.body.password

    res.set("Access-Control-Allow-Origin", "*")

    if (!users.every(({ checkedLogin, checkedPassword }, i) => {
        if (checkedLogin === login && checkedPassword === password) {
            users.splice(i, 1)
            res.status(200).json({ message: "User succesfully deleted" })
            console.log("usunięto użytkownika: ", {
                login: checkedLogin,
                password: checkedPassword
            });
            return false
        }
        return true
    })) res.status(404)//.json({ message: "There is not such a user" })
})

app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})