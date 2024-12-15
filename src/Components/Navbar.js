import React from "react";
import logo from "../Assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
<img src={logo}  alt="Barbershop Logo" className="logo"/>
<div className="links">
        <a href="#">Home</a>
        <a href="#">Book Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
