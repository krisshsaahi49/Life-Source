import React from "react";
import { Link as Link1, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import { Link as Link2 } from "react-scroll";

const CustomNavbar=(props)=> {
  
    var { mClass, nClass, cClass, slogo } = props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link1 className={`navbar-brand ${slogo}`} to="/">
                <img src={require("../img/liefesource1_160*90.svg")} alt="LifeSource" />
                <img
                  src={require("../img/lifesource2_160*90.svg")}
                  alt="logo"
                />
              </Link1>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item">
                    <NavLink title="Home" className="nav-link" to="./">
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <Link2 className="nav-link" to="about" spy={true} smooth={true}>
                      About
                    </Link2>
                  </li>

                  <li className="nav-item">
                    <Link2 className="nav-link" to="mission" spy={true} smooth={true}>
                      Mission
                    </Link2>
                  </li>

                  <li className="nav-item">
                    <Link2 className="nav-link" to="team" spy={true} smooth={true}>
                      Team
                    </Link2>
                  </li>

                  <li className="dropdown submenu nav-item">
                    <Link2
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      to="donor" spy={true} smooth={true}
                    >
                      Donor
                    </Link2>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Faq"
                          className="nav-link"
                          to="/Faq"
                        >
                          Faq
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="SignIn"
                          className="nav-link"
                          to="/SignIn"
                        >
                          Sign In
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="SignUp"
                          className="nav-link"
                          to="/SignUp"
                        >
                          Sign Up
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link2
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      to="recipient" spy={true} smooth={true}
                    >
                      Recipient
                    </Link2>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Faq"
                          className="nav-link"
                          to="/Faq"
                        >
                          Faq
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="SignIn"
                          className="nav-link"
                          to="/SignIn"
                        >
                          Sign In
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="SignUp"
                          className="nav-link"
                          to="/RecipientSignUp"
                        >
                          Sign Up
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link2 className="nav-link" to="contact" spy={true} smooth={true}>
                      Contact
                    </Link2>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  
}

export default CustomNavbar;
