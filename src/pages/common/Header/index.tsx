import * as React from "react";
import Logo from "./Logo";
import styles from "./style.scss";

export interface HeaderProps {}

export default class Header extends React.Component<HeaderProps> {
    public override render(): React.ReactNode {
        return <header className={styles.main}>
            <Logo />
        </header>;
    }
}