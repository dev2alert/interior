import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Loading from "./pages/Loading";

export const Home = React.lazy(() => import("./pages/Home"));

export default class App extends React.Component {
    public override render(): React.ReactNode {
        return <BrowserRouter>
            <React.Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>;
    }
}