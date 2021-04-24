import React from "react";

const Nav = ({ Name, ProfilePic }) => {
  return (
    <nav
      id="sideNav"
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">{Name}</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={ProfilePic}
            alt={Name}
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Interests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">
              Awards
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
