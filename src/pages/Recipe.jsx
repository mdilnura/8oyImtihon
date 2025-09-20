import React, { useEffect } from "react";
import { data, Link, useParams } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";
import RecipesCard from "../components/RecipesCard";

function Recipe() {
  const { id } = useParams();
  const { data: recipe, getPost } = useDatabase("/recipes/" + id);
  const { data: moreRecipes, getPost: getRecipes } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
    getRecipes();
  }, [id]);

  return (
    <div>
      {recipe && (
        <>
          <div className="recipe__bar container">
            <Link className="recipee__link" to="/recipes">
              Recipes
            </Link>
            <span>/</span>
            <p className="recipe__title">{recipe.title}</p>
          </div>

          <div className="recipe__info container">
            <picture>
              <source
                className="recipes__item-image recipecard-img-small"
                media="(max-width: 375px)"
                width={327}
                height={300}
                srcSet={recipe.image?.small}
              />
              <source
                className="recipes__item-image recipecard-img-large"
                media="(max-width: 768px) "
                width={680}
                height={600}
                srcSet={recipe.image?.small}
              />
              <img
                className="recipes__item-image"
                src={recipe.image?.large}
                alt={recipe.title}
                width={360}
                height={300}
              />
            </picture>

            <div className="recipe__info-right">
              <h2 className="recipe__info-title">{recipe.title}</h2>
              <p className="recipe__info-desc">{recipe.overview}</p>
              <ul className="recipe__detail">
                <li className="recipes__details__item">
                  <img src="../assets/images/icon-servings.svg" alt="" />
                  <p className="recipes__details-prep">
                    Servings: {recipe.servings}
                  </p>
                </li>
                <li className="recipes__details__item">
                  <img src="../assets/images/icon-prep-time.svg" alt="" />
                  <p className="recipes__details-prep">
                    Prep: {recipe.prepMinutes}
                  </p>
                </li>
                <li className="recipes__details__item">
                  <img src="../assets/images/icon-cook-time.svg" alt="" />
                  <p className="recipes__details-prep">
                    Servings: {recipe.cookMinutes}
                  </p>
                </li>
              </ul>
              <p className="recipe__info-ing">Ingredients:</p>
              <ul className="ingredient__list">
                {recipe.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>
                      <p className="ingredient">{ingredient}</p>
                    </li>
                  );
                })}
              </ul>
              <p className="recipe__info-ing">Instructions:</p>
              <ul className="inctruction">
                {recipe.instructions.map((instructions, index) => {
                  return (
                    <li key={index}>
                      <p className="ingredient">{instructions}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="more container">
            <p className="more__title">More recipes</p>
            <ul className="more__recipes">
              {!moreRecipes && <li>Loading...</li>}
              {moreRecipes &&
                moreRecipes
                  .filter((r) => r.id !== recipe.id)
                  .slice(0, 3)
                  .map((r) => <RecipesCard key={r.id} recipe={r} />)}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Recipe;
