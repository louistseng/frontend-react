import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function MemberAside() {
  const style = {
    sidebar: {
      backgroundColor: '#E8DDCA',
      width: '300px',
      padding: '50px',
      margin: '30px 0px 0px 30px',
      height: '1150px',
    },
    sidebarTitle: {
      fontSize: '22px',
      margin: '20px -10px',
    },
    sidebarList: {
      fontSize: '18px',
      margin: '25px',
    },
    sidebarItem: {
      textDecoration: 'none',
      color: 'black',
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
        // activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky" />
        <Nav.Item style={style.sidebarTitle}>
          <FaHome style={style.sidebarIcons} />
          會員專區
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Link to="/member" style={style.sidebarItem}>
            會員資料
          </Link>
        </Nav.Item>
        <Nav.Item style={style.sidebarList}>
          <Link to="orders" style={style.sidebarItem}>
            歷史訂單
          </Link>
        </Nav.Item>
        {/* <Nav.Item style={style.sidebarList}>
          <Link to="/coupons" style={style.sidebarItem}>
            我的折價卷
          </Link>
        </Nav.Item> */}
        <Nav.Item style={style.sidebarList}>
          <Link to="/recipe-collection" style={style.sidebarItem}>
            我的收藏
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
