import * as React from "react";
import {Route as ReactRoute, RouteProps, Router} from "react-router-dom";
import {HistoryContext} from ".";

export default function Route({children, ...props}: RouteProps): React.ReactElement {
    const history = React.useContext(HistoryContext);
    return <ReactRoute {...props}>
        <Router history={history}>
            {children}
        </Router>
    </ReactRoute>;
}