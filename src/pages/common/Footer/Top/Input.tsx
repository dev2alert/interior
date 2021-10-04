import * as React from "react";

export enum InputTypes {
    EMAIL
}

export interface InputProps {
    type?: InputTypes;
    placeholder?: string;
}

export default function Input({type, placeholder}: InputProps): React.ReactElement {
    const classList: string[] = ["input"];
    switch(type) {
        case InputTypes.EMAIL:
            classList.push("email");
        break;
    }
    return <div className={classList.join(" ")}>
        <input 
            className="container" 
            type={type === InputTypes.EMAIL ? "email" : undefined} 
            placeholder={placeholder}
        />
        {type === InputTypes.EMAIL ? <button className="send" /> : null}
    </div>;
}