import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHome, FaCartPlus } from 'react-icons/fa';
import { Tab } from 'react-bootstrap';
import useCart from '@/hooks/useCart';
import RecipesShowcase from '@/components/RecipesShowcase.jsx';
import ProductsShowcase from '@/components/ProductsShowcase.jsx';
// import Aside from './Aside.jsx';
// import AsideFilter from './AsideFilter.jsx';

// 推薦食譜
function RecipeRecommend() {
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/reciperecommend`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, []);
  return (
    <>
      <div className="m-4 pt-4">
        <h2>相關食譜</h2>
        <hr />
        <RecipesShowcase recipes={recipes} />
      </div>
    </>
  );
}

// 推薦商品
function Recommend() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/product/?categoryId=8`)
      .then(res => res.json())
      .then(result => setProducts(result));
  }, []);
  return (
    <>
      <div className="mx-4 mb-4">
        <h2>
          商品推薦
        </h2>
        <hr />
        <ProductsShowcase products={products} />
      </div>

    </>
  );
}

function SingleProduct() {
  const style = {
    descriptionImg: {
      maxWidth: '400px',
      maxHeight: '400px',
      boxShadow: '0 3px 6px',
      margin: '0 40px 0px 5px',
      float: 'left',
      borderRadius: '2px',
    },
    description: {
      width: '400px',
      overflow: 'auto',
      color: '#505050',
    },
    productTextColor: {
      color: '#505050',
    },
  };
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const { addItem } = useCart();
  const quantitySelect = React.useRef(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/${productId}`)
      .then(res => res.json())
      .then(result => {
        setProducts(result);
      });
  }, [productId]);
  return (
    <>
      {products.map(product => (
        <div>
          <div className="m-4">
            <nav aria-label="breadcrmb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" style={style.productTextColor}>
                    <p className="m-0" />
                    <FaHome className="mx-2 mb-1" />
                    首頁
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/products" style={style.productTextColor}>嚴選商品</a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="mt-4 mx-4">
            <hr />
            <div key={product.productId}>
              <img
                className="my-2 d-lg-inlinle-block d-sm-block"
                style={style.descriptionImg}
                src={product.imageSrc}
                alt=""
              />
            </div>
            <div style={style.description}>
              <h3 className="my-4 ">
                {product.name}
                <h4 className="d-inline-block ps-5">
                  規格：
                  {product.specification}
                </h4>
              </h3>
              <p className="pb-4">
                {product.description}
              </p>
              <div className="">
                <h4 className="info fw-bold text-muted text-decoration-line-through me-2" disabled>
                  售價：$
                  {product.price}
                </h4>
                <h4 className="info fw-bold text-danger">
                  特價：$
                  {Math.floor(product.price * 0.8)}
                </h4>
              </div>
              <div className="d-flex justify-content-center my-5 pb-5 me-3">
                <select className="form-select form-select-sm d-inline" style={{ width: '160px' }} ref={quantitySelect}>
                  {[...Array(10)].map((_, i, a) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <option value={1 + i} key={1 + i}>
                      {1 + i}
                      {1 + i === a.length ? '(最大)' : ''}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn btn-sm btn-primary "
                  style={{
                    width: '160px',
                    backgroundColor: 'var(--brand-primary-color)',
                    borderColor: 'var(--brand-primary-color)',
                    marginLeft: '60px',
                  }}
                  onClick={() => addItem(product, Number(quantitySelect.current?.value ?? 1))}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function ProductPage() {
  const [error] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // const [filter, setFilter] = useState([]);
  // const [id, setId] = useState();

  // async function getUsersFromServer(typeId) {
  //   const url = `${process.env.REACT_APP_API_ENDPOINT}/products/?typeId=${typeId}`;
  //   const request = new Request(url);
  //   const response = await fetch(request);
  //   const data = await response.json();
  //   // console.log(data);
  //   setFilter(data);
  // }
  // useEffect(() => {
  //   getUsersFromServer(id);
  //   setIsLoaded(true);
  // }, [id]);

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  } if (!isLoaded) {
    setIsLoaded(true);
    return <div>Loading...</div>;
  }
  return (
    <>
      <Tab.Container id="list-group-tabs-example">
        <div className="d-flex">
          {/* <aside>
            <Aside setId={setId} />
          </aside> */}
          <main className="container p-0">
            {/* {側邊欄商品} */}
            {/* {id === 0 && (
            <>
              {filter.map(value => <AsideFilter filter={value} />)}
            </>
            )} */}
            {/* {單一商品} */}
            <SingleProduct />
            {/* {推薦食譜} */}
            <RecipeRecommend />
            <br />
            {/* {推薦商品} */}
            <div>
              <Recommend />
            </div>
            <br />
            <div />
          </main>
        </div>
      </Tab.Container>
    </>
  );
}
