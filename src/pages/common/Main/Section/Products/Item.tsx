import * as React from "react";
import Button, {ButtonTypes} from "../../Block/Button";
import Block from "../../Block";
import P from "../../Block/P";
import Title from "../../Block/Title";
import {NavLink} from "react-router-dom";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    photoUrl: string;
}

export interface ItemProps extends IProduct {
    hover?: boolean;
}

export default function Item({hover = true, id, name, description, photoUrl}: ItemProps): React.ReactElement {
    return <div className="product">
        {hover ? <NavLink className="hover" to={`/products/${id}`}> 
            <Block className="container">
                <Button type={ButtonTypes.NEXT} />
                <Title size={1} bold>{name}</Title>
                <P>{description}</P>
            </Block>
        </NavLink> : null}
        <img className="image" src={photoUrl} />
    </div>;
}