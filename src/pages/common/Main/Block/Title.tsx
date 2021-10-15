import * as React from "react";

export interface TitleProps {
    className?: string;
    children: React.ReactNode;
    bold?: boolean;
    size?: number;
}

export default function Title({className, children, bold = false, size = 6}: TitleProps): React.ReactElement | null {
    const classList: string[] = [
        bold ? "title-bold" : "title",
        `size-${size}`
    ];
    if(className)
        classList.push(className);
    return <h1 className={classList.join(" ")}>{children}</h1>;
}