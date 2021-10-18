import * as React from "react";
import Block from "../common/Main/Block";
import Subtitle from "../common/Main/Block/Subtitle";
import Property from "./Property";

export default function Item(): React.ReactElement {
    return <Block className="contact">
        <div className="location" />
        <Subtitle>California</Subtitle>
        <Property name="Phone" value="1900 - 1234 -5678" />
        <Property name="Email" value="info@interior.com" />
        <Property name="Address" value="12 W 1st St, 90001 Los Angeles, California" valueParagraph />
    </Block>;
}