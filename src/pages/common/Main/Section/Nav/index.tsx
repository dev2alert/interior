import * as React from "react";
import styles from "./style.scss";

export interface NavProps {
    children: string[];
}

export default function Nav({children}: NavProps): React.ReactElement {
    return <nav className={styles.main}>
        {children.map((item, index) => {
            const classList: string[] = ["tab"];
            if(index === 0)
                classList.push("active");
            return <span key={index} className={classList.join(" ")}>{item}</span>;
        })}
    </nav>;
}