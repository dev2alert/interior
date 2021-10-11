import * as React from "react";
import {NavLink} from "react-router-dom";
import Block from "../../common/Main/Block";
import P from "../../common/Main/Block/P";
import Subtitle from "../../common/Main/Block/Subtitle";
import Title from "../../common/Main/Block/Title";
import Section from "../../common/Main/Section";
import styles from "./style.scss";

export default function MobileApp(): React.ReactElement {
    return <Section className={styles.main} container>
        <Block>
            <Subtitle>mobile app</Subtitle>
            <Title>Find. Follow.<br /> Favorite.</Title>
            <P size={2}>Save your favorites and share your style.</P>
            <div className="links">
                <NavLink className="link app-store" to="/#app-store" />
                <NavLink className="link google-play" to="/#google-play" />
            </div>
        </Block>
    </Section>;
}