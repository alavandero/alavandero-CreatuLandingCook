import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 


const Navbar = () => {
  const value = useContext(CartContext); 

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/assets/Laver.png" alt="Company Logo" className="logo" /></Link>
      <ul className="nav-links">
        <Link to="category/Meat" >Meat</Link>
        <Link to="category/Chicken">Chicken</Link>
        <Link to="category/Fish">Fish</Link>
        <Link to="category/Seafood">Seafood</Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
