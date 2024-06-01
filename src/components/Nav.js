import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand " id='navtext' to="/">
          Md.Samee Shaikh
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" id='navtext' aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" id='navtext' aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" id='navtext' aria-current="page" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item ">
              <a className="nav-link" id='navtext' aria-current="page" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
