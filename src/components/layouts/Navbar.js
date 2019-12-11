import React, { Component } from "react";
import propTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "siogeri",
    icon: "fab fa-google"
  };

  static propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-success'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
