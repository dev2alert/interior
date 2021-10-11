import * as React from "react";
import {NavLink} from "react-router-dom";

export interface LinkProps {
    to: string;
    exact?: boolean;
    children: string;
}

export const Link = ({to, exact, children}: LinkProps): React.ReactElement => <NavLink className="link" to={to} exact={exact}>{children}</NavLink>;

export default function Nav(): React.ReactElement {
    return <nav className="nav">
        <Link to="/" exact>HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/history">HISTORY</Link>
        <Link to="/showroom">SHOWROOM</Link>
        <Link to="/contact">CONTACT</Link>
    </nav>;
}