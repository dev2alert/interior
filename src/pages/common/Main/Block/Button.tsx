import * as React from "react";

export enum ButtonTypes {
    NONE,
    NEXT
}

export interface ButtonProps {
    type?: ButtonTypes;
    children?: string;
}

export default function Button({children, type = ButtonTypes.NONE}: ButtonProps): React.ReactElement {
    const classList: string[] = ["button"];
    switch(type) {
        case ButtonTypes.NEXT:
            classList.push(children ? "next" : "next-background");
        break;
    }
    return <button className={classList.join(" ")}>{children}</button>;
}