import * as React from "react";
import Block from "../../common/Main/Block";
import Title from "../../common/Main/Block/Title";
import Section from "../../common/Main/Section";
import ExploreAll from "../../common/Main/Section/ExploreAll";
import Flex from "../../common/Main/Section/Flex";
import Products from "../../common/Main/Section/Products";
import styles from "./style.scss";

export default function RelatedProducts(): React.ReactElement {
    return <Section className={styles.main} container>
        <Block className="top">
            <Flex justifyContent="space-between" alignItems="center">
                <Title bold>Related Products</Title>
                <ExploreAll to="/products" />
            </Flex>
        </Block>
        <Products columns={3} itemSize={350}>{[
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
            }
        ]}</Products>
    </Section>;
}