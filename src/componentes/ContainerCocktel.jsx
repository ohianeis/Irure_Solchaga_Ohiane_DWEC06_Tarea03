import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { pedirCocteles } from "../data/pedirDatos";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

/*componenete contenedor cocktels--*/ 
const ContainerCocktel = () => {
  //estado que guarda los datos devueltos a la api
  const [listCocktel, setListCoctel] = useState([]);
  //estado para controlar el efecto de carga de datos, true-->vemos efecto/false-->no vemos efecto
  const [loading, setLoading] = useState(true);
  //estado para visualizar si tenemos un error al resolver la llamada a la api
  const [error, setError] = useState("");

  
  //uso de useEffect para pedir una vez datos cockteles al montarse --pedido datos separado en pedirDatos.js 
  useEffect(() => {

    //async-await para esperar resultados, 
    const fetchData = async () => {
    //  si resultado es positivo meto datos en estado listCoctel, efecto carga pasa a ser false
      try {
        const res = await pedirCocteles();
        setListCoctel(res.drinks);
        setLoading(false);
      
      //si no es positivo cambio estado error y efecto carga false
      } catch (error) {
        setError("Error al recuperar los datos");
        setLoading(false);
       
      }
    };

    fetchData();
  }, []);
 

  /*uso operador logico para controlar lo que devuelve el componenete segun los estados creados
  si se muestran los coctecktels se pasa componente Cocktail y como prop el cocktail que se itera*/ 
  return (
    <main>
      <section className="section">
        <h2 className="section-title">cocktails</h2>
      
        {loading && <Loading />}
        {error && <p>Error:{error}</p>}{" "}
        <div className="cocktails-center">
          {!loading &&
            listCocktel.length > 0 &&
            listCocktel.map((cocktail) => (
              <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
            ))}{" "}
        </div>
      </section>
    </main>
  );
};

export default ContainerCocktel;
