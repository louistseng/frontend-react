import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';
import { FaHeart } from 'react-icons/fa';
import PageBreadcrumb from '@/components/PageBreadcrumb.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import ProductsShowcase from '@/components/ProductsShowcase.jsx';
import RecipesShowcase from '@/components/RecipesShowcase.jsx';
import globalState from '@/globalState';

function RecipeHead({ recipe }) {
  let averageRating = (
    recipe.reviews.reduce((acc, e) => acc + e, 0) / recipe.reviews.length || 3
  ).toFixed(1);

  return (
    <div>
      <div className="recipe-head d-flex align-items-start">
        <img className="img450" src={recipe.coverImageSrc} alt={recipe.name} />
        <div className="recipe-header d-grid gap-3 ms-5">
          <div>
            <span className="d-inline-block info text-secondary mb-2">{recipe.category}</span>
            <h1>{recipe.name}</h1>
          </div>
          <div className="d-flex align-items-center">
            <Rating value={Number(averageRating)} readOnly />
            <span className="info text-secondary ms-3">
              (
              {averageRating}
              )
              {' '}
              {recipe.reviews.length}
              {' '}
              個評分
            </span>
            <Button
              size="sm"
              variant="outline-danger"
              className="d-inline-flex align-items-center ms-3 px-2 py-1"
            >
              <FaHeart className="me-2" />
              <span>收藏</span>
            </Button>
          </div>
          <div className="d-flex align-items-center">
            <img
              className="img40c me-3"
              src={recipe.author.avatarImageSrc}
              alt=""
            />
            <span className="info">
              <a href="/#">{recipe.author.name}</a>
            </span>
          </div>
          <div>
            <span className="info fw-bold">
              {recipe.servingInfo}
              ｜
              {recipe.timeInfo}
            </span>
          </div>
        </div>
      </div>
      <div className="recipe-description mt-5">
        <p className="lh-lg" style={{ whiteSpace: 'pre-wrap' }}>
          {recipe.description}
        </p>
      </div>
    </div>
  );
}

function RecipeIngredientList({ ingredients }) {
  return (
    <ListGroup variant="flush">
      {ingredients.map((ingredient, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListGroup.Item className="d-flex justify-content-between px-0" key={i}>
          <span>
            {ingredient.name}
          </span>
          <span>
            {ingredient.amount}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function RecipeStepList({ recipe, steps }) {
  return (
    <div className="d-grid gap-4">
      {steps.map((step, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="d-flex" key={1 + i}>
          <img className="img200" src={recipe.coverImageSrc} alt="" />
          <div className="ms-3">
            <h3 className="h1 text-muted">
              {1 + i}
            </h3>
            <p className="info">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RecipeReviewList({ reviews }) {
  return (
    <div className="d-grid gap-3">
      {reviews.map(review => (
        <div className="review" key={review.member.memberId}>
          <div className="d-flex align-items-center">
            <img
              className="img40c me-3"
              src={review.member.avatarImageSrc}
              alt={review.member.name}
            />
            <div className="d-grid">
              <span className="info">
                <a href={`/member/${review.member.memberId}`}>
                  {review.member.name}
                </a>
              </span>
              <div>
                <Rating className="align-middle" value={review.rating} readOnly />
                <span className="info text-secondary ms-2 align-middle">{review.date}</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p style={{ whiteSpace: 'pre-wrap' }}>
              {review.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RecipeReviewInputArea({ recipe }) {
  let [me] = globalState.useGlobalState('me');
  const contentEl = React.useRef(null);

  function postReview() {
    let review = {
      memberId: me?.id ?? 2,
      content: contentEl.current.value,
      rating: 3,
    };
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/recipe/${recipe.recipeId}/review`, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="mt-4">
      <div className="d-flex">
        <img
          className="img40c me-3"
          src={me?.avatarImageSrc}
          alt=""
        />
        <textarea
          className="w-100"
          rows="5"
          placeholder="在這邊留下你的評論..."
          ref={contentEl}
          style={{ padding: '1em' }}
        />
      </div>
      <div className="d-flex justify-content-end align-items-center mt-3">
        <span className="info me-1">請選擇評分：</span>
        <Rating name="rating" />
        <button type="button" onClick={postReview} className="btn btn-success ms-3">發表評論</button>
      </div>
    </div>
  );
}

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/recipe/${recipeId}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [recipeId]);

  if (recipe === null) return (<p>Loading...</p>);

  return (
    <div className="d-grid gap-5 py-4">
      <PageBreadcrumb
        pages={[
          { title: '好味食譜', href: '/recipes' },
          { title: recipe.name, href: `/recipe/${recipe.recipeId}` },
        ]}
      />
      <RecipeHead recipe={recipe} />
      <div>
        <SectionTitle title="準備食材" />
        <RecipeIngredientList ingredients={recipe.ingredients} />
      </div>
      <div>
        <SectionTitle title="料理步驟" />
        <RecipeStepList recipe={recipe} steps={recipe.steps} />
      </div>
      <div>
        <SectionTitle title="相關商品" />
        <ProductsShowcase products={recipe.relatedProducts} />
      </div>
      <div>
        <SectionTitle title="相關食譜" />
        <RecipesShowcase recipes={recipe.relatedRecipes} />
      </div>
      <div>
        <SectionTitle title="留言評論" />
        <RecipeReviewList reviews={recipe.reviews} />
        <RecipeReviewInputArea recipe={recipe} />
      </div>
    </div>
  );
}
