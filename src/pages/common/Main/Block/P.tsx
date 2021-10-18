import * as React from "react";

export interface PProps {
    className?: string;
    size?: number;
    children: string;
}

export default function P({className, size, children}: PProps): React.ReactElement {
    const classList: string[] = ["paragraph"];
    if(size)
        classList.push(`size-${size}`);
    if(className)
        classList.push(className);
    return <p className={classList.join(" ")}>{children}</p>;
}