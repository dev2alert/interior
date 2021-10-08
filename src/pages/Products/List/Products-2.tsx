import * as React from "react";
import Products from "../../common/Main/Section/Products";

export default function List(): React.ReactElement {
    return <Products columns={3} itemSize={350}>{[
       "/test/images/product-12.png",
       "/test/images/product-11.png",
       "/test/images/product-10.png",
       "/test/images/product-9.png",
       "/test/images/product-8.png",
       "/test/images/product-7.png",
       "/test/images/product-6.png",
       "/test/images/product-5.png",
       "/test/images/product-4.png",
       "/test/images/product-3.png",
       "/test/images/product-2.png",
       "/test/images/product-1.png"
    ]}</Products>;
}