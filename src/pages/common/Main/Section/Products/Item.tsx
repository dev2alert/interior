import * as React from "react";
import Button, {ButtonTypes} from "../../Block/Button";
import Block from "../../Block";
import P from "../../Block/P";
import Title from "../../Block/Title";

export interface ItemProps {
    hover?: boolean;
    children: string;
}

export default function Item({hover = true, children}: ItemProps): React.ReactElement {
    return <div className="product">
        {hover ? <Block className="hover">
            <Button type={ButtonTypes.NEXT} />
            <Title size={1} bold>Fishnet Chair</Title>
            <P>Seat and back with upholstery made of cold cure foam.</P>
        </Block> : null}
        <img className="image" src={children} />
    </div>;
}