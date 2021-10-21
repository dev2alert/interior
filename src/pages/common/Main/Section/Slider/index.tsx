import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";
import SlickSlider from "react-slick";
import Section from "..";
import styles from "./style.scss";

export interface SliderProps {
    backgroundUrl?: string;
    backgroundColor?: string;
    children: React.ReactNode;
}

export default function Slider({backgroundUrl, backgroundColor, children}: SliderProps): React.ReactElement {
    const style: any = {};
    if(backgroundUrl)
        style["--background"] = `url(${JSON.stringify(backgroundUrl)})`;
    if(backgroundColor)
        style["--background-color"] = backgroundColor;
    return <Section 
        className={styles.main} 
        style={style}
    >
        <SlickSlider 
            initialSlide={1}
            dots
            dotsClass="dots"
            customPaging={() => <span className="dot" />}
            nextArrow={<></>}
            prevArrow={<></>}
            autoplay
            autoplaySpeed={3000}
        >
            {children}
        </SlickSlider>
    </Section>;
}