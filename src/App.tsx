import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Loading from "./pages/Loading";
import "./App.scss";

export const Home = React.lazy(() => import("./pages/Home"));

export const Products = React.lazy(() => import("./pages/Products"));

export const Product = React.lazy(() => import("./pages/Product"));

export const Contact = React.lazy(() => import("./pages/Contact"));

export const NotFound = React.lazy(() => import("./pages/NotFound"));

export default class App extends React.Component {
    public override render(): React.ReactNode {
        return <BrowserRouter>
            <React.Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/products" component={Products} exact />
                    <Route path="/products/:id" component={Product} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route component={NotFound} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>;
    }
}