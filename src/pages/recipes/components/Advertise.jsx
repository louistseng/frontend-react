// 此為食譜首頁-上方（廣告跑馬）功能內容區塊

import React from 'react';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const Carouselstyle = {
  height: '80vh',
};

export default function Aaa() {
  return (
    <div>
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item style={Carouselstyle}>
              <img className="d-block w-100 h-100" src="https://fruitbox.blob.core.windows.net/banner/Image/Desktop/20210706173213.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item style={Carouselstyle}>
              <img className="d-block w-100 h-100" src="https://fruitbox.blob.core.windows.net/banner/Image/Desktop/20210717113953.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item style={Carouselstyle}>
              <img className="d-block w-100 h-100" src=" https://fruitbox.blob.core.windows.net/banner/Image/Desktop/20210413100703.webp" alt="" />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}
