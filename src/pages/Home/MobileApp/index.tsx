import * as React from "react";
import Block from "../../common/Main/Block";
import P from "../../common/Main/Block/P";
import Subtitle from "../../common/Main/Block/Subtitle";
import Title from "../../common/Main/Block/Title";
import Section from "../../common/Main/Section";
import styles from "./style.scss";

export default function MobileApp(): React.ReactElement {
    return <Section className={styles.main}>
        <Block className="container">
            <Subtitle>mobile app</Subtitle>
            <Title>Find. Follow.<br /> Favorite.</Title>
            <P size={2}>Save your favorites and share your style.</P>
            <div className="links">
                <a className="link app-store" href="#app-store" />
                <a className="link google-play" href="#google-play" />
            </div>
        </Block>
    </Section>;
}