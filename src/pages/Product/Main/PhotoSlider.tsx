import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";
import Slider from "react-slick";

export interface PhotoSliderProps {
    children: string[];
}

export default function PhotoSlider({children}: PhotoSliderProps): React.ReactElement {
    return <Slider 
        className="photo-slider"
        dots
        customPaging={(index) => {
            return <img className="photo" src={children[index]} />;
        }}    
    >
        {children.map((item, index) => {
            return <img key={index} className="photo" src={item} />;
        })}
    </Slider>;
}