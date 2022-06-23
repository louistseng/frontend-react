import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import { Button } from 'react-bootstrap';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function CreditCard() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  function opGG() {
    Swal.fire({
      position: 'center-center',
      icon: 'success',
      title: '完成訂購',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const btnStyle = {
    width: '150px',
    backgroundColor: '#d86652',
    fontSize: '1.2rem',
    borderRadius: '0.5rem',
    border: '#404040',
  };

  return (
    <div className="cardcontent my-5">
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <div className="container my-5 d-flex justify-content-center">
        <form>
          <label htmlFor="card" className="mx-2">
            卡號
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              required
            //   maxLength="16"
            />
          </label>
          <label htmlFor="card" className="mx-2">
            姓名
            <input
              type="text"
              name="name"
              placeholder="您的姓名"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              required
            />
          </label>
          <label htmlFor="card" className="mx-2">
            過期年限
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              required
            />
          </label>
          <label htmlFor="card" className="mx-2">
            安全碼
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              required
            />
          </label>
        </form>
      </div>
      <Link to="/orders">
        <div className="finsh d-flex justify-content-center ">
          <Button
            type="submit"
            onClick={opGG}
            style={btnStyle}
          >
            送出
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default CreditCard;
