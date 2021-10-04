import * as React from "react";
import Slider from "../../common/Main/Section/Slider";
import View from "./View";

export default class BottomSlider extends React.Component {
    public override render(): React.ReactNode {
        return <Slider 
            backgroundUrl="/test/images/bottom-slider-background.png"
            backgroundColor="#e1e6ef"    
        >
            <View />
            <View />
            <View />
        </Slider>;
    }
}