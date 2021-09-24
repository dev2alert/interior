import * as React from "react";
import Main from "./Main";
import Page from "../common/Page";
import Products from "./Products";

export default class Home extends React.Component {
    public override render(): React.ReactNode {
        return <Page>
            <Main />
            <Products />
        </Page>;
    }
} 