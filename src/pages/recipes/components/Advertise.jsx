// 此為食譜首頁-上方（廣告跑馬）功能內容區塊

import React from 'react';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import background7 from './img/07.png';
import background8 from './img/08.png';
import background9 from './img/09.png';

const Carouselstyle = {
  height: '70vh',
};

export default function Aaa() {
  return (
    <div>
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item style={Carouselstyle}>
              <img className="d-block w-100 h-100" src={background7} alt="" />
            </Carousel.Item>
            <Carousel.Item style={Carouselstyle}>
              <img className="d-block w-100 h-100" src={background8} alt="" />
            </Carousel.Item>
            <Carousel.Item style={Carouselstyle}>
              <img className="d-block w-100 h-100" src={background9} alt="" />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}
