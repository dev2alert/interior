import * as React from "react";
import {action, makeObservable, observable} from "mobx";
import {observer} from "mobx-react";

class Search extends React.Component {
    public inputHidden: boolean = true;
    public buttonHidden: boolean = false;
    
    constructor(props: {}) {
        super(props);
        makeObservable(this, {
            inputHidden: observable,
            buttonHidden: observable,
            onFocus: action,
            onBlur: action
        });
    }
    
    public onFocus(): void {
        this.inputHidden = false;
        this.buttonHidden = true;
    }

    public onBlur(): void {
        this.inputHidden = true;
        this.buttonHidden = false;
    }

    public override render(): React.ReactElement {
        const buttonClassList: string[] = ["button"];
        if(this.buttonHidden)
            buttonClassList.push("hidden");
        return <div className="search">
            {!this.inputHidden ? <div className="input">
                <input 
                    className="container" 
                    type="search"
                    placeholder="Поиск..."
                    autoFocus 
                    onBlur={this.onBlur.bind(this)}
                />
            </div> : null}
            <button className={buttonClassList.join(" ")} onClick={this.onFocus.bind(this)} />
        </div>;
    }
}

export default observer(Search);