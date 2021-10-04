import * as React from "react";
import {NavLink} from "react-router-dom";

export interface LinkProps {
    to: string;
    children: string;
}

export default function Link({to, children}: LinkProps): React.ReactElement {
    return <NavLink className="link" to={to}>{children}</NavLink>;
}