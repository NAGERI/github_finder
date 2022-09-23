import React from "react";
import propTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className={props.icon} /> {props.title}
      </h1>
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
