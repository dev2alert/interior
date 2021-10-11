import * as React from "react";
import {Router, Route as ReactRoute, RouteProps} from "react-router-dom";
import {HistoryContext} from ".";

export default function Route({children, ...props}: RouteProps): React.ReactElement {
    const history = React.useContext(HistoryContext);
    return <ReactRoute {...props}>
        <Router history={history}>
            {children}
        </Router>
    </ReactRoute>;
}