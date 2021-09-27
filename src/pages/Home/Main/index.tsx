import * as React from "react";
import Slider from "../../common/Main/Section/Slider";
import View from "./View";

export default class Main extends React.Component {
    public override render(): React.ReactNode {
        return <Slider backgroundUrl="/test/images/slider-background.png">
            <View />
            <View />
            <View />
        </Slider>;
    }
}