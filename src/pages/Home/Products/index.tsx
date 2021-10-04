import * as React from "react";
import {MemoryRouter, Route} from "react-router-dom";
import Tabs from "../../common/Main/Section/Tabs";
import Flex from "../../common/Main/Section/Flex";
import Section from "../../common/Main/Section";
import styles from "./style.scss";
import List from "../../common/Main/Section/Products";
import ExploreAll from "../../common/Main/Section/ExploreAll";

export default class Products extends React.Component {
    public override render(): React.ReactNode {
        return <Section className={styles.main}>
            <div className="container">
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
                        <ExploreAll />
                    </Flex>
                    <div className="bottom">
                        <Route path="/" exact>
                            <List>{[
                                "/test/images/product-1.png",
                                "/test/images/product-2.png",
                                "/test/images/product-3.png",
                                "/test/images/product-4.png"
                            ]}</List>
                        </Route>
                        <Route path="/new" exact>
                            <List>{[
                                "/test/images/product-4.png",
                                "/test/images/product-3.png",
                                "/test/images/product-2.png",
                                "/test/images/product-1.png"
                            ]}</List>
                        </Route>
                    </div>
                </MemoryRouter>
            </div>
        </Section>;
    }
}