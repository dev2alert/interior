import * as React from "react";

export interface PProps {
    children: string;
}

export default function P({children}: PProps): React.ReactElement {
    return <p className="paragraph">{children}</p>;
}