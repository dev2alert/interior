import * as React from "react";
import Products from "../../common/Main/Section/Products";

export default function List(): React.ReactElement {
    return <Products columns={3} itemSize={350}>{[
        {
            id: 1,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-1.png"
        },
        {
            id: 2,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-2.png"
        },
        {
            id: 3,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-3.png"
        },
        {
            id: 4,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-4.png"
        },
        {
            id: 5,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-5.png"
        },
        {
            id: 6,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-6.png"
        },
        {
            id: 7,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-7.png"
        },
        {
            id: 8,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-8.png"
        },
        {
            id: 9,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-9.png"
        },
        {
            id: 10,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-10.png"
        },
        {
            id: 11,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-11.png"
        },
        {
            id: 12,
            name: "Fishnet Chair",
            description: "Seat and back with upholstery made of cold cure foam.",
            photoUrl: "/test/images/product-12.png"
        }
    ]}</Products>;
}