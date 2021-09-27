import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";
import SlickSlider from "react-slick";
import Section from "..";
import styles from "./style.scss";
import Dots from "./Dots";

export interface SliderProps {
    backgroundUrl?: string;
    children: React.ReactNode;
}

export default function Slider({backgroundUrl, children}: SliderProps): React.ReactElement {
    return <Section 
        className={styles.main} 
        style={{"--background": backgroundUrl ? `url(${JSON.stringify(backgroundUrl)})` : undefined}}
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