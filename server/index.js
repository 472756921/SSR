const path = require("path");
const express = require("express");
const { renderToString } = require("react-dom/server");
const app = express();
const port = 3000;
import React from "react";
const cssHook = require("css-modules-require-hook");
cssHook({
	extensions: [".css"],
	generateScopedName: "[hash:base64:5]",
});

const { RenderSSR } = require("../src/router");

app.use(express.static("dist"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../"));
app.get("/*", (req, res) => {
	res.render("index", {
		content: renderToString(<RenderSSR req={req} />),
	});
});

// app.get("*", function (request, response) {
// 	response.sendFile(path.resolve(__dirname, "../dist", "index.html"));
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
