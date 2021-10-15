import * as React from "react";

export enum SubtitleColors {
    GREEN = "#43a047",
    BLUE = "#1e88e5",
    RED = "#e53935"
}

export interface SubtitleProps {
    className?: string;
    color?: SubtitleColors;
    children: string;
}

export default function Subtitle({className, children, color}: SubtitleProps): React.ReactElement {
    const style: any = {};
    const classList: string[] = ["subtitle"];
    if(color)
        style["--color"] = color;
    if(className)
        classList.push(className);
    return <h2 className={classList.join(" ")} style={style}>
        {children}
    </h2>;
}