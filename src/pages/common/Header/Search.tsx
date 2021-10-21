import * as React from "react";
import {action, makeObservable, observable} from "mobx";
import {observer} from "mobx-react";
import {withRouter, RouteComponentProps} from "react-router-dom";

export interface SearchProps extends RouteComponentProps {}

class Search extends React.Component<SearchProps> {
    public readonly inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    public inputHidden: boolean = true;
    public buttonHidden: boolean = false;
    public query: string = "";
    
    constructor(props: SearchProps) {
        super(props);
        makeObservable(this, {
            inputHidden: observable,
            buttonHidden: observable,
            query: observable,
            onFocus: action,
            onBlur: action,
            onInput: action
        });
        if(this.props.location.pathname === "/products") {
            const params = new URLSearchParams(this.props.location.search);
            this.query = params.get("q") ?? "";
        }
    }
    
    public onFocus(): void {
        this.inputHidden = false;
        this.buttonHidden = true;
    }

    public onInput(event: React.FormEvent<HTMLInputElement>): void {
        this.query = event.currentTarget.value;
    }

    public onKeyUp({key}: React.KeyboardEvent<HTMLInputElement>): void {
        switch(key) {
            case "Enter":
                const params = new URLSearchParams;
                params.set("q", this.inputRef.current?.value ?? "");
                this.props.history.push(`/products?${params}`);
            break;
        }
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
                    ref={this.inputRef}
                    className="container" 
                    type="search"
                    value={this.query}
                    placeholder="Поиск..."
                    autoFocus
                    onInput={this.onInput.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                />
            </div> : null}
            <button className={buttonClassList.join(" ")} onClick={this.onFocus.bind(this)} />
        </div>;
    }
}

export default withRouter(observer(Search));