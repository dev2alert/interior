import * as React from "react";

export interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

export default function Section({children, className}: SectionProps): React.ReactElement {
    return <section className={className}>{children}</section>;
}