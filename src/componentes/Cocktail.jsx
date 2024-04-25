import React from 'react'
import { Link } from 'react-router-dom'
/*componente Cocktail recibe como prop el cocktail y con este muestra los detalles requeridos*/ 
const Cocktail = ({cocktail}) => {
  /**boton con Link que lleva a la ruta dinamica definida en app.jsx /item/:id -->obtenido este por el idDrink del coctktail
   * su path corresponde al componente cocktailDetalleContainer
  */
  return (
    <article className="cocktail">
    <div className="img-container">
        <img src={cocktail.strDrinkThumb} alt="A1" />
    </div>
    <div className="cocktail-footer">
        <h3>{cocktail.strDrink}</h3>
        <h4>{cocktail.strGlass}</h4>
        <p>{cocktail.strAlchoholic}</p><Link className="btn btn-primary btn-details" to={`/item/${cocktail.idDrink}`}>details</Link>
    </div>
</article>
  )
}

export default Cocktail
