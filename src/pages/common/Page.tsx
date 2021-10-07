import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export interface PageProps {
    title: string;
    children: React.ReactNode;
}

export default class Page extends React.Component<PageProps> {
    public override render(): React.ReactNode {
        document.title = `${this.props.title} — Interior`;
        return <>
            <Header free />
            <Main>{this.props.children}</Main>
            <Footer />
        </>;
    }
}