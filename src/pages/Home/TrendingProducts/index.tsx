import * as React from "react";
import Section from "../../common/Main/Section";
import Flex from "../../common/Main/Section/Flex";
import Block from "../../common/Main/Block";
import styles from "./style.scss";
import Title from "../../common/Main/Block/Title";
import ExploreAll from "../../common/Main/Section/ExploreAll";
import Products from "../../common/Main/Section/Products";

export default class TrendingProducts extends React.Component {
    public override render(): React.ReactElement {
        return <Section className={styles.main} container>
            <Block className="container">
                <Flex
                    className="top"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Title bold>Trending Products</Title>
                    <ExploreAll to="/products" />
                </Flex>
                <div className="bottom">
                    <Products columns={3} itemSize={350}>
                        {[
                            {
                                id: 10,
                                name: "Fishnet Chair",
                                description: "Seat and back with upholstery made of cold cure foam.",
                                photoUrl: "/test/images/product-10.png"
                            },
                            {
                                id: 9,
                                name: "Fishnet Chair",
                                description: "Seat and back with upholstery made of cold cure foam.",
                                photoUrl: "/test/images/product-9.png"
                            },
                            {
                                id: 8,
                                name: "Fishnet Chair",
                                description: "Seat and back with upholstery made of cold cure foam.",
                                photoUrl: "/test/images/product-8.png"
                            },
                            {
                                id: 7,
                                name: "Fishnet Chair",
                                description: "Seat and back with upholstery made of cold cure foam.",
                                photoUrl: "/test/images/product-7.png"
                            },
                            {
                                id: 6,
                                name: "Fishnet Chair",
                                description: "Seat and back with upholstery made of cold cure foam.",
                                photoUrl: "/test/images/product-6.png"
                            },
                            {
                                id: 5,
                                name: "Fishnet Chair",
                                description: "Seat and back with upholstery made of cold cure foam.",
                                photoUrl: "/test/images/product-5.png"
                            }
                        ]}
                    </Products>
                </div>
            </Block>
        </Section>;
    }
}