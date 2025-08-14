import React from "react";
import { Link } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from '../custom-hooks/useTheme';

const Navbar = ({ name }) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-around gap-[10px]">
      <div>Welcome, {name}</div>
      <div>Our current theme is: {theme}</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
