import * as React from "react";
import Button, {ButtonTypes} from "../../common/Main/Block/Button";
import Block from "../../common/Main/Block";
import P from "../../common/Main/Block/P";

export interface ItemProps {
    children: string;
}

export default function Item({children}: ItemProps): React.ReactElement {
    return <div className="item">
        <Block className="hover">
            <Button type={ButtonTypes.NEXT} />
            <h5 className="title">Fishnet Chair</h5>
            <P>
                Seat and back with upholstery made of cold cure foam . Steel frame, available in matt powder-coated black or highly polished chrome.
            </P>
        </Block>
        <img className="image" src={children} />
    </div>;
}