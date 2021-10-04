import * as React from "react";

export interface FlexProps {
    className?: string;
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
}

export default function Flex({className, children, justifyContent, alignItems}: FlexProps): React.ReactElement {
    const classList: string[] = ["flex"];
    if(className)
        classList.push(className);
    const style: any = {};
    if(justifyContent)
        style.justifyContent = justifyContent;
    if(alignItems)
        style.alignItems = alignItems;  
    return <div className={classList.join(" ")} style={style}>
        {children}
    </div>;
}