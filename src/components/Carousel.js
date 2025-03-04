
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Money from "../images/money.jpg";
import Interest from "../images/interest.jpg";
import Security from "../images/security.png";
import Stock from "../images/stock.jpg";
import Finance from "../images/finance.jpg"
import "../App.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { id: 1, text: "Saving Money", img: Money },
    { id: 2, text: "0% Interest", img: Interest },
    { id: 3, text: "Full Security", img: Security },
    { id: 4, text: "Stock Market", img: Stock },
    { id: 5, text: "Finance Management", img: Finance },
  ];

  return (
    <div id="carousel">
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
<img src={slide.img} alt={`Slide ${slide.id}`} style={{ height: "400px", width: "100%", objectFit: "cover" }} />
<div className="caption">
              {/* <h2>{slide.id} </h2> */}
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <h1 style={{color:"orangered"}} id="wel">Welcome</h1>

    </div>
    
  );
};

export default Carousel;