import Routes from "./route";
import React from "react";
import { Route, StaticRouter, Switch } from "react-router-dom";

const RenderSSR = (props) => {
	return (
		<StaticRouter location={props.req.path}>
			<Switch>
				{Routes.map((it, i) => (
					<Route path={it.path} component={it.component} key={i} />
				))}
			</Switch>
		</StaticRouter>
	);
};

export { RenderSSR };
