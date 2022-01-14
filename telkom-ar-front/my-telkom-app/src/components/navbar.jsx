import { Link, NavLink } from "react-router-dom";
import React from "react";
import logo2 from "../images/logo2.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../style/Navbar.css";

const Navbar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light light "
      aria-label="Fourth navbar example"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo2} alt="telkomAR logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/whyTelkom"
                activeClassName="active"
              >
                Why TelkomAR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/help" activeClassName="active">
                Help
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Sign Out
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="2x"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                <FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon>
              </NavLink>
            </li>
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    <FontAwesomeIcon icon={faUser} size="2x"></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signupBiz">
                    Sign Up for Biz
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
