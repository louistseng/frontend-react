import axios from 'axios';
import React from 'react';
import {
  Form, Button, Container, Col, Image, Row,
} from 'react-bootstrap';
import Swal from 'sweetalert2';
import globalState from '@/globalState';
import MemberAside from './MemberAside.jsx';

const style = {
  formStyle: {
    margin: '30px 0px 30px 0px',
    border: '1px solid #eee',
    padding: '50px',
    fontSize: '18px',
    boxShadow: '3px 3px 10px #ddd',
  },
  saveButtonStyle: {
    backgroundColor: '#D86652',
    padding: '10px',
    color: '#fff',
    borderColor: '#fff',
    width: '100px',
    fontSize: '18px',
    borderRadius: '10px',
    float: 'right',
  },
  editButtonStyle: {
    backgroundColor: '#D86652',
    padding: '10px',
    color: '#fff',
    borderColor: '#fff',
    width: '100px',
    fontSize: '18px',
    borderRadius: '10px',
  },
};

export default function MemberPage() {
  const [member, setMember] = React.useState(null);
  const [uploadImage, setUploadImage] = React.useState('');
  const [ts, setTs] = globalState.useGlobalState('ts');

  async function updateUserToSever() {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/update`;
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(member),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    if (data !== null) {
      Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: '修改成功',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // console.log('伺服器回傳的json資料', data);
  }

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
      console.log(result);
      setMember(result);
    }
  };

  React.useEffect(() => { getUser(); }, []);
  // React.useEffect(async () => {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     let result = await fetch('http://localhost:3001/member', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     result = await result.json();
  //     setMember(result);
  //   }
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  if (member === null) return (<p>Loading...</p>);

  const postFile = async file => {
    const formData = new FormData();
    formData.append('member_id', member.member_id);
    formData.append('file', file);
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/file`, formData, { headers: { } });
      // eslint-disable-next-line no-console
      console.log(result);
      // getUser();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div className="member-container d-flex">
      <aside>
        <MemberAside />
      </aside>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Form style={style.formStyle} className="multipart/form-data" onSubmit={handleSubmit}>
              <h3 className="border-bottom">會員資料</h3>
              <Form.Group controlId="formFile" className="mb-3">
                <Container>
                  <Row>
                    <Col xs={8} md={7}>
                      <Image className="member-img mb-3 rounded w-50" src={`${process.env.REACT_APP_API_ENDPOINT}/uploads/${member.member_id}.jpg?ts=${ts}`} alt="" />
                    </Col>
                  </Row>
                </Container>
                <Form.Label>會員大頭照</Form.Label>
                <Form.Control
                  type="file"
                  name="avatar_image_src"
                  className="mt-3"
                  onChange={e => {
                    const file = e.target.files[0];
                    setUploadImage(file);
                  }}
                />
                <Button
                  className="mt-2 mb-3"
                  style={style.saveButtonStyle}
                  onClick={async () => {
                    await postFile(uploadImage);
                    setTs(ts + 1);
                  }}
                >
                  上傳圖片
                </Button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMemberId">
                <Form.Label className="mt-2">會員ID</Form.Label>
                <Form.Control type="text" name="member_id" value={member.member_id} disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>會員名稱</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={member.username}
                  onChange={e => {
                    setMember({ ...member, username: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>性別</Form.Label>
                <Form.Control
                  type="text"
                  name="gender"
                  value={member.gender}
                  onChange={e => {
                    setMember({ ...member, gender: e.target.value });
                  }}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>生日</Form.Label>
                <Form.Control
                  type="text"
                  value={member.birth_date}
                  onChange={e => {
                    setMember({ ...member, birth_date: e.target.value });
                  }}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>電話號碼</Form.Label>
                <Form.Control
                  type="text"
                  value={member.phone_number}
                  onChange={e => {
                    setMember({ ...member, phone_number: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>電子郵件</Form.Label>
                <Form.Control
                  type="email"
                  value={member.email}
                  onChange={e => {
                    setMember({ ...member, email: e.target.value });
                  }}
                />
              </Form.Group>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Button
                  className="mt-3"
                  type="submit"
                  style={style.editButtonStyle}
                  onClick={() => {
                    updateUserToSever();
                  }}
                >
                  確認編輯
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
