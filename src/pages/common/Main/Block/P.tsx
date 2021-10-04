import * as React from "react";

export interface PProps {
    size?: number;
    children: string;
}

export default function P({size, children}: PProps): React.ReactElement {
    const classList: string[] = ["paragraph"];
    if(size)
        classList.push(`size-${size}`);
    return <p className={classList.join(" ")}>{children}</p>;
}