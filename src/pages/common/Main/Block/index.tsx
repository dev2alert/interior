import * as React from "react";
import styles from "./style.scss";

export interface BlockProps {
    className?: string;
    children: React.ReactNode;
}

export default function Block({className, children}: BlockProps): React.ReactElement {
    const classList: string[] = [styles.main];
    if(className)
        classList.push(className);
    return <div className={classList.join(" ")}>{children}</div>;
}