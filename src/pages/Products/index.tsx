import * as React from "react";
import Page from "../common/Page";
import SectionTitle from "../common/Main/Section/Title";
import Exclusive from "../common/Main/Section/Exclusive";
import List from "./List";

export default function Products(): React.ReactElement {
    return <Page title="Products">
        <SectionTitle>Our Products Range</SectionTitle>
        <List />
        <Exclusive />
    </Page>;
}