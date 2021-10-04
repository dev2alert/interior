import * as React from "react";

export interface TitleProps {
    children: React.ReactNode;
    bold?: boolean;
    size?: number;
}

export default function Title({children, bold = false, size = 6}: TitleProps): React.ReactElement | null {
    const classList: string[] = [
        bold ? "title-bold" : "title",
        `size-${size}`
    ];
    return <h1 className={classList.join(" ")}>{children}</h1>;
}