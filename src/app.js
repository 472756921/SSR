import React from "react";
import { render } from "react-dom";
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

export const renderSSR = (req) => {
	console.log("123 :>> ", 123);
	return (
		<StaticRouter location={req.path}>
			<Switch>
				{Routes.map((it, i) => {
					return <Route path={it.path} component={it.component} key={i} />;
				})}
			</Switch>
		</StaticRouter>
	);
};
