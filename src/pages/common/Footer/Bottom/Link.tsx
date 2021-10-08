import * as React from "react";
import {NavLink} from "react-router-dom";

export interface LinkProps {
    className?: string;
    to: string;
}

export default function Link({to, className}: LinkProps): React.ReactElement {
    const classList: string[] = ["link"];
    if(className)
        classList.push(className);
    return <NavLink className={classList.join(" ")} to={to} />;
}