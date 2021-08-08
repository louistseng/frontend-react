import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaGooglePlus, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer d-flex">
      <div className="row footer-content d-flex container-fluid mx-auto">
        <div className="col-lg-4 store-info mt-3 justify-content-start d-flex text-white flex-wrap">
          <p>
            今晚來點電商股份有限公司
            <br />
            新北市萬華區幸福東路87號
            <br />
            客服時間：週日至週五08：00-20：00
            <br />
            客服電話：02-8787-1234
          </p>
          <IconContext.Provider value={{ color: '#707070' }}>
            <div className="footer-icons d-none d-lg-block mt-3">
              <a href="https://www.google.com" className="mx-4">
                <FaGooglePlus />
              </a>
              <a href="https://www.facebook.com" className="mx-4">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" className="mx-4">
                <FaInstagram />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <div className="col-lg-3 d-flex mx-auto text-white p-0 d-flex mt-3">
          <ul className="footer-nav mx-auto">
            <li>
              <Link to="/products" className="footer-item text-decoration-none text-white">
                嚴選食材
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="footer-item text-decoration-none text-white">
                好味食譜
              </Link>
            </li>
            <li>
              <Link to="/mymap" className="footer-item text-decoration-none text-white">
                門店查找
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-item text-decoration-none text-white">
                關於我們
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 store-branch d-flex flex-wrap">
          <p className="text-white mt-3 mx-auto">分店據點</p>

          <div className="branch-img d-flex mx-2">
            <Link to="/mymap">
              <img src="/img/Taoyuan.jpeg" alt="" className="mx-3" />
            </Link>
            <Link to="/mymap">
              <img src="/img/Zhongli.jpeg" alt="" className="mx-3" />
            </Link>
            <Link to="/mymap">
              <img src="/img/Pingzhen.jpeg" alt="" className="mx-3" />
            </Link>
          </div>

          <div className="branch-location d-flex mx-2">
            <Link to="/mymap" className="mx-3 text-decoration-none text-white">
              桃園門市
            </Link>
            <Link to="/mymap" className="mx-3 text-decoration-none text-white">
              中壢門市
            </Link>
            <Link to="/mymap" className="mx-3 text-decoration-none text-white">
              平鎮門市
            </Link>
          </div>
        </div>
        <div className="copyright text-white mt-5 d-flex mb-4 mt-5 justify-content-center">
          Copyright &copy; 2021 Nightorder All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
