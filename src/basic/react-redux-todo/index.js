import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import store from "./store";

import Todo from "./components/todo";

let App = (
    <Provider store={store}>
        <Todo></Todo>
    </Provider>
);

ReactDom.render(App, document.getElementById("root"));
