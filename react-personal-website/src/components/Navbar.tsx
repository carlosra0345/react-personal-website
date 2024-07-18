import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg mt-2"
      style={{ fontFamily: "Oxygen mono" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand logo nav-link brand-icon">
          <i className="bi bi-code-slash"></i>
        </Link>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="#navbarNav"
          aria-expanded="false"
          aria-label="toggles navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse list-container" id="navbarNav">
          <ul className="navbar-nav nav-list ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                // About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                // Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                // Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link resume-button"
                target="_blank"
                href="https://drive.google.com/file/d/15xwscvoens8GF2lfh9Vg-RX8jALxsU_0/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
