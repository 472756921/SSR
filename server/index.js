const http = require("http");
const { renderToString } = require("react-dom/server");
const React = require("react");
import Home from "../src/page/home";

const container = renderToString(<Home />);

http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/plain",
	});
	response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${container}</div>
    </body>
    </html>
  `);
}).listen(8888);
