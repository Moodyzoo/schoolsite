const app = require("express")()

app.get("/", (req, res) => {

res.send("Hallo en welkom op de schoolsite")

});

app.listen("80")
