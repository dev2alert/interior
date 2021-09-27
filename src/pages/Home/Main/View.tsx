import * as React from "react";
import Block from "../../common/Main/Block";
import Button, {ButtonTypes} from "../../common/Main/Block/Button";
import P from "../../common/Main/Block/P";
import SubtitleGreen from "../../common/Main/Block/SubtitleGreen";
import Title from "../../common/Main/Block/Title";
import styles from "./style.scss";

export default function View(): React.ReactElement {
    return <Block className={styles.view}>
        <div className="container">
            <SubtitleGreen>TRENDING</SubtitleGreen>
            <Title>Fishnet Chair</Title>
            <P>
                Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black or highly polished chrome.
            </P>
            <Button type={ButtonTypes.NEXT}>Order Us</Button>
        </div>
    </Block>;
}