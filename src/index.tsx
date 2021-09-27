/// <reference path="./index.d.ts" />
import "normalize.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {configure} from "mobx";
import App from "./App";

configure({enforceActions: "observed"});
ReactDOM.render(<App />, document.querySelector(".app"));