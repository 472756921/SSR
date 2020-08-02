import React from "react";
import { renderToString } from "react-dom/server";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";

const render = () => {
	return renderToString(<Home />);
};
export default render;
