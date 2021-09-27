import * as React from "react";
import Main from "./Main";
import Page from "../common/Page";
import Products from "./Products";
import Exclusive1 from "./Exclusive-1";

export default class Home extends React.Component {
    public override render(): React.ReactNode {
        return <Page>
            <Main />
            <Products />
            <Exclusive1 />
        </Page>;
    }
} 