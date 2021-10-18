import * as React from "react";
import Footer, {FooterProps} from "./Footer";
import Header, {HeaderProps} from "./Header";
import Main, {MainProps} from "./Main";

export interface PageProps {
    title: string;
    header?: HeaderProps;
    main?: MainProps;
    footer?: FooterProps;
    children: React.ReactNode;
}

export default class Page extends React.Component<PageProps> {
    public override render(): React.ReactNode {
        document.title = `${this.props.title} — Interior`;
        return <>
            <Header free {...this.props.header} />
            <Main {...this.props.main}>{this.props.children}</Main>
            <Footer {...this.props.footer} />
        </>;
    }
}