import { Link } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";
import "../components/button.css";
import "./RecipesCard.css";
function RecipesCard({ recipe }) {
  const { deletePost } = useDatabase("/recipes");
  const handleDelete = (id) => {
    deletePost(id);
  };
  return (
    <li className="recipes__item">
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

      <div className="recipes__info">
        <h2 className="recipes__item-title">{recipe.title}</h2>
        <p className="recipes__item-desc">{recipe.overview}</p>
      </div>
      <ul className="recipes__details">
        <li className="recipes__details__item">
          <img
            src="../assets/images/user.svg"
            alt=""
            width={19.2}
            height={20}
          />
          <span className="recipes__details-prep">
            Servings: {recipe.servings}
          </span>
        </li>
        <li className="recipes__details__item">
          <img
            className="prep-icon"
            src="../assets/images/Timer.svg"
            alt=""
            width={20}
            height={20}
          />
          <span className="recipes__details-prep">
            Prep: {recipe.prepMinutes} mins
          </span>
        </li>
        <li className="recipes__details__item">
          <img
            className="cook-icon"
            src="../assets/images/Food.svg"
            alt=""
            width={20}
            height={20}
          />
          <span className="recipes__details-prep">
            Cook: {recipe.cookMinutes} mins
          </span>
        </li>
      </ul>
      <Link to={`/recipe/${recipe.id}`} className=" btn view">
        View Recipe
      </Link>
    </li>
  );
}

export default RecipesCard;
// ha api ozgargani bolyapti lekin home bilan about chiqyaptiku recipesni link qanday xatolik boriligi tushinmayapman
