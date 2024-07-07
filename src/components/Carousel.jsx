import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'; // Import custom CSS

const Carousel = () => {
  const destinations = [
    { id: 1, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_OHqMnlm5DAf_gtiRxXOUu_M0f-oHge2JGYarHa6mFphi_0fFIck1gLw&s=10", altText: "Destination 1" },
    { id: 2, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5XY_UHF78QKBK_XOHftd7R4aZdOkil9IfLgRWEc7k1OvX1ESLKL1e1yl&s=10", altText: "Destination 2" },
    { id: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpq8Ew1apvWs6TNzkasWqQ8AtlDJhSiq93dEpWcKl3Iw-N9ZJv9-8rDfs&s=10", altText: "Destination 3" },
    { id: 4, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0_9gDLAnI_DTBwaW2zMDajuETKlbWyIjCg&s", altText: "Destination 4" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false // Disable next and previous buttons
  };

  return (
    <div className="relative w-full pt-16">
      <Slider {...settings}>
        {destinations.map(destination => (
          <div key={destination.id} className="relative">
            <img src={destination.imageUrl} alt={destination.altText} className="w-full h-[600px] md:h-[500px] object-cover rounded" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;