import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// importing the react-slick library for the slider functionality
import Slider from "react-slick";
// importing the ApiContext to access the fetched data
import ApiContext from "../context/ApiContext";
// importing the ProductCard component to display each product in the slider
import ProductCard from "./ProductCard";
// importing styles for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider/slider.scss";
import Button from "./Button";

const SliderComponent = () => {
  const { data, loading } = useContext(ApiContext);

  // calling the useNavigate hook at the top, before the conditional return
  const navigate = useNavigate();

  if (loading) return <p>Loading</p>;

  // Function for the button to redirect to the category page
  const handleButtonClick = () => {
    navigate("/categorypage"); // route path to the category page
  };

  // 3 products only
  const productsToShow = data.slice(0, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // show 1 slide at a time
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1, // show 1 slide on smaller screens
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="fixed-content">
        <h1>FIND YOUR PERFECT MATCH WITH WHAT YOU NEED</h1>
        <p>
          Discover everything you need for your well-being at{" "}
          <strong>FLEXLADEN</strong> — from essentials that spark joy to little
          luxuries that make life sweeter. Because feeling good is not a trend,
          it's a lifestyle!
        </p>
        <Button onClick={handleButtonClick}>Shop now</Button>
      </div>
      <div className="slick-slider">
        <Slider {...settings}>
          {productsToShow.map((product) => (
            <div key={product.id} className="slide">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
