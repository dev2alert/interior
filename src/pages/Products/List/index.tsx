import * as React from "react";
import {MemoryRouter, Switch, Route} from "react-router";
import Section from "../../common/Main/Section";
import Products from "./Products";
import Products2 from "./Products-2";
import Nav from "./Nav";
import styles from "./style.scss";
import Reload from "./Reload";

export default function List(): React.ReactElement {
    return <Section className={styles.main}>
        <div className="container">
            <MemoryRouter>
                <Nav />
                <Switch>
                    <Route path="/" component={Products} exact />
                    <Route path="/home" component={Products2} exact />
                    <Route path="/office" component={Products} exact />
                    <Route path="/furniture" component={Products2} exact />
                    <Route path="/modern" component={Products} exact />
                    <Route path="/classic" component={Products2} exact />
                </Switch>
                <Reload />
            </MemoryRouter>
        </div>
    </Section>;
}