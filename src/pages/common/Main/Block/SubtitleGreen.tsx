import * as React from "react";

export interface SubtitleGreenProps {
    children: string;
}

export default function SubtitleGreen({children}: SubtitleGreenProps): React.ReactElement {
    return <h5 className="subtitle-green">{children}</h5>;
}