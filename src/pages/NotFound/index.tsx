import * as React from "react";
import Section from "../common/Main/Section";
import Page from "../common/Page";
import styles from "./style.scss";

export default function NotFound(): React.ReactElement {
    return <Page title="Not Found">
        <Section className={styles.section} container>
            404
            <br />
            Not Found
        </Section>
    </Page>;
}