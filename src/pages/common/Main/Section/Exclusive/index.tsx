import * as React from "react";
import Block from "../../Block";
import Button, {ButtonTypes} from "../../Block/Button";
import P from "../../Block/P";
import Subtitle, {SubtitleColors} from "../../Block/Subtitle";
import Title from "../../Block/Title";
import Section from "..";
import styles from "./style.scss";

export default class TopExclusive extends React.Component {
    public override render(): React.ReactElement {
        return <Section className={styles.main}>
            <Block className="block left">
                <Subtitle color={SubtitleColors.BLUE}>exclusive</Subtitle>
                <Title bold size={2}>Fishnet Chair</Title>
                <P>Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black or highly polished chrome.</P>
                <Button type={ButtonTypes.NEXT}>Order Us</Button>
            </Block>
            <Block className="block right">
                <Subtitle color={SubtitleColors.BLUE}>exclusive</Subtitle>
                <Title bold size={2}>Fishnet Chair</Title>
                <P>Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black or highly polished chrome.</P>
                <Button type={ButtonTypes.NEXT}>Order Us</Button>
            </Block>
        </Section>;
    }
}