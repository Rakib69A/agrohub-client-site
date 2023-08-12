import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ResponsiveCarousel = () => {
    return (
        <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000} // Time in milliseconds between each slide transition
    >
      <div>
        <img src="https://img.freepik.com/premium-photo/agricultural-with-graphic-concepts-modern-agricultural-technology-digital-farm-smart-farming-innovation_615349-1098.jpg?w=2000" alt="Carousel Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb34VBwX9QSpO10-HPBKevW5dM6AO9WKYdgWzVmLCDYL88Z2G_1a3PmhaZw-1jdgg9krg&usqp=CAU" alt="Carousel Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWz_AB7oB8zybY52OcEFIJgptyBlMdtc_WmBstIHf4hRa95BU-orO2dP50RlAiEo2Sc8&usqp=CAU" alt="Carousel Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
    );
};

export default ResponsiveCarousel;