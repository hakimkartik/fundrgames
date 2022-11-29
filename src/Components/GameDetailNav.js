import { Link } from "react-router-dom";

export default function GameDetailNav(props) {
  return (
    <div className="row mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark px-4 navbar-custom">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {props.overview === "true" ? (
                <Link to={`/game/1`} className="nav-link active">
                  Overview
                </Link>
              ) : (
                <Link to={`/game/1`} className="nav-link">
                  Overview
                </Link>
              )}
            </li>
            <li className="nav-item">
              {props.faq === "true" ? (
                <Link to={`/game/1/faq`} className="nav-link active">
                  FAQ
                </Link>
              ) : (
                <Link to={`/game/1/faq`} className="nav-link">
                  FAQ
                </Link>
              )}
            </li>
            <li className="nav-item">
              {props.terms === "true" ? (
                <Link to={`/game/1/terms`} className="nav-link active">
                  Terms
                </Link>
              ) : (
                <Link to={`/game/1/terms`} className="nav-link">
                  Terms
                </Link>
              )}
            </li>
            <li className="nav-item">
              {props.updates === "true" ? (
                <Link to={`/game/1/updates`} className="nav-link active">
                  Updates
                </Link>
              ) : (
                <Link to={`/game/1/updates`} className="nav-link">
                  Updates
                </Link>
              )}
            </li>
            <li className="nav-item">
              {props.community === "true" ? (
                <Link to={`/game/1/community`} className="nav-link active">
                  Community
                </Link>
              ) : (
                <Link to={`/game/1/community`} className="nav-link">
                  Community
                </Link>
              )}
            </li>
          </ul>
          <form className="form-inline ms-auto my-lg-0">
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Fund
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
