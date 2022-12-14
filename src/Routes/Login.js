import dev from "../img/developer.svg";
import game from "../img/gamer.svg";
import { Link } from "react-router-dom";
import "../CSS/Login.css";

export default function Login() {
  document.body.classList.remove("oddBody2");
  document.body.classList.add("oddBody");
  return (
    <div>
      <div className="container-fluid login-bg">
        <div className="row">
          <div className="col-6">
            <div className="login-container-left d-flex flex-wrap justify-content-center text-center mx-auto">
              <h2 className="col-12 d-flex align-items-center justify-content-center login-msg">
                Login to your account
              </h2>
              <div className="col-6 d-flex flex-wrap justify-content-center">
                <div className="login-type-icon">
                  <img src={game} alt="gamer icon" className="login-type-img" />
                </div>
                <div className="col-12">
                  <Link
                    className="btn btn-primary w-75 btn-type"
                    to={"/gamelogin"}
                  >
                    I am a gamer
                  </Link>
                </div>

                <div className="w-100 d-flex justify-content-center">
                  <p className="login-type-text w-50">
                    I am here to browse and discover games to fund.
                  </p>
                </div>
              </div>
              <div className="col-6 d-flex flex-wrap justify-content-center">
                <div className="login-type-icon">
                  <img
                    src={dev}
                    alt="developer icon"
                    className="login-type-img"
                  />
                </div>
                <div className="col-12">
                  <Link
                    className="btn btn-primary w-75 btn-type"
                    to={"/devlogin"}
                  >
                    I am a developer
                  </Link>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <p className="login-type-text w-50">
                    I am here to share my games and be discovered.
                  </p>
                </div>
              </div>
              <div className="col-12 d-flex flex-wrap justify-content-center">
                <div className="login-horizontal-line pb-0 mb-0"></div>
                <p className="login-type-text m-0">
                  Learn more about{" "}
                  <span className="login-website-hover">FundrGames</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="login-container-right d-flex flex-wrap justify-content-center text-center mx-auto">
              <div className="col-12"></div>
              <h1 className="col-12 d-flex align-items-center justify-content-center login-new-msg">
                New Here?
              </h1>
              <div className="col-12 d-flex justify-content-center">
                <h5 className="w-50 login-new-sub-msg">
                  sign up and discover first-of-its-kind games!
                </h5>
              </div>
              <div className="col-12">
                <Link
                  className="btn btn-primary w-50 btn-type"
                  to={"/register"}
                >
                  Sign up
                </Link>
              </div>
              <div className="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
