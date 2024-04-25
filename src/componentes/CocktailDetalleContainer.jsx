import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { pedirCoctel } from '../data/pedirDatos';
import Loading from './Loading';
import CocktailDetalle from './CocktailDetalle';
/**componente para ver cocktail en detalle, uso de useParams para recoger valor id de la URL */
const CocktailDetalleContainer = () => {
  //estado para guardar el cocktail
    const [cocktail,setCocktail]=useState(null);
  //estado controlar efecto carga
    const [loading, setLoading] = useState(true);
  //estado controlar error
    const [error, setError] = useState(false);
    //captura id que llega a través url
    const id= useParams().id;

    //uso hook para realizar llamada funcion pedirCoctel (pedirDatos.js) que consulta datos cocktail con id obtenido useParams
    useEffect(() => {
        const fetchData = async () => {
          //resp. positiva, se guarda en estado cocktail la respuesta, se cambia estado loading
          try {
            const res = await pedirCoctel(id);
            setCocktail(res.drinks[0]);
            setLoading(false);
          
          //resp. da error cambio valor estador error y loading
          } catch (error) {
            setError(true);
            setLoading(false);
          
          }
        };
    
        fetchData();
      }, []);
     
    /**Uso operador lógico para controlar lo que devuelve el componenete, mostrado en error el mensaje si usuario pone manualmente en url un id !=id cocktail disponibles
     * si todo ok muestro componenete CocktailDetalle le paso como prop el cocktail
    */
  return (
   
       <section className="section cocktail-section">
        {loading && (
            <Loading />
        )}
        {error && (
            <h2 className='className="section-title'>
                No Disponemos De Ese Cocktail En La Carta. <br/> Porfavor Elige Alguno Del Menu.
            </h2>
        )}

                <Link className="btn btn-primary" to="/">back home</Link>

        {!loading &&  cocktail !==null && (
            
                <CocktailDetalle cocktail={cocktail} />
            
            
        )
        }
        </section>

  )
}

export default CocktailDetalleContainer
