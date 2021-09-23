import * as React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import styles from "./style.scss";

export interface HeaderProps {
    freePosition?: boolean;
}

export default class Header extends React.Component<HeaderProps> {
    public override render(): React.ReactNode {
        const freePosition: boolean = this.props.freePosition ?? false;
        const classList: string[] = [styles.main];
        if(freePosition)
            classList.push("free-position");
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