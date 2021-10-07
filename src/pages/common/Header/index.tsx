import * as React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import styles from "./style.scss";

export interface HeaderProps {
    free?: boolean;
}

export default class Header extends React.Component<HeaderProps> {
    public override render(): React.ReactNode {
        const free: boolean = this.props.free ?? false;
        const classList: string[] = [styles.main];
        if(free)
            classList.push("free");
        return <header className={classList.join(" ")}>
            <div className="container">
                <div className="left">
                    <Logo />
                </div>
                <div className="right">
                    <Nav />
                    <Search />
                </div>
            </div>
        </header>;
    }
}