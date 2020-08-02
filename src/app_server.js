import React from "react";
import { renderToString } from "react-dom/server";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";

const render = (url) => {
  let Dom = <Home />;
  if (url === "/login") {
    Dom = <Login />;
  }

  return renderToString(Dom);
};
export default render;
