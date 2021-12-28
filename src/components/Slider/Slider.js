import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BannerOne from "../../assets/images/banners/1.jpg";
import BannerTwo from "../../assets/images/banners/2.jpg";
import BannerThree from "../../assets/images/banners/3.jpg";
import "./slider.css";

function Slider() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showIndicators={false}
      showThumbs={false}
      stopOnHover={true}
      dynamicHeight={false}
    >
      <div>
        <img src={BannerOne} alt=""/>
      </div>
      <div>
        <img src={BannerTwo} alt=""/>
      </div>
      <div>
        <img src={BannerThree} alt=""/>
      </div>
    </Carousel>
  );
}

export default Slider;
