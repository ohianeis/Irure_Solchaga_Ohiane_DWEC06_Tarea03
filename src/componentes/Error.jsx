import React from 'react'
import { Link } from 'react-router-dom'
/*componente error, definida como ruta en app.jsx para que aparezca cuando usuario cambia URL a mano y no coincide con nuestras páginas, su path apunta a este componente*/
const Error = () => {
  return (
    <section className="section cocktail-section">
         <h2 className="section-title">
            Oups!Lo Sentimos Pero La Página Que Busca No Esta Disponible.
         </h2>
    <Link className="btn btn-primary" to="/">back home</Link>
    </section>
  )
}

export default Error
