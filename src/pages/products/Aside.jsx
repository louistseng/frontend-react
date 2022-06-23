/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React from 'react';
// import { withRouter, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaFish, FaLeaf, FaUtensils } from 'react-icons/fa';

export default function Aside(props) {
  const { setId } = props;

  const style = {
    sidebar: {
      backgroundColor: '#E8DDCA',
      width: '300px',
      padding: '60px',
      margin: '30px 0',
      height: '1800px',
    },
    sidebarTitle: {
      fontSize: '22px',
      margin: '0px -10px',
    },
    sidebarList: {
      fontSize: '18px',
      margin: '35px',
    },
    sidebarItem: {
      textDecoration: 'none',
      color: '#505050',
    },
    sidebarIcons: {
      marginRight: '8px',
    },
  };
  return (
    <div
      className="col-md-12 d-none d-md-block sidebar sidebar-sticky asideNav"
      style={style.sidebar}
    //   activeKey="#link1"
    >
      <Nav>
        <Nav.Item style={style.sidebarTitle}>
          <FaUtensils style={style.sidebarIcons} />
          肉品
        </Nav.Item>
        <Nav.Item
          style={style.sidebarList}
          className="sidebarItem"
        >
          <Nav.Link
            style={style.sidebarItem}
            onClick={() => setId(1)}
            eventKey="#link1"
          >
            牛肉類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={style.sidebarList}
          className="sidebarItem"
        >
          <Nav.Link
            style={style.sidebarItem}
            onClick={() => setId(2)}
            eventKey="#link1"
          >
            豬肉類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={style.sidebarList}
          className="sidebarItem"
        >
          <Nav.Link
            style={style.sidebarItem}
            onClick={() => setId(3)}
            eventKey="#link1"
          >
            雞肉類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarTitle}>
          <FaLeaf style={style.sidebarIcons} />
          蔬菜
        </Nav.Item>
        <Nav.Item
          style={style.sidebarList}
          className="sidebarItem"
        >
          <Nav.Link
            style={style.sidebarItem}
            onClick={() => setId(4)}
            eventKey="#link1"
          >
            葉菜類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={style.sidebarList}
          className="sidebarItem"
        >
          <Nav.Link
            style={style.sidebarItem}
            onClick={() => setId(5)}
            eventKey="#link1"
          >
            根莖類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarTitle}>
          <FaFish style={style.sidebarIcons} />
          海鮮
        </Nav.Item>
        <Nav.Item
          style={style.sidebarList}
          className="sidebarItem"
        >
          <Nav.Link
            style={style.sidebarItem}
            onClick={() => setId(6)}
            eventKey="#link1"
          >
            蝦貝類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={style.sidebarList}
          className="sidebarItem"
        >
          <Nav.Link
            style={style.sidebarItem}
            onClick={() => setId(7)}
            eventKey="#link1"
          >
            鮮魚類
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
