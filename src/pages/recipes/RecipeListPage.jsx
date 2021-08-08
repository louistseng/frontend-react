// 此為食譜首頁（主要頁面）功能區塊
// 已切在components檔案夾內

/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import './RecipeListPage.scss';
import Tab from 'react-bootstrap/Tab';
import { Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { GiCook } from 'react-icons/gi';
import Col from 'react-bootstrap/Col';
import Advertise from '@/pages/recipes/components/Advertise.jsx';
import Sidebar from '@/pages/recipes/components/Sidebar.jsx';
import Cookbook from '@/pages/recipes/components/Cookbook.jsx';
import Pagination from '@/pages/recipes/components/Pagination.jsx';

export default function RecipeListPage() {
  const [recipes, setRecipes] = React.useState([]);
  const [id, setId] = React.useState();

  async function getUsersFromServer(aid) {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/recipes/${[aid]}`;
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    setRecipes(data);
  }

  useEffect(() => {
    getUsersFromServer(id);
  }, [id]);

  return (
    <div className="RecipeListPage">
      <Advertise />
      <div className="menu">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row className="justify-content-md-center">
            <Col lg={2} xxl={2} className="sidebar">
              <Sidebar setId={setId} />
            </Col>
            <Col lg={9} xxl={8}>
              <Container>
                <Row>
                  <Col>
                    <div className="wow">
                      <Breadcrumb>
                        <Breadcrumb.Item href="#">
                          <BsFillHouseDoorFill />
                          首頁
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/recipes">
                          <GiCook />
                          好味食譜
                        </Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                    <div className="button">
                      <div className="box2">
                        <a href="/recipe-collection">
                          <h6>食譜收藏</h6>
                        </a>
                      </div>
                    </div>
                    <div className="title">
                      <h2>
                        <GiCook />
                        好味食譜
                      </h2>
                      <hr />
                    </div>
                    <div className="cookbook">
                      {recipes.map(value => <Cookbook recipe={value} />)}
                    </div>
                    <div xd={6} className="pag">
                      <Pagination />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
