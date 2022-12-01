import { Link } from "react-router-dom";
import "../CSS/App.css";
import "../CSS/index.css";

function topRight() {
  if (
    localStorage.getItem("asGamer") === undefined ||
    localStorage.getItem("asGamer") == null
  )
    return (
      <Link className="nav-link" to={`/login`}>
        Login
      </Link>
    );

  return (
    <Link
      className="nav-link"
      to={localStorage.getItem("asGamer") === "true" ? "/gamer" : "/create"}
    >
      {localStorage.getItem("asGamer") === "true"
        ? "My Profile"
        : "Make your game"}
    </Link>
  );
}

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid row">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-4">
            <li className="nav-item">
              <Link className="nav-link" to={`/`}>
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <Link
            className="navbar-brand d-flex col-4 justify-content-center"
            to={`/`}
          >
            FUNDRGAMES
          </Link>
          <div className="d-flex col-4 justify-content-end">
            <form className="form w-75" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav col-4 mb-2 mb-lg-0">
              <li className="nav-item">{topRight()}</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
