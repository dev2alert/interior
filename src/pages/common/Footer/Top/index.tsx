import * as React from "react";
import Column from "./Column";
import P from "./P";
import Link from "./Link";
import Input, { InputTypes } from "./Input";

export default function Top(): React.ReactElement {
    return <div className="top columns">
        <Column className="contact-us" title="Contact Us">
            <P>132A Bridge Road Richmond VIC Australia.</P>
            <P>Talk to us on 1300 132 info@interior.com.</P>
        </Column>
        <Column className="useful-info" title="Useful Information">
            <div className="side left">
                <Link to="#sales-terms">Sales terms</Link> 
                <Link to="#customer-care">Customer care</Link>
                <Link to="#delivery">Delivery</Link>
            </div>
            <div className="side right">
                <Link to="#architect-accounts">Architect accounts</Link>
                <Link to="#careers">Careers</Link>
                <Link to="#exchanges-returns">Exchanges & returns</Link>
            </div>
        </Column>
        <Column className="touch" title="Let’s Stay in Touch!">
            <P>
                Suscribe to know about our latest news, products and special offers just for suscribers.
            </P>
            <Input 
                type={InputTypes.EMAIL}
                placeholder="your email address"    
            />
        </Column>
    </div>;
}