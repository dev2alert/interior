import * as React from "react";
import styles from "./style.scss";
import Page from "../common/Page";
import SectionTitle from "../common/Main/Section/Title";
import Section from "../common/Main/Section";
import Item from "./Item";

export default function Contact(): React.ReactElement {
    return <Page title="Contact" main={{className: styles.main}}>
        <SectionTitle>Contact Us</SectionTitle>
        <Section className="contacts" container>
            <Item />
            <Item />
            <Item />
        </Section>
    </Page>;
}