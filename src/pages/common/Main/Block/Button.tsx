import * as React from "react";

export enum ButtonTypes {
    NONE,
    NEXT
}

export interface ButtonProps {
    className?: string;
    type?: ButtonTypes;
    children?: string;
}

export default function Button({className, children, type = ButtonTypes.NONE}: ButtonProps): React.ReactElement {
    const classList: string[] = ["button"];
    switch(type) {
        case ButtonTypes.NEXT:
            classList.push(children ? "next" : "next-background");
        break;
    }
    if(className)
        classList.push(className);
    return <button className={classList.join(" ")}>{children}</button>;
}