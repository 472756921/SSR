const path = require("path");
const express = require("express");
const { renderToString } = require("react-dom/server");
const app = express();
const port = 3000;

const content = require("../dist_server/server");

import { renderSSR } from "../src/app";

app.use(express.static("dist"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../"));
app.get("/home", (req, res) => {
	res.render("index", { content: renderToString(renderSSR(req)) });
});

app.get("*", function (request, response) {
	response.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
