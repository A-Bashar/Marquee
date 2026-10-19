// import { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-dot"></span>
          <span>Marquee</span>
        </Link>
        <nav>
          <NavLink to="/">Discover</NavLink>
          <NavLink to="sdf">My list</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
