import * as React from "react";
import {NavLink} from "react-router-dom";

export default function Bottom(): React.ReactElement {
    return <div className="bottom">
        <div className="copyright">
            ©Copyright - INTERIOR 2016. All Rights Reserved.
        </div>
        <div className="social">
            <NavLink className="link facebook" to="/#facebook" />
        </div>
        <div className="policy">
            Terms & Conditions / Privacy policy & Cookies
        </div>
    </div>;
}