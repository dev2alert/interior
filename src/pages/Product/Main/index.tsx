import * as React from "react";
import Section from "../../common/Main/Section";
import Block from "../../common/Main/Block";
import Title from "../../common/Main/Block/Title";
import Subtitle, {SubtitleColors} from "../../common/Main/Block/Subtitle";
import Button, {ButtonTypes} from "../../common/Main/Block/Button";
import P from "../../common/Main/Block/P";
import style from "./style.scss";
import PhotoSlider from "./PhotoSlider";

export interface IProduct {
    name: string;
    price: number;
    photos: string[];
    description: string;
}

export interface MainProps extends IProduct {}

export default function Main({photos, name, price, description}: MainProps): React.ReactElement {
    return <Section className={style.main} container>
        <div className="left">
            <PhotoSlider>{photos}</PhotoSlider>
        </div>
        <Block className="right">
            <Title className="name" bold>{name}</Title>
            <Subtitle color={SubtitleColors.RED}>Hot Deal</Subtitle>
            <div className="price">
                <span className="bottom">$</span>
                {price}
                <span className="bottom">/sq</span>
            </div>
            <Button className="order-us" type={ButtonTypes.NEXT}>Order Us</Button>
            <P className="description">
                {description}
            </P>
        </Block>
    </Section>;
}