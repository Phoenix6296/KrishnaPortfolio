import React from "react";
import Toggle from "./Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Krishna's Portfolio</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
              className="options"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true} className="options">
              <li>About</li>
            </Link>
            <Link spy={true} to="Internship" smooth={true} className="options">
              <li>Experiences</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true} className="options">
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true} className="options">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
