// 此為食譜首頁（主要頁面）功能區塊
// 已切在components檔案夾內

/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RecipeListPage.scss';
import Tab from 'react-bootstrap/Tab';
import PageBreadcrumb from '@/components/PageBreadcrumb.jsx';
import { GiCook } from 'react-icons/gi';
import Advertise from '@/pages/recipes/components/Advertise.jsx';
import Sidebar from '@/pages/recipes/components/Sidebar.jsx';
import Cookbook from '@/pages/recipes/components/Cookbook.jsx';
// import Pagination from '@/pages/recipes/components/Pagination.jsx';

export default function RecipeListPage() {
  const style = {
    formStyle: {
      margin: '0px 0px 0px 12px',
      border: '1px solid #eee',
      padding: '25px',
      fontSize: '18px',
      boxShadow: '3px 3px 10px #ddd',
    },
  };
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
      <Container>
        <Row>
          <Col lg={{ order: 'first' }}>
            <div className="wow">
              <PageBreadcrumb
                pages={[
                  { title: '好味食譜', href: '/recipes' },
                  // { title: recipe.name, href: `/recipe/${recipe.recipeId}` },
                ]}
              />
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 3 }} xs={{ span: 1, offset: 9 }} xxl={{ span: 2, offset: 4 }}>
            <div className="box">
              <Link to="/recipe-collection">
                <h6>食譜收藏</h6>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="menu">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row className="justify-content-md-center">
            <Col md={1} lg={1} xl={1} xxl={2} className="sidebar">
              <Sidebar setId={setId} />
            </Col>
            <Col md={7} lg={8} xl={9} xxl={9} style={style.formStyle}>
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
                {/* <Pagination /> */}
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
