var express = require("express");
var app = express();
// const { renderToString } = require("react-dom/server");
// const React = require("react");
// import Home from "../src/page/home";

var ejs = require("ejs");

// const container = renderToString(<Home />);

app.engine("html", ejs.__express);
app.set("view engine", "html"); //设置视图引擎
app.use(express.static("../dist"));

app.get("/", (req, res) => res.send("nihao"));

app.listen(8888, () => console.log(`Example app listening on port 8888!`));
