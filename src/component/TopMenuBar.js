import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logoShop from "../image/logoShop.png";
// import { NavDropdown, Nav, Navbar } from "react-bootstrap";

const TopMenuBar = () => {
  const [toggle, setToggle] = useState({
    isOpen: false
  });
  const handleToggle = () => {
    setToggle({ isOpen: !toggle.isOpen });
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logoShop} width="60" height="60" alt="Varaity Shop" />
          </Link>
          <button onClick={handleToggle} type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={toggle.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMenuBar;
