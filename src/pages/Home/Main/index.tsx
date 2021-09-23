import * as React from "react";
import Block from "../../common/Block";
import styles from "./style.scss";

export default class Main extends React.Component {
    public override render(): React.ReactNode {
        return <Block className={styles.main}>
            <div className="container">
                <div className="top">
                    <h5 className="subtitle-green">TRENDING</h5>
                    <h1 className="title">Fishnet Chair</h1>
                    <p>
                        Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black or highly polished chrome.
                    </p>
                    <button className="button next">Order Us</button>
                </div>  
            </div>
        </Block>;
    }
}