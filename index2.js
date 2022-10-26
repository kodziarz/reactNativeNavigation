const express = require("express")
const app = express()
app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
// app.use(express.text()) // w razie problemów z danymi użyj text()
const PORT = 3000;
app.post("/", function (req, res) {
    console.log(req.body)

    res.send(req.body)
})
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})