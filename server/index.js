const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const content = require("../dist/server");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../"));
app.get("/", (req, res) => {
	res.render("index", { content: content.default() });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
