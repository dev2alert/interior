import * as React from "react";
import Nav from "../../common/Main/Section/Nav";
import Section from "../../common/Main/Section";
import styles from "./style.scss";
import List from "./List";

export default class Products extends React.Component {
    public override render(): React.ReactNode {
        return <Section className={styles.main}>
            <div className="container">
                <div className="top">
                    <Nav>{["Featured", "New"]}</Nav>
                    <button className="explore-all">Explore All</button>
                </div>
                <div className="bottom">
                    <List>{[
                        "/test/images/product-1.png",
                        "/test/images/product-2.png",
                        "/test/images/product-3.png",
                        "/test/images/product-4.png"
                    ]}</List>
                </div>
            </div>
        </Section>;
    }
}