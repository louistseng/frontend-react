import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ProductListPage from '@/pages/products/ProductListPage.jsx';
import ProductPage from '@/pages/products/ProductPage.jsx';
import RecipeListPage from '@/pages/recipes/RecipeListPage.jsx';
import RecipeCollectionPage from '@/pages/recipes/RecipeCollectionPage.jsx';
import RecipePage from '@/pages/recipes/RecipePage.jsx';
import MyMap from '@/pages/MyMap.jsx';
import CreditCard from '@/pages/CreditCard.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import CartPage from '@/pages/member/CartPage.jsx';
import MemberPage from '@/pages/member/MemberPage.jsx';
import OrderListPage from '@/pages/member/OrderListPage.jsx';
import CouponListPage from '@/pages/member/CouponListPage.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import LogoutPage from '@/pages/LogoutPage.jsx';
import NotFoundPage from '@/pages/NotFoundPage.jsx';

function App() {
  return (

    <div>
      <header>
        <Header />
      </header>
      <main className="min-vh-100" style={{ paddingTop: '120px' }}>
        <ScrollToTop>
          <Container>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/cart" exact>
                <CartPage />
              </Route>
              <Route path="/creditcard" exact>
                <CreditCard />
              </Route>
              <Route path="/recipes">
                <RecipeListPage />
              </Route>
              <Route path="/recipe-collection">
                <RecipeCollectionPage />
              </Route>
              <Route path="/recipe/:recipeId">
                <RecipePage />
              </Route>
              <Route path="/products">
                <ProductListPage />
              </Route>
              <Route path="/product/:productId">
                <ProductPage />
              </Route>
              <Route path="/mymap">
                <MyMap />
              </Route>
              <Route path="/member">
                <MemberPage />
              </Route>
              <Route path="/orders" exact>
                <OrderListPage />
              </Route>
              <Route path="/coupons">
                <CouponListPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/logout">
                <LogoutPage />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Container>
        </ScrollToTop>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
