import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {

  const location = useLocation();

  return (
    <header>
      <nav>
      <h1>Jon Harvey</h1>
        <Link to="/" className={location.pathname === "/" ? "activemenu menu" : "menu"}>
          About
        </Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "activemenu menu" : "menu"}>
          Portfolio
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "activemenu menu" : "menu"}>
          Contact
        </Link>
        <Link to="/resume" className={location.pathname === "/resume" ? "activemenu menu" : "menu"}>
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;