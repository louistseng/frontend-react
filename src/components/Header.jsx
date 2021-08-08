import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaScroll } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import globalState from '@/globalState';
import useCart from '@/hooks/useCart';
import './Header.scss';

export default function Header() {
  const [me] = globalState.useGlobalState('me');
  const { cart } = useCart();
  const getCartTotal = () => cart.reduce(
    (sum, { count }) => sum + count,
    0,
  );
  const [member, setMember] = React.useState('');

  const getUser = async () => {
    let token = localStorage.getItem('token');
    if (token) {
      let result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/member`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      result = await result.json();
      // console.log(result);
      setMember(result);
    }
  };

  React.useEffect(() => { getUser(); }, []);

  const style = {
    NavbarBrand: {
      width: '100px',
    },
    NavbarBrandImg: {
      width: '100%',
      borderRadius: '8px',
      marginLeft: '20px',
    },
    navbar: {
      backgroundColor: '#CAB598',
      padding: '5px',
    },
    navLink: {
      fontSize: '18px',
    },
    navIcons: {
      fontSize: '20px',
      padding: '5px',
      marginRight: '50px',
    },
  };

  return (
    <Navbar expand="lg" style={style.navbar} fixed="top">
      <Navbar.Brand className="NavbarBrand mx-5" style={style.NavbarBrand}>
        <Link href="/">
          <img src="/img/nightorder.png" style={style.NavbarBrandImg} alt="" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex mx-auto">
          <Link className="nav-link text-white mt-2 mx-3" to="/" style={style.navLink}>
            首頁
          </Link>
          <Link className="nav-link text-white mt-2 mx-3" to="/products" style={style.navLink}>
            嚴選食材
          </Link>
          <Link className="nav-link text-white mt-2 mx-3" to="/recipes" style={style.navLink}>
            好味食譜
          </Link>
          <Link className="nav-link text-white mt-2 mx-3" to="/mymap" style={style.navLink}>
            門店查找
          </Link>
          <Link className="nav-link text-white mt-2 mx-3" to="/about" style={style.navLink}>
            關於我們
          </Link>
        </Nav>
        <IconContext.Provider value={{ color: '#707070' }}>
          <div className="icons d-none d-lg-block" style={style.navIcons}>
            <Link to="/member" className="px-2">
              <FaUser />
            </Link>
            <Link to="/orders" className="px-2">
              <FaScroll />
            </Link>
            <Link to="/cart" className="px-2" style={{ fontSize: '20px', color: '#707070' }}>
              <FaShoppingCart />
              <span className="badge badge-warning" id="lblCartCount">
                {getCartTotal()}
              </span>
            </Link>
            {
              me === null ? (
                <Link to="/login" className="px-2" style={{ fontSize: '18px', color: '#707070' }}>
                  登入
                </Link>
              ) : (
                <Link to="/logout" className="px-2" style={{ fontSize: '18px', color: '#707070' }}>
                  <img src={member.avatar_image_src} style={{ width: '40px', borderRadius: '50px', marginLeft: '-10px' }} alt="" />
                  &nbsp;&nbsp;
                  登出
                </Link>
              )
            }

          </div>
        </IconContext.Provider>
      </Navbar.Collapse>
    </Navbar>
  );
}
