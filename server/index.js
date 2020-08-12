const path = require("path");
const express = require("express");
const { renderToString } = require("react-dom/server");
const app = express();
const port = 3000;

const server_build = require("../dist_server/server");

app.use(express.static("dist"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../"));
app.get("/*", (req, res) => {
  res.render("index", {
    content: renderToString(server_build.RenderSSR(req)),
    link: '<link rel="stylesheet" href="./main.css" />',
  });
});

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
