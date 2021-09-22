import * as React from "react";

export interface MainProps {
    children: React.ReactNode;
}

export default class Main extends React.Component<MainProps> {
    public override render(): React.ReactNode {
        return <main>{this.props.children}</main>;
    }
}