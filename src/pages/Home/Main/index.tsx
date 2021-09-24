import * as React from "react";
import Block from "../../common/Main/Block";
import Button, { ButtonTypes } from "../../common/Main/Block/Button";
import P from "../../common/Main/Block/P";
import Slider from "../../common/Main/Block/Slider";
import SubtitleGreen from "../../common/Main/Block/SubtitleGreen";
import Title from "../../common/Main/Block/Title";
import Section from "../../common/Main/Section";
import styles from "./style.scss";

export default class Main extends React.Component {
    public override render(): React.ReactNode {
        return <Section>
            <Block className={styles.main}>
                <div className="container">
                    <div className="top">
                        <SubtitleGreen>TRENDING</SubtitleGreen>
                        <Title>Fishnet Chair</Title>
                        <P>
                            Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black or highly polished chrome.
                        </P>
                        <Button type={ButtonTypes.NEXT}>Order Us</Button>
                    </div>
                    <div className="bottom">
                        <Slider />
                    </div>
                </div>
            </Block>
        </Section>;
    }
}