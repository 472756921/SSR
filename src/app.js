import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";

render(
	<BrowserRouter>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/home" component={Home} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
