import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Tab, Container, Carousel,
} from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import './ProductListPage.scss';
import ProductsShowcase from '@/components/ProductsShowcase.jsx';
import Aside from './Aside.jsx';
import AsideFilter from './AsideFilter.jsx';

function CarouselImage() {
  return (
    <div>
      <Container className="p-0 pe-1" style={{ width: '1278px' }}>
        <Carousel className="">
          <Carousel.Item>
            <img src="/beef-1.png" alt="" className="w-100 d-block" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/veg-1.png" alt="" className="w-100  d-block" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/seafood-1.png" alt="" className="w-100  d-block" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
function Populars({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [titles, setTitles] = useState([]);
  const newTitle = [...titles];
  newTitle.length = 1;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/product/?categoryId=${categoryId}`;

    fetch(url)
      .then(res => res.json())
      .then(result => {
        setProducts(result);
        setTitles(result);
      });
  }, [categoryId]);

  return (
    <Container className="productContent">
      {newTitle.map(title => (
        <div>
          <h2 className="pt-3 product-text-color">
            {title.typeId}
            推薦
          </h2>
          <hr />
        </div>
      ))}
      <ProductsShowcase products={products} />
    </Container>
  );
}

function ProductListPage() {
  const style = {
    productTextColor: {
      color: '#505050',
    },
  };
  const [filter, setFilter] = React.useState([]);
  const [id, setId] = useState(0);

  async function GetFilter(typeId) {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/product/?typeId=${typeId}`;
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    // console.log(data);
    setFilter(data);
  }

  useEffect(() => {
    GetFilter(id);
    window.scrollTo(0, 600);
  }, [id]);
  return (
    <>
      <Container style={style.productTextColor}>
        <CarouselImage />
        <Tab.Container id="list-group-tabs-example">
          <div className="d-flex">
            <aside>
              <Aside setId={setId} />
            </aside>
            <main className="container ms-5 pt-4 mainContent">
              <div className="ps-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" style={style.productTextColor}>
                        <p className="m-0" />
                        <FaHome className="mx-1 mb-1" />
                        首頁
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/products" style={style.productTextColor}>
                        嚴選商品
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* 側邊欄/商品 */}
              <div className="row d-flex flex-wrap pe-4 ps-2 asideFilter">
                {filter.map(value => <AsideFilter filter={value} />)}
              </div>
              {id === 0 && (
              <>
                <Populars categoryId={1} />
                <Populars categoryId={4} />
                <Populars categoryId={6} />
              </>
              )}
            </main>
          </div>
        </Tab.Container>
      </Container>
    </>
  );
}
export default withRouter(ProductListPage);
