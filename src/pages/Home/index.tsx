import * as React from "react";
import TopSlider from "./TopSlider";
import Page from "../common/Page";
import Products from "./Products";
import TopExclusive from "./TopExclusive";
import TrendingProducts from "./TrendingProducts";
import BottomSlider from "./BottomSlider";
import BottomExclusive from "./BottomExclusive";
import MobileApp from "./MobileApp";

export default class Home extends React.Component {
    public override render(): React.ReactNode {
        return <Page>
            <TopSlider />
            <Products />
            <TopExclusive />
            <TrendingProducts />
            <BottomSlider />
            <BottomExclusive />
            <MobileApp />
        </Page>;
    }
} 