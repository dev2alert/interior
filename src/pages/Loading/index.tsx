import * as React from "react";
import Page from "../common/Page";
import Section from "../common/Main/Section";
import loading from "./assets/loading.gif";
import styles from "./style.scss";

export default class Loading extends React.Component {
    public override render(): React.ReactNode {
        return <Page title="Loading...">
            <Section className={styles.section}>
                <img className="loading" src={loading} />
            </Section>
        </Page>;
    }
}