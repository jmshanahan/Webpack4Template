// import App from "./App";

import 'normalize.css';
import './styles/App.css';
import React from "react";
import ReactDOM from "react-dom"

const title = "My Minimual React Webpack Babel setup joe";
ReactDOM.render(<div>{title}</div>, document.getElementById("app"));
module.hot.accept();