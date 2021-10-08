import * as React from "react";
import Button, {ButtonTypes} from "../../Block/Button";
import Block from "../../Block";
import P from "../../Block/P";
import Title from "../../Block/Title";
import {NavLink} from "react-router-dom";

export interface ItemProps {
    hover?: boolean;
    children: string;
}

export default function Item({hover = true, children}: ItemProps): React.ReactElement {
    return <div className="product">
        {hover ? <NavLink className="hover" to="/products/1"> 
            <Block className="container">
                <Button type={ButtonTypes.NEXT} />
                <Title size={1} bold>Fishnet Chair</Title>
                <P>Seat and back with upholstery made of cold cure foam.</P>
            </Block>
        </NavLink> : null}
        <img className="image" src={children} />
    </div>;
}