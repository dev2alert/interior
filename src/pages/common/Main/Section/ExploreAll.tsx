import * as React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

export interface ExploreAllProps extends RouteComponentProps {
    to?: string;
}

class ExploreAll extends React.Component<ExploreAllProps> {
    public handleClick(): void {
        if(!this.props.to)
            return;
        this.props.history.push(this.props.to);
    }

    public override render(): React.ReactElement {
        return <button 
            className="explore-all"
            onClick={this.handleClick.bind(this)}    
        >
            Explore All
        </button>;
    }
}

export default withRouter(ExploreAll);