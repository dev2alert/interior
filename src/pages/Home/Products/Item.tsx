import * as React from "react";
import Button, {ButtonTypes} from "../../common/Main/Block/Button";
import Block from "../../common/Main/Block";
import P from "../../common/Main/Block/P";
import Title from "../../common/Main/Block/Title";

export interface ItemProps {
    children: string;
}

export default function Item({children}: ItemProps): React.ReactElement {
    return <div className="item">
        <Block className="hover">
            <Button type={ButtonTypes.NEXT} />
            <Title size={1} bold>Fishnet Chair</Title>
            <P>Seat and back with upholstery made of cold cure foam.</P>
        </Block>
        <img className="image" src={children} />
    </div>;
}