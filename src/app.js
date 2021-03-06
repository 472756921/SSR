import React from "react";
import { hydrate, render } from "react-dom";
import { Route, BrowserRouter, Switch, StaticRouter } from "react-router-dom";
import Routes from "./route";
render(
	<BrowserRouter>
		<Switch>
			{Routes.map((it, i) => (
				<Route key={i} path={it.path} component={it.component} />
			))}
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
