import * as React from "react";

export interface MainProps {
    className?: string;
    children?: React.ReactNode;
}

export default class Main extends React.Component<MainProps> {
    public override render(): React.ReactNode {
        return <main className={this.props.className}>
            {this.props.children}
        </main>;
    }
}