import * as React from "react";

export default function Slider(): React.ReactElement {
    return <div className="slider">
        <span className="dot" />
        <span className="dot active" />
        <span className="dot" />
    </div>;
}