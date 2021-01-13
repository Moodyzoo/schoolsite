const app = require("express")()

app.get("/", (req, res) => {

res.send("Hallo en welkom op de schoolsite")

});

app.listen(process.env.PORT, () => {

console.log("Site is online")

})
