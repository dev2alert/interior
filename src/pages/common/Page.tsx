import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export interface PageProps {
    children: React.ReactNode;
}

export default class Page extends React.Component<PageProps> {
    public override render(): React.ReactNode {
        return <>
            <Header freePosition />
            <Main>{this.props.children}</Main>
            <Footer />
        </>;
    }
}