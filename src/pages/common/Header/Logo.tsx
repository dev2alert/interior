import * as React from "react";
import {NavLink} from "react-router-dom";

export default function Logo(): React.ReactElement {
    return <NavLink className="logo" to="/" />;
}