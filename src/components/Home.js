import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/about">About Us</NavLink>
      This is my Home Component
    </div>
  );
};

export default Home;
