import * as React from "react";
import Bottom from "./Bottom";
import styles from "./style.scss";
import Top from "./Top";

export interface FooterProps {}

export default class Footer extends React.Component<FooterProps> {
    public override render(): React.ReactNode {
        return <footer className={styles.main}>
            <div className="container">
                <Top />
                <Bottom />
            </div>
        </footer>;
    }
}