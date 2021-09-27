import * as React from "react";
import {NavLink} from "react-router-dom";
import styles from "./style.scss";

export interface ITab {
    name: string;
    path: string;
}

export interface NavProps {
    children: ITab[];
}

export default function Nav({children}: NavProps): React.ReactElement {
    return <nav className={styles.main}>
        {children.map((item, index) => {
            return <NavLink key={index} className="tab" to={item.path} exact>{item.name}</NavLink>;
        })}
    </nav>;
}