import { Link } from "react-router-dom";

export default function CategoryNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark index-custom-nav">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav sub-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Strategy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              History
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Action
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Adventure
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              VR
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
