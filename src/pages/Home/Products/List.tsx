import * as React from "react";
import Item from "./Item";

export interface ListProps {
    children: string[];
}

export default function List({children}: ListProps): React.ReactElement {
    return <div className="list">
        {children.map((item, index) => {
            return <Item key={index}>{item}</Item>;
        })}
    </div>;
}