import * as React from "react";
import styles from "./style.scss";

export interface SectionProps {
    className?: string;
    style?: object;
    children: React.ReactNode;
}

export default function Section({children, className, style}: SectionProps): React.ReactElement {
    const classList: string[] = [styles.main];
    if(className)
        classList.push(className);
    return <section 
        className={classList.join(" ")}
        style={style}
    >{children}</section>;
}