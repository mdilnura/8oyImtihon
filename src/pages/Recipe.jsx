import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";
import RecipesCard from "../components/RecipesCard";
import "./Recipe.css";
function Recipe() {
  const { id } = useParams();

  // bitta recipe
  const { data: recipe, getPost } = useDatabase("/recipes/" + id);

  // hamma recipes
  const { data: moreRecipes, getPost: getRecipes } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
    getRecipes();
  }, [id]);

  const recipesArray = Array.isArray(moreRecipes)
    ? moreRecipes
    : moreRecipes
    ? [moreRecipes]
    : [];

  return (
    <div>
      {recipe && (
        <>
          {/* Breadcrumb */}
          <div className="recipe__bar container">
            <Link className="recipee__link" to="/recipes">
              Recipes
            </Link>
            <span>/</span>
            <p className="recipe__title">{recipe.title}</p>
          </div>

          {/* Recipe Info */}
          <div className="recipe__info container">
            <picture>
              <source
                media="(max-width:768px ) "
                width={704}
                height={683}
                srcSet={recipe.image?.small}
              />
              <source
                media="(max-width: 1192px) "
                width={618}
                height={600}
                srcSet={recipe.image?.large}
              />
              <img
                className="built__image"
                src={recipe.image?.small}
                alt=""
                width={343}
                height={333}
              />
            </picture>

            <div className="recipe__info-right">
              <h2 className="recipe__info-title">{recipe.title}</h2>
              <p className="recipe__info-desc">{recipe.overview}</p>

              <ul className="recipe__detail">
                <li className="recipes__details__item">
                  <img src="../assets/images/user.svg" alt="" />
                  <p className="recipes__details-prep">
                    Servings: {recipe.servings}
                  </p>
                </li>
                <li className="recipes__details__item">
                  <img src="../assets/images/Timer.svg" alt="" />
                  <p className="recipes__details-prep">
                    Prep: {recipe.prepMinutes} mins
                  </p>
                </li>
                <li className="recipes__details__item">
                  <img src="../assets/images/Food.svg" alt="" />
                  <p className="recipes__details-prep">
                    Cook: {recipe.cookMinutes} mins
                  </p>
                </li>
              </ul>

              <p className="recipe__info-ing">Ingredients:</p>
              <ul className="ingredient__list">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li className="r-list" key={index}>
                    <img src="../assets/images/arrow.svg" alt="" />
                    <p className="ingredient">{ingredient}</p>
                  </li>
                ))}
              </ul>

              <p className="recipe__info-ing">Instructions:</p>
              <ul className="ingredient__list">
                {recipe.instructions?.map((instruction, index) => (
                  <li className="r-list" key={index}>
                    <img src="../assets/images/arrow.svg" alt="" />
                    <p className="ingredient">{instruction}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* More Recipes */}
          <div className="more container">
            <p className="more__title">More recipes</p>
            <ul className="more__recipes">
              {recipesArray.length === 0 && <li>Loading...</li>}
              <li className="more-li">
                {recipesArray
                  .filter((r) => r.id !== recipe.id)
                  .slice(0, 3)
                  .map((r) => (
                    <RecipesCard key={r.id} recipe={r} />
                  ))}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Recipe;
