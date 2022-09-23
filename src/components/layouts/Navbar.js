import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-success">
      <h1>
        <Link to="/">
          <i className={props.icon} /> {props.title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "siogeri",
  icon: "fab fa-google",
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};
export default Navbar;
