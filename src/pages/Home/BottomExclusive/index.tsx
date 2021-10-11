import * as React from "react";
import Section from "../../common/Main/Section";
import Block from "../../common/Main/Block";
import Subtitle, {SubtitleColors} from "../../common/Main/Block/Subtitle";
import Title from "../../common/Main/Block/Title";
import P from "../../common/Main/Block/P";
import Button, {ButtonTypes} from "../../common/Main/Block/Button";
import Products from "../../common/Main/Section/Products";
import styles from "./style.scss";

export default function BottomExclusive(): React.ReactElement {
    return <Section className={styles.main} container>
        <Block className="left">
            <Subtitle color={SubtitleColors.BLUE}>exclusive</Subtitle>
            <Title bold size={2}>Fishnet Chair</Title>
            <P>
                Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black or highly polished chrome.
            </P>
            <Button type={ButtonTypes.NEXT}>Order Us</Button>
        </Block>
        <div className="right">
            <Products columns={2} itemSize={255}>{[
                {
                    id: 11,
                    name: "Fishnet Chair",
                    description: "Seat and back with upholstery made of cold cure foam.",
                    photoUrl: "/test/images/product-11.png"
                },
                {
                    id: 12,
                    name: "Fishnet Chair",
                    description: "Seat and back with upholstery made of cold cure foam.",
                    photoUrl: "/test/images/product-12.png"
                },
                {
                    id: 13,
                    name: "Fishnet Chair",
                    description: "Seat and back with upholstery made of cold cure foam.",
                    photoUrl: "/test/images/product-13.png"
                },
                {
                    id: 14,
                    name: "Fishnet Chair",
                    description: "Seat and back with upholstery made of cold cure foam.",
                    photoUrl: "/test/images/product-14.png"
                }
            ]}</Products>
        </div>
    </Section>;
}