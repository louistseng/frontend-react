/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { CgLoadbar } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '@/hooks/useCart';
import './CartPage.scss';

function Main() {
  const { cart, addItem, removeItem } = useCart();

  return (
    <main className="block col-2">
      <h2>商品列表</h2>
      <div className="row">
        {cart.map(product => (
          <div className="container   py-2">
            <div className="d-flex flex-fill border border-dark border-2  border-top-0  border-end-0 border-start-0 py-2">
              <img className="small  h-100" src={product.imageSrc} alt={product.name} />
              <div className="context px-4 flex-grow-1 row">
                <h1>{product.name}</h1>
                <p>
                  $
                  {product.price}
                </p>
                <div className="mx-4 d-flex justify-content-between">
                  數量:
                  {product.count}
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary mx-4"
                      style={{
                        width: '80px',
                        backgroundColor: 'var(--brand-primary-color)',
                        borderColor: 'var(--brand-primary-color)',
                      }}
                      onClick={() => addItem(product, 1)}
                    >
                      <FaPlus />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      style={{
                        width: '80px',
                        backgroundColor: 'var(--brand-primary-color)',
                        borderColor: 'var(--brand-primary-color)',
                      }}
                      onClick={() => removeItem(product, 1)}
                    >
                      <CgLoadbar />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-block ">
                <button onClick={() => removeItem(product)} className="remove" type="button">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function Basket() {
  const { cart } = useCart();
  const productsPrice = cart.reduce((a, c) => a + c.count * c.price, 0);
  const TotalPrice = productsPrice * 0.8;
  const discountPrice = productsPrice - TotalPrice;

  function opGG() {
    Swal.fire({
      position: 'center-center',
      icon: 'success',
      title: '成功結帳',
      showConfirmButton: false,
      timer: 1500,
    });
    // setTimeout(() => {
    //   window.location.href = 'orderlist';
    // }, 1000);
  }
  return (
    <aside className="">
      <h1>購物細項</h1>
      <div>
        {cart.length === 0 && <div>您的購物車是空的</div>}
        {cart.map(product => (
          <div key={product.id} className="row">
            <div className="col-2">{product.name}</div>
            <div className="col-2 text-right">
              {product.count}
              {' '}
              x $
              {Math.floor(product.price)}
            </div>
          </div>
        ))}

        {cart.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">商品價格</div>
              <div className="col-1 text-right">
                $
                {productsPrice.toFixed()}
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-danger">
                <strong>折扣金額</strong>
              </div>
              <div className="col-1 text-right price">
                <strong>
                  -$
                  {discountPrice.toFixed()}
                </strong>
              </div>

            </div>
            <div className="row">
              <div className="col-2">折扣後價格</div>
              <div className="col-1 text-right h4">
                $
                {TotalPrice.toFixed()}
              </div>
            </div>
            <hr />
            <div>
              {/* 地址 */}
              <div className="address-form">
                <div className="title  py-2 px-3 my-2">
                  配送方式：
                </div>
                <div className="form-check m-2">
                  <div className="check_box px-2 m-2">
                    <input type="radio" className="form-check-input" name="shipping_method" required />
                    <label className="form-check-label" htmlFor="validationFormCheck2">宅配到貨</label>
                  </div>
                  <div className="check_box px-2 m-2">
                    <input type="radio" className="form-check-input" name="shipping_method" required />
                    <label className="form-check-label" htmlFor="validationFormCheck2">門市取貨</label>
                  </div>
                </div>
                <div className="formContainer">
                  <form className="row g-3 m-1 p-2">
                    <div className="col-md-4">
                      <label htmlFor="inputname" className="form-label">姓名</label>
                      <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputphone" className="form-label">電話</label>
                      <input type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputsex" className="form-label">稱謂</label>
                      <select id="inputState" className="form-select">
                        <option selected>請選擇</option>
                        <option>小姐</option>
                        <option>先生</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputCity" className="form-label">縣市</label>
                      <select id="inputState" className="form-select">
                        <option selected>台北</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputState" className="form-label">區域</label>
                      <select id="inputState" className="form-select">
                        <option selected>中山區</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">街道</label>
                      <select id="inputState" className="form-select">
                        <option selected>中山路</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">巷弄樓層</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="詳細巷弄樓層" />
                    </div>
                  </form>
                </div>
              </div>
              {/* 信用卡 */}
              <div className="payForm">
                <div className="title  py-2 px-3 my-2">
                  付款資訊：
                </div>
                <div className="form-check m-2">
                  <div className="check_box px-2 m-2">
                    <input type="radio" className="form-check-input" name="pay_method" required />
                    <label className="form-check-label" htmlFor="validationFormCheck2">信用卡付款</label>
                  </div>
                  <div className="check_box px-2 m-2">
                    <input type="radio" className="form-check-input" id="validationFormCheck3" name="pay_method" required />
                    <label className="form-check-label" htmlFor="validationFormCheck2">門市付款</label>
                  </div>
                </div>
                <div className="formContainer">
                  <form className="row g-3 needs-validation credit m-1 p-2" noValidate>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                          我同意本次付款資訊，並設為快速結帳
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>

            <hr />
            <Link to="/orders">
              <div className="row fruit mb-5">
                <div className="w-25 justify-content-center  text-center align-item-center  d-flex">
                  <button
                    className="endbutton"
                    type="button"
                    onClick={opGG}
                  >
                    結帳
                  </button>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </aside>
  );
}

export default function Cart() {
  const { cart } = useCart();

  const { addItem, removeItem } = useCart();

  return (
    <div className="CartPage">
      <div className="row">
        <Main addItem={addItem} />
        <Basket
          cartItems={cart}
          addItem={addItem}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}
