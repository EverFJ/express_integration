const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 8000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("home", {
        isActiveHome: true,
        customCss: "css/homepage.css",
        title: "Cuiz'ine"
    })
})
app.get("/contact", (req, res) => {
    res.render("contact", {
        isActiveContact: true,
        customCss: "css/contact.css",
        title: "contact"
    })
})
app.get("/team", (req, res) => {
    res.render("team", {
        isActiveTeam: true,
        customCss: "css/team.css",
        title: "team"
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

})