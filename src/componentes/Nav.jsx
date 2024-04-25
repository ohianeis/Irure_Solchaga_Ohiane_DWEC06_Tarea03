import React from "react";
import { Link } from "react-router-dom";

/*Componenete nav, uso de link para enlazar con otras páginas -definidas las rutas en app.jsx-*/ 
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <span>Cocktail DWEC-DB</span>
        </ul>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
