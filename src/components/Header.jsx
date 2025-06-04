import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderH from "./SliderH";
const Header = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true, // ✅ enables left/right arrows
};
  return (
    <Slider {...settings} className="overflow-hidden">
      <div>
        <SliderH />
      </div>
      <div>
        <SliderH />
      </div>
      <div>
        <SliderH />
      </div>
      <div>
        <SliderH />
      </div>
      <div>
        <SliderH />
      </div>
    </Slider>
  );
};

export default Header;
