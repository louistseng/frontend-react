import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

export default function RecipesShowcase({ recipes }) {
  return (
    <div className="d-flex justify-content-between ">
      {recipes.map(recipe => (
        <div className="d-grid gap-2 product-container" style={{ width: '200px' }} key={recipe.recipeId}>
          <Link to={`/recipe/${recipe.recipeId}`}>
            <img
              className="img200"
              src={recipe.coverImageSrc}
              alt={recipe.name}
            />
          </Link>
          <span className="info fw-bold text-center mt-3">{recipe.name}</span>
          <div className="text-center">
            <Rating name="read-only" value={recipe.rating} readOnly />
          </div>
        </div>
      ))}
    </div>
  );
}
