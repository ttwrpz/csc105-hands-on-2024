import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-center gap-16 bg-black px-8 py-4 font-mono text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/fav">Favourites</NavLink>
    </nav>
  );
}

export default Navbar;
