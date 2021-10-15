import * as React from "react";
import {NavLink} from "react-router-dom";
import Section from "..";
import styles from "./style.scss";

export interface ILink {
    name: string;
    path: string;
}

export interface NavProps {
    children: ILink[];
}

export default function Nav({children}: NavProps): React.ReactElement {
    return <Section className={styles.main}>
        <nav className="container">
            {children.map(({name, path}, index) => {
                return <NavLink 
                    key={index}
                    className="link"
                    to={path}
                >{name}</NavLink>;
            })}
        </nav>
    </Section>;
}