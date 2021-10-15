import * as React from "react";
import {NavLink} from "react-router-dom";

export interface ExploreAllProps {
    to: string;
}

export default class ExploreAll extends React.Component<ExploreAllProps> {
    public override render(): React.ReactElement {
        return <NavLink className="explore-all" to={this.props.to}>
            Explore All
        </NavLink>;
    }
}