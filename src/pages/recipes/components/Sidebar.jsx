// 此為食譜首頁-左邊（食譜側）邊欄區塊

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import background1 from './img/01.png';
import background2 from './img/02.png';
import background3 from './img/03.png';
import background4 from './img/04.png';
import background5 from './img/05.png';
import background6 from './img/06.png';

export default function Sidebar(props) {
  const { setId } = props;
  return (
    <div className="more">
      <div className="sid1">
        <h4>
          推薦分類
        </h4>
        <hr />
      </div>
      <div className="sub-menu">
        <Nav>
          <Nav.Item>
            <Nav.Link onClick={() => setId(1)}>
              <Image src={background1} fluid />
            </Nav.Link>
            <Nav.Link onClick={() => setId(2)}>
              <img src={background2} alt="" />
            </Nav.Link>
            <Nav.Link onClick={() => setId(3)}>
              <img src={background3} alt="" />
            </Nav.Link>
            <Nav.Link onClick={() => setId(4)}>
              <img src={background4} alt="" />
            </Nav.Link>
            <Nav.Link onClick={() => setId(5)}>
              <img src={background5} alt="" />
            </Nav.Link>
            <Nav.Link onClick={() => setId(6)}>
              <img src={background6} alt="" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
