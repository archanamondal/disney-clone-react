import React from "react";
import "./style.css";
import styled from "styled-components";
import Slider from "react-slick";

const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 0 40px;

  @media (max-width: 480px) {
    width: 85%;
    height: 80px;
  }
`;

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src="./assets/images/badging4.jpg" alt="" />
      </div>
      <div>
        <Image src="./assets/images/badging5.jpg" alt="" />
      </div>
      <div>
        <Image src="./assets/images/scale6.jpg" alt="" />
      </div>
      <div>
        <Image src="./assets/images/scale16.jpg" alt="" />
      </div>
    </Slider>
  );
}

export default Carousel;
