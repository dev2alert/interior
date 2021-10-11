import * as React from "react";
import Section from "..";
import styles from "./style.scss";

export interface TitleProps {
    children: string;
}

export default function Title({children}: TitleProps): React.ReactElement {
    return <Section className={styles.main} container>
        {children}
    </Section>;
}