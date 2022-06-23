/* eslint-disable max-len */
import React from 'react';
import useCart from '@/hooks/useCart';
import {
  Container, Col, Row, Form, Table, Accordion, Card,
} from 'react-bootstrap';
import MemberAside from './MemberAside.jsx';

const style = {
  formStyle: {
    margin: '30px 0px 30px 0px',
    border: '1px solid #eee',
    padding: '50px',
    fontSize: '18px',
    boxShadow: '3px 3px 10px #ddd',

  },
  priceColor: {
    text: 'red',
  },
};

export default function OrderPage() {
  const { cart } = useCart();
  const productsPrice = cart.reduce((a, c) => a + c.count * c.price, 0);
  const TotalPrice = productsPrice * 0.8;
  const Today = new Date().toLocaleDateString();

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  return (
    <div className=" order d-flex ">
      <div>
        <aside>
          <MemberAside />
        </aside>
      </div>
      <Container>
        <Accordion>
          <Row>
            <Col xs={12} md={12}>
              <Form style={style.formStyle} className="">
                <h5 className="mb-4 ">我的訂單</h5>
                {
              cart === null ? (
                <h1>您目前沒有任何訂單</h1>
              ) : (
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>訂單編號</th>
                            <th>訂購日期</th>
                            <th>活動折扣</th>
                            <th>訂單總額</th>
                            <th>付款方式</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: 'pink' }}>
                            <td>{getRandomIntInclusive(1, 99)}</td>
                            <td>
                              {Today}
                            </td>
                            <td>八折</td>
                            <td>
                              NT$
                              {TotalPrice.toFixed()}
                              元
                            </td>
                            <td>信用卡</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card>
                        <Card.Header>交易明細</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            訂購日期
                            {Today}
                          </Card.Title>
                          <Card.Text>
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th>商品名稱</th>
                                  <th>訂購數量</th>
                                  <th>價格</th>
                                </tr>
                              </thead>
                              {cart.map(product => (
                                <tbody>
                                  <tr>
                                    <td>{product.name}</td>
                                    <td>
                                      {product.count}
                                    </td>
                                    <td>
                                      {Math.floor(product.price)}
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </Table>
                          </Card.Text>
                        </Card.Body>
                        <Row className="text-reset" style={style.priceColor}>
                          <Col />
                          <Col md="">總價</Col>
                          <Col xs lg="3">
                            NT$
                            {TotalPrice.toFixed()}
                          </Col>
                        </Row>
                        <Card.Header />
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )
            }
              </Form>
            </Col>
          </Row>
        </Accordion>
      </Container>
    </div>
  );
}
