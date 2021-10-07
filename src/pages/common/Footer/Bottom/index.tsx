import * as React from "react";
import Link from "./Link";

export default function Bottom(): React.ReactElement {
    return <div className="bottom">
        <div className="copyright">
            ©Copyright - INTERIOR 2016. All Rights Reserved.
        </div>
        <div className="social">
            <Link className="facebook" to="/#facebook" />
            <Link className="twitter" to="/#twitter" />
            <Link className="google-plus" to="/#google-plus" />
            <Link className="pinterest" to="/#pinterest" />
        </div>
        <div className="policy">
            Terms & Conditions / Privacy policy & Cookies
        </div>
    </div>;
}