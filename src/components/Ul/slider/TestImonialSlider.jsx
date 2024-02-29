import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1 (1).jpg";
import ava02 from "../../../assets/images/ava-2 (1).jpg";
import ava03 from "../../../assets/images/ava-3 (1).jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        good services
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Amine</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          nice
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Nori</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          good
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Mohamed</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;