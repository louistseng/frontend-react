import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Tab, Tabs, Form, Button,
} from 'react-bootstrap';
import axios from 'axios';
import globalState from '@/globalState';
import './LoginPage.scss';
import Swal from 'sweetalert2';

export function Login() {
  const history = useHistory();
  const [, setMe] = globalState.useGlobalState('me');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const login = () => {
    axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/login/`,
      { email, password },
    ).then(response => {
      // console.log(response.data);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setMe(response.data);
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          history.push('/');
        }, 1500);
        Swal.fire({
          position: 'center-center',
          icon: 'success',
          title: '成功登入',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // check console if the value can be received
    // const data = new FormData(e.target);
    // console.log(data.get('username'));
    // console.log(data.get('password'));
  };

  const buttonStyles = {
    backgroundColor: '#f4b886',
    borderColor: '#fff',
    boxShadow: 'none',
    marginTop: '20px',
    marginBottom: '30px',
    border: 'none',
    width: '400px',
    padding: '10px',
    fontSize: '18px',
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form-content">
        <Form.Group controlId="formBasicAccount">
          <Form.Label className="mt-3">郵件帳號</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="請輸入郵件帳號"
            onChange={e => {
              setEmail(e.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="mt-3">密碼</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="請輸入密碼"
            onChange={e => {
              setPassword(e.target.value);
            }}
            required
            minLength="6"
          />
        </Form.Group>
        <Button
          style={buttonStyles}
          type="submit"
          onClick={login}
        >
          登入
        </Button>
        <h6 style={{ color: 'red' }}>{loginStatus}</h6>
      </Form>
    </div>
  );
}

export function SignUp() {
  const history = useHistory();
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [email, setEmail] = useState('');
  const [genderSelectedOption, setGenderSelectedOption] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // checkbox 單一勾選(核取方塊)
  const [agree, setAgree] = useState(false);
  // date
  const [date, setDate] = useState('');

  const register = () => {
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/register`, {
      // eslint-disable-next-line object-shorthand
      username: usernameReg,
      password: passwordReg,
      email,
      // eslint-disable-next-line object-shorthand
      date: date,
      gender: genderSelectedOption,
      phone_number: phoneNumber,
    }).then(response => {
      if (response !== null) {
        setTimeout(() => {
          history.push('/');
        }, 1500);
        Swal.fire({
          position: 'center-center',
          icon: 'success',
          title: '您已註冊成功',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // eslint-disable-next-line no-console
      console.log(response);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // check console if the value can be received
    // const data = new FormData(e.target);
    // console.log(data.get('username'));
    // console.log(data.get('password'));
  };
  const buttonStyles = {
    backgroundColor: '#f4b886',
    borderColor: '#fff',
    boxShadow: 'none',
    marginTop: '20px',
    marginBottom: '30px',
    border: 'none',
    width: '400px',
    padding: '10px',
    fontSize: '18px',
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form-content">
        <Form.Group controlId="Username">
          <Form.Label className="mt-3">使用者名稱</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={usernameReg}
            placeholder="使用者名稱"
            onChange={e => {
              setUsernameReg(e.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label className="mt-3">電話號碼</Form.Label>
          <Form.Control
            type="text"
            name="phone_number"
            value={phoneNumber}
            placeholder="電話號碼"
            onChange={e => {
              setPhoneNumber(e.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label className="mt-3">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="name@example.com"
            onChange={e => {
              setEmail(e.target.value);
            }}
            required
          />
          <Form.Group controlId="Password">
            <Form.Label className="mt-3">密碼</Form.Label>
            <Form.Control
              type="password"
              name="passwordReg"
              value={passwordReg}
              placeholder="請輸入密碼"
              onChange={e => {
                setPasswordReg(e.target.value);
              }}
              required
              minLength="6"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="Gender">
          <Form.Label className="mt-3">性別</Form.Label>
          <Form.Control
            as="select"
            value={genderSelectedOption}
            onChange={e => {
              setGenderSelectedOption(e.target.value);
            }}
            required
          >
            <option value="">請選擇</option>
            <option value="男">男</option>
            <option value="女">女</option>
            <option value="不告知">不告知</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Birthday">
          <Form.Label className="mt-3">生日</Form.Label>
          <Form.Control
            type="date"
            value={date}
            name="birthday"
            onChange={e => {
              setDate(e.target.value);
            }}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="mt-3">
          <Form.Check
            type="checkbox"
            label="我同意網站會員註冊相關規定"
            checked={agree}
            onChange={e => {
              setAgree(e.target.checked);
            }}
            required
          />
        </Form.Group>

        <Button style={buttonStyles} type="submit" onClick={register}>
          註冊
        </Button>
      </Form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <Tabs className="nav-tabs nav-justified" defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="會員登入">
          <Login />
        </Tab>
        <Tab eventKey="register" title="會員註冊">
          <SignUp />
        </Tab>
      </Tabs>
    </div>
  );
}
