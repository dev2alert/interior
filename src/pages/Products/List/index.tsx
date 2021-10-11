import * as React from "react";
import {MemoryRouter, Switch, useHistory} from "react-router";
import Section from "../../common/Main/Section";
import Products from "./Products";
import Products2 from "./Products-2";
import Route from "./Route";
import Nav from "./Nav";
import styles from "./style.scss";
import Reload from "./Reload";

export const HistoryContext: React.Context<any> = React.createContext(null);

export default function List(): React.ReactElement {
    const history = useHistory();
    return <Section className={styles.main} container>
        <HistoryContext.Provider value={history}>
            <MemoryRouter>
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <Products />
                    </Route>
                    <Route path="/home" exact>
                        <Products2 />
                    </Route>
                    <Route path="/office" exact>
                        <Products />
                    </Route>
                    <Route path="/furniture" exact>
                        <Products2 />
                    </Route>
                    <Route path="/modern" exact>
                        <Products />
                    </Route>
                    <Route path="/classic" exact>
                        <Products2 />
                    </Route>
                </Switch>
                <Reload />
            </MemoryRouter>
        </HistoryContext.Provider>
    </Section>;
}