import * as React from "react";

export interface LinkProps {
    className?: string;
    to: string;
}

export default function Link({to, className}: LinkProps): React.ReactElement {
    const classList: string[] = ["link"];
    if(className)
        classList.push(className);
    return <a className={classList.join(" ")} href={to} target="_blank" />;
}