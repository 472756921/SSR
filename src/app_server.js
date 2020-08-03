import { renderToString } from "react-dom/server";
import { createElement } from "react";
import Routes from "./route";

const render = (url) => {
  const Dom = Routes.filter((it) => it.path === url);
  if (Dom.length === 1) {
    return renderToString(createElement(Dom[0].component));
  } else {
    return "404";
  }
};
export default render;
