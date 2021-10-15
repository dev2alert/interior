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
                description="The majesty of Mountains - Ugmonk style. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            />
            <RelatedProducts />
        </Page>;
    }
}