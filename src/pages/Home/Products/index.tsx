import * as React from "react";
import {MemoryRouter, RouteComponentProps, withRouter, Router} from "react-router-dom";
import Route from "./Route";
import Tabs from "../../common/Main/Section/Tabs";
import Flex from "../../common/Main/Section/Flex";
import Section from "../../common/Main/Section";
import styles from "./style.scss";
import List from "../../common/Main/Section/Products";
import ExploreAll from "../../common/Main/Section/ExploreAll";

export const HistoryContext: React.Context<any> = React.createContext(null);

class Products extends React.Component<RouteComponentProps> {
    public override render(): React.ReactNode {
        return <Section className={styles.main} container>
            <MemoryRouter>
                <Flex 
                    className="top" 
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Tabs>{[
                        {
                            name: "Featured",
                            path: "/"
                        }, 
                        {
                            name: "New",
                            path: "/new"
                        }
                    ]}</Tabs>
                    <Router history={this.props.history}>
                        <ExploreAll to="/products" />
                    </Router>
                </Flex>
                <div className="bottom">
                    <HistoryContext.Provider value={this.props.history}>
                        <Route path="/" exact>
                            <List>{[
                                {
                                    id: 1,
                                    name: "Fishnet Chair (2)",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-1.png"
                                },
                                {
                                    id: 2,
                                    name: "Fishnet Chair",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-2.png"
                                },
                                {
                                    id: 3,
                                    name: "Fishnet Chair (4)",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-3.png"
                                },
                                {
                                    id: 4,
                                    name: "Fishnet Chair (3)",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-4.png"
                                }
                            ]}</List>
                        </Route>
                        <Route path="/new" exact>
                            <List>{[
                                {
                                    id: 4,
                                    name: "Fishnet Chair",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-4.png"
                                },
                                {
                                    id: 3,
                                    name: "Fishnet Chair",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-3.png"
                                },
                                {
                                    id: 2,
                                    name: "Fishnet Chair",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-2.png"
                                },
                                {
                                    id: 1,
                                    name: "Fishnet Chair",
                                    description: "Seat and back with upholstery made of cold cure foam.",
                                    photoUrl: "/test/images/product-1.png"
                                }
                            ]}</List>
                        </Route>
                    </HistoryContext.Provider>
                </div>
            </MemoryRouter>
        </Section>;
    }
}

export default withRouter(Products);