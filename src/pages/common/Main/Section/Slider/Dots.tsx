import * as React from "react";

export interface DotsProps {
    dots: any;
}

export default function Dots({dots}: DotsProps): React.ReactElement {
    return <div className="dots">
        {dots}
    </div>;
}