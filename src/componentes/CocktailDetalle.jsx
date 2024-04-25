import React from "react";
/**componente que muestra los detalles del cocktail, recibe este como prop */
const CocktailDetalle = ({ cocktail }) => {
  return (
    <div className="drink">
      <img
        src={cocktail.strDrinkThumb}
        alt="A1"
        className="drink-detail"
      />
      <div className="drink-info">
        <p>
          <span className="drink-data">name :</span> {cocktail.strDrink}
        </p>
        <p>
          <span className="drink-data">category :</span> {cocktail.strCategory}
        </p>
        <p>
          <span className="drink-data">info :</span> {cocktail.strAlcoholic}
        </p>
        <p>
          <span className="drink-data">glass :</span> {cocktail.strGlass}
        </p>
        <p>
          <span className="drink-data">instructons :</span>{" "}
          {cocktail.strInstructions}
        </p>
        <p>
          <span className="drink-data">ingredients :</span>
          <span> {cocktail.strIngredient1}</span>
          <span> {cocktail.strIngredient2}</span>
          <span> {cocktail.strIngredient3}</span>
          <span> {cocktail.strIngredient4}</span>
          <span> {cocktail.strIngredient5}</span>
          <span> {cocktail.strIngredient6}</span>
          <span> {cocktail.strIngredient7}</span>
          <span> {cocktail.strIngredient8}</span>
          <span> {cocktail.strIngredient9}</span>
          <span> {cocktail.strIngredient10}</span>
          <span> {cocktail.strIngredient11}</span>
          <span> {cocktail.strIngredient12}</span>
          <span> {cocktail.strIngredient13}</span>
          <span> {cocktail.strIngredient14}</span>
          <span> {cocktail.strIngredient15}</span>
        </p>
      </div>
    </div>
  );
};

export default CocktailDetalle;
