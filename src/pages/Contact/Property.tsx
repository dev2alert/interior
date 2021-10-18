import * as React from "react";
import P from "../common/Main/Block/P";

export interface PropertyProps {
    name: string;
    value: string;
    valueParagraph?: boolean;
}

export default function Property({name, value, valueParagraph = false}: PropertyProps): React.ReactElement {
    return <div className="property">
        <div className="name">{name}: </div>
        {!valueParagraph ? <div className="value">{value}</div> : <P className="value">{value}</P>}
    </div>;
}