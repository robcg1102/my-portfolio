import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="mynavbar">
        <div className="navbar">
          <Link to="/" style={{ textDecoration: "none" }} className="blink-1">
            Home
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none" }}
            className="blink-1"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className="blink-1"
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
            className="blink-1"
          >
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
