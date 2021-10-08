import * as React from "react";
import {NavLink} from "react-router-dom";
import styles from "./style.scss";

export interface ITab {
    name: string;
    path: string;
}

export interface NavProps {
    className?: string;
    children: ITab[];
}

export default function Nav({className, children}: NavProps): React.ReactElement {
    const classList: string[] = [styles.main];
    if(className)
        classList.push(className);
    return <nav className={classList.join(" ")}>
        {children.map((item, index) => {
            return <NavLink key={index} className="tab" to={item.path} exact>{item.name}</NavLink>;
        })}
    </nav>;
}