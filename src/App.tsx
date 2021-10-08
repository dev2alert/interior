import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Loading from "./pages/Loading";
import "./App.scss";

export const Home = React.lazy(() => import("./pages/Home"));

export const Products = React.lazy(() => import("./pages/Products"));

export default class App extends React.Component {
    public override render(): React.ReactNode {
        return <BrowserRouter>
            <React.Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/products" component={Products} />
                    <Route path="/history" component={Home} />
                    <Route path="/showroom" component={Home} />
                    <Route path="/contact" component={Home} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>;
    }
}