import * as React from "react";

export enum SubtitleColors {
    GREEN = "#43a047",
    BLUE = "#1e88e5",
    RED = "#e53935"
}

export interface SubtitleProps {
    color?: SubtitleColors;
    children: string;
}

export default function Subtitle({children, color}: SubtitleProps): React.ReactElement {
    const style: any = {};
    if(color)
        style["--color"] = color;
    return <h2 className="subtitle" style={style}>
        {children}
    </h2>;
}