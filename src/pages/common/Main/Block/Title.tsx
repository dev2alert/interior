import * as React from "react";

export interface TitleProps {
    children: string;
}

export default function Title({children}: TitleProps): React.ReactElement {
    return <h1 className="title">{children}</h1>;
}