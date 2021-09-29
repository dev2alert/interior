import * as React from "react";
import styles from "./style.scss";

export interface SectionProps {
    className?: string;
    style?: object;
    children: React.ReactNode;
}

export default function Section({children, className, style}: SectionProps): React.ReactElement {
    return <section 
        className={className}
        style={style}
    >{children}</section>;
}