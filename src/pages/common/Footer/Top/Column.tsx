import * as React from "react";

export interface ColumnProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Column({title, children, className}: ColumnProps): React.ReactElement {
    const classList: string[] = ["column"];
    if(className)
        classList.push(className);
    return <div className={classList.join(" ")}>
        <h2 className="title">{title}</h2>
        <div className="content">
            {children}
        </div>
    </div>;
}