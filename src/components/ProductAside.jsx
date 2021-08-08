/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import {
  FaFish, FaLeaf, FaUtensils, FaShoppingCart,
} from 'react-icons/fa';

export default function ProductAside(props) {
  const style = {
    sidebar: {
      backgroundColor: '#f4b886',
      width: '300px',
      padding: '50px',
      margin: '30px 0px 30px 30px',
      height: '1800px',
    },
    sidebarTitle: {
      fontSize: '22px',
      margin: '20px -10px',
    },
    sidebarList: {
      fontSize: '18px',
      margin: '35px',
    },
    sidebarItem: {
      textDecoration: 'none',
      color: 'black',
      ':hover': {
        color: 'white',
      },
    },
    sidebarIcons: {
      marginRight: '8px',
    },
  };
  return (
    <div>
      <Nav
        className="col-md-12 d-none d-md-block sidebar"
        style={style.sidebar}
        activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky" />
        <Nav.Item style={style.sidebarTitle}>
          <FaUtensils style={style.sidebarIcons} />
          肉品
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Nav.Link
            href="/products"
            style={style.sidebarItem}
          >
            牛肉類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Nav.Link eventKey="link-1" style={style.sidebarItem}>
            豬肉類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Nav.Link eventKey="link-2" style={style.sidebarItem}>
            雞肉類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarTitle}>
          <FaLeaf style={style.sidebarIcons} />
          蔬菜
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Nav.Link eventKey="link-3" style={style.sidebarItem}>
            葉菜類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Nav.Link eventKey="link-4" style={style.sidebarItem}>
            根莖類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarTitle}>
          <FaFish style={style.sidebarIcons} />
          海鮮
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Nav.Link eventKey="link-5" style={style.sidebarItem}>
            鮮魚類
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Nav.Link eventKey="link-6" style={style.sidebarItem}>
            蝦貝類
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
