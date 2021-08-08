import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Col, Row, Form, Table,
} from 'react-bootstrap';

const style = {
  formStyle: {
    margin: '30px 0px 30px 0px',
    border: '1px solid #eee',
    padding: '50px',
    fontSize: '18px',
    boxShadow: '3px 3px 10px #ddd',
  },
};

function CouponListPage({ coupon }) {
  return (
    <div className="member-container d-flex border">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Form style={style.formStyle} className="">
              <h5 className="mb-4 border-bottom">我的折價卷</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>序號</th>
                    <th>折扣比率</th>
                    <th>折扣金額</th>
                    <th>折扣門檻</th>
                    <th>使用次數限制</th>
                    <th>建立時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{coupon.coupon_id}</td>
                    <td>{coupon.serial_number}</td>
                    <td>{coupon.discount_percentage}</td>
                    <td>{coupon.discount_amount}</td>
                    <td>{coupon.discount_threshold}</td>
                    <td>{coupon.limit_count}</td>
                    <td>{coupon.created_time}</td>
                  </tr>
                </tbody>
              </Table>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default function couponList() {
  const { couponId } = useParams();
  const [coupon, setCoupon] = React.useState(null);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/couponList/${couponId}`)
      .then(response => response.json())
      .then(data => setCoupon(data));
  }, [couponId]);

  if (coupon === null) return (<p>Loading...</p>);

  return (

    <CouponListPage coupon={coupon} />
  );
}
