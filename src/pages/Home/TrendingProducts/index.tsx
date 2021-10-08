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
        return <Section className={styles.main}>
            <Block className="container">
                <Flex
                    className="top"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Title bold>Trending Products</Title>
                    <ExploreAll />
                </Flex>
                <div className="bottom">
                    <Products columns={3} itemSize={350}>
                        {[
                            "/test/images/product-10.png",
                            "/test/images/product-9.png",
                            "/test/images/product-8.png",
                            "/test/images/product-7.png",
                            "/test/images/product-6.png",
                            "/test/images/product-5.png"
                        ]}
                    </Products>
                </div>
            </Block>
        </Section>;
    }
}