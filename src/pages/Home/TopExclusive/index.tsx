import * as React from "react";
import Block from "../../common/Main/Block";
import Button, {ButtonTypes} from "../../common/Main/Block/Button";
import P from "../../common/Main/Block/P";
import Subtitle, {SubtitleColors} from "../../common/Main/Block/Subtitle";
import Title from "../../common/Main/Block/Title";
import Section from "../../common/Main/Section";
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