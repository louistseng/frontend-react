import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carouselstyle = {
  height: '80vh',
};

export default function Carousels() {
  return (

    <Carousel className="">
      <Carousel.Item interval={1500} style={Carouselstyle}>
        <img
          className="d-block w-100 h-100"
          src="img/advertise001.png"
          alt="First slide"
          padding-top="0px"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500} style={Carouselstyle}>
        <img
          className="d-block w-100 h-100"
          src="img/advertise002.png"
          alt="Second slide"
          padding-top="0px"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500} style={Carouselstyle}>
        <img
          className="d-block w-100 h-100"
          src="img/advertise003.png"
          alt="Third slide"
          padding-top="0px"
        />
      </Carousel.Item>
    </Carousel>

  );
}
