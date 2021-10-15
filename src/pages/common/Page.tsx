import * as React from "react";
import Footer, {FooterProps} from "./Footer";
import Header, {HeaderProps} from "./Header";
import Main from "./Main";

export interface PageProps {
    title: string;
    header?: HeaderProps;
    footer?: FooterProps;
    children: React.ReactNode;
}

export default class Page extends React.Component<PageProps> {
    public override render(): React.ReactNode {
        document.title = `${this.props.title} — Interior`;
        return <>
            <Header free {...this.props.header} />
            <Main>{this.props.children}</Main>
            <Footer {...this.props.footer} />
        </>;
    }
}