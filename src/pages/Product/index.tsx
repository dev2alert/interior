import * as React from "react";
import Page from "../common/Page";
import Nav from "../common/Main/Section/Nav";
import Main from "./Main";
import RelatedProducts from "./RelatedProducts";

export default class Product extends React.Component {
    public override render(): React.ReactElement {
        return <Page title="Product" header={{free: false}}>
            <Nav>{[
                {
                    name: "All",
                    path: "/"
                },
                {
                    name: "Home",
                    path: "/home"
                },
                {
                    name: "Office",
                    path: "/office"
                },
                {
                    name: "Furniture",
                    path: "/furniture"
                },
                {
                    name: "Modern",
                    path: "/modern"
                },
                {
                    name: "Classic",
                    path: "/classic"
                }
            ]}</Nav>
            <Main
                name="Fishnet Chair"
                price={36.7}
                photos={[
                    "/test/images/product-15.png",
                    "/test/images/product-16.png",
                    "/test/images/product-17.png"
                ]}
                description={`The majesty of Mountains - Ugmonk style.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`}
            />
            <RelatedProducts />
        </Page>;
    }
}