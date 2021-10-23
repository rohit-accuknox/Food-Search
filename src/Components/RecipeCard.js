import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const { label, image, url } = recipe.recipe;

  return (
    <div
      className="recipe_card"
      onClick={() => {
        window.open(url);
      }}
    >
      <img alt="label" className="recipe_image" src={image} />
      <h4 className="recipe_name">{label}</h4>
    </div>
  );
};

export default RecipeCard;
