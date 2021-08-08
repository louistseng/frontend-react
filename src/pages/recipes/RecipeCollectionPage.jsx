// 此為食譜收藏首頁（主要頁面）功能區塊
// 已切RecipeListPage的components檔案夾內 檔案名：CollectionCookbook

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './RecipeListPage.scss';
import { GiCook } from 'react-icons/gi';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import Tab from 'react-bootstrap/Tab';
import Advertise from '@/pages/recipes/components/Advertise.jsx';
import CollectionCookbook from '@/pages/recipes/components/CollectionCookbook.jsx';

export default function RecipeListPage() {
  const [recipes, setRecipes] = React.useState([]);
  // eslint-disable-next-line no-unused-vars

  async function getUsersFromServer() {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/recipes/collection`;
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
    getUsersFromServer();
  }, []);

  return (
    <>
      <div className="RecipeListPage" eventKey="#line2">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Advertise />
          <Row className="justify-content-md-center">
            <Col>
              <div>
                <Container className="menu">
                  <Row>
                    <Col className="article">
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
                      <div className="title1">
                        <h2>
                          <GiCook />
                          食譜收藏
                        </h2>
                        <hr />
                      </div>
                      <div className="cookbook">
                        {recipes.map(value => <CollectionCookbook recipe={value} />)}
                      </div>
                      {/* <div xd={6} className="pag">
                        <Pagination />
                      </div> */}
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
