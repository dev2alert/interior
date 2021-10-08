import * as React from "react";
import Tabs from "../../common/Main/Section/Tabs";

export default function Nav(): React.ReactElement {
    return <Tabs className="nav">{[
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
    ]}</Tabs>;
}