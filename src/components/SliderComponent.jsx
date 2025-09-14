// importing necessary libraries and components
import React, { useContext } from "react";
// slider imports
import Slider from "react-slick"; //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// importing styles
import "../styles/slider/slider.scss";
// importing context
import ApiContext from "../context/ApiContext";

const SliderComponent = () => {
  const { data, loading } = useContext(ApiContext);

  if (loading) return <div>Loading...</div>;

  const sliderProducts = data.slice(0, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderProducts.map((item) => (
          <div key={item.id} className="slide">
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
