/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import Carousels from '@/components/Carousels.jsx';
import Title from '@/components/Title.jsx';
import { Rating } from '@material-ui/lab';
import ProductsShowcase from '@/components/ProductsShowcase.jsx';
import { Container } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';

const memberPicStyle = {
  width: '50px',
  height: '50px',
};
const CardStyle = {
  borderRadius: 10,
  boxShadow: '0 8px 16px 0 #BDC9D7',
  overflow: 'hidden',
};
const ImgStyle = {
  width: '100%',
  height: '300px',
};

function WebProcess() {
  return (

    <div className="WebProcess container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Paper elevation={10}>
            <div className="card h-100">
              <div className="card-body container" style={CardStyle}>
                <h5 className="card-title text-center fw-bolder">挑選食材</h5>
                <p className="card-text">新鮮蔬菜、生鮮牛雞豬魚肉 、海鮮等。我們堅持以合理價位提供美味、健康、方便的產品，以豐富每個家庭的生活。</p>
                <Link to="/products" title="通往食材">
                  <img src="img/Pickfood.jpg" style={ImgStyle} className="card-img-bottom w-100 rounded" alt="..." border={0} />
                </Link>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col">
          <Paper elevation={10}>
            <div className="card h-100">
              <div className="card-body container" style={CardStyle}>
                <h5 className="card-title text-center fw-bolder">選擇食譜</h5>
                <p className="card-text">今晚來點提供了完整的食譜的服務，讓您輕鬆備妥料理的食材以及不用手忙腳亂，能夠按照步驟一步一步來，完成你心目中的食材。</p>
                <Link to="/recipes" title="通往食譜">
                  <img src="img/Cookbook.jpg" style={ImgStyle} className="card-img-bottom w-100 rounded" alt="..." border={0} />
                </Link>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col">
          <Paper elevation={10}>
            <div className="card h-100">
              <div className="card-body container" style={CardStyle}>
                <h5 className="card-title text-center fw-bolder">完成訂購</h5>
                <p className="card-text">接下來您只要點個幾下，選擇你的付款以及運送方式就可以完成您的訂單，我們將會把您選購的新鮮食材送到您的手中。</p>
                <Link to="/cart" title="通往購物車">
                  <img src="img/checkout.jpg" style={ImgStyle} className=" w-100 rounded" alt="..." border={0} />
                </Link>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>

  );
}

function RecipeSpace({ recipes }) {
  return (
    <div className="container d-flex">
      <div className="row row-cols-1 row-cols-lg-2 g-4">
        {recipes.map(recipe => (
          <div className="col">
            <Link to={`/recipe/${recipe.recipeId}`}>
              <Paper elevation={10}>
                <div className="p-3">
                  <div className="card   d-none  d-xl-block d-lg-block">
                    <div className="row">
                      <div className="dishPic col-4 ">
                        <img className="img200 m-1 p-2 rounded" src={recipe.coverImageSrc} alt={recipe.name} />
                      </div>
                      <div className="col">
                        <div className="card-block px-2">
                          <div className="card-title h4 d-flex align-items-center justify-content-between py-2">
                            <h4>{recipe.name}</h4>
                            {/* <Link to="#/" className="btn btn-danger">收藏</Link> */}
                          </div>
                          <div className="card-block py-2">
                            <div className="memberPic d-flex rounded-circle">
                              <img src={recipe.author.avatarImageSrc} className="rounded-circle" alt="" style={memberPicStyle} />
                              <Link to="#/" className="d-flex align-items-center justify-content-between px-4 ">{recipe.author.name}</Link>
                            </div>
                          </div>
                          <div className="my-2">
                            <Rating defaultValue={4} />
                          </div>
                          <div className="d-flex justify-content-between  text-align-center py-4">
                            {recipe.servingInfo}
                            ｜
                            {recipe.timeInfo}
                            <p className="mx-5" />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <p className="card-text pb-4 container">{recipe.description}</p>
                      </div>
                      {recipe.reviews.slice(0, 1).map(review => (
                        <div>
                          <div className="card-footer  text-muted g-0"> 最新留言 </div>
                          <div className="card-block py-1 px-4">
                            <div className="memberPic d-flex rounded-circle">
                              <img src={review.member.avatarImageSrc} className="img40c" alt="..." />
                              <Link to="/#" className="d-flex align-items-center justify-content-between px-4 ">
                                {review.member.name}
                              </Link>
                            </div>
                            <div className="my-2">
                              <Rating defaultValue={4} readonly />
                            </div>
                          </div>
                          <div className="container">
                            <div className="card-text py-4 px-4" style={{ height: '100px' }}>
                              {review.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Paper>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [popularRecipes, setPopularRecipes] = React.useState([]);
  const [popularProducts, setPopularProducts] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/recipe/3`)
        .then(response => response.json()),
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/recipe/5`)
        .then(response => response.json()),
    ]).then(data => setPopularRecipes(data));

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/popular`)
      .then(response => response.json())
      .then(data => setPopularProducts(data));
  }, []);

  return (
    <div className="d-grid gap-5 ">
      <div className="">
        <Carousels />
      </div>
      <div>
        <Title title="熱門商品" />
        <Container>
          <ProductsShowcase products={popularProducts} />
        </Container>
      </div>
      <div>
        <Title title="推薦流程" />
        <WebProcess />
      </div>
      <div className="mb-5">
        <Title title="熱門食譜" />
        <RecipeSpace recipes={popularRecipes} />
      </div>
      {/* <Couponpage /> */}
    </div>

  );
}
