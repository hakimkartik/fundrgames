import dev from "../img/developer.svg";
import game from "../img/gamer.svg";
import { Link } from "react-router-dom";
import "../CSS/Register.css";

export default function Register() {
  document.body.classList.remove("oddBody");
  document.body.classList.add("oddBody2");
  return (
    <div className="container-fluid login-bg">
      <div className="row">
        <div className="col-6">
          <div className="login-container-right d-flex flex-wrap justify-content-center text-center mx-auto">
            <div className="col-12"></div>
            <h1 className="col-12 d-flex align-items-center justify-content-center login-new-msg">
              Already a user?
            </h1>
            <div className="col-12 d-flex justify-content-center">
              <h5 className="w-50 login-new-sub-msg">login and reconnect with the community </h5>
            </div>
            <div className="col-12">
              <Link className="btn btn-primary w-50 btn-type" to={"/login"}>
                Login
              </Link>
            </div>
            <div className="col-12"></div>
          </div>
        </div>

        <div className="col-6">
          <div className="login-container-left d-flex flex-wrap justify-content-center text-center mx-auto">
            <h2 className="col-12 d-flex align-items-center justify-content-center login-msg">
              Sign up for an account
            </h2>
            <div className="col-6 d-flex flex-wrap justify-content-center">
              <div className="login-type-icon">
                <img src={game} alt="gamer icon" className="login-type-img" />
              </div>
              <div className="col-12">
                <Link
                  className="btn btn-primary w-75 btn-type"
                  to={"/gameregister"}
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
                <img src={dev} alt="developer icon" className="login-type-img" />
              </div>
              <div className="col-12">
                <Link
                  className="btn btn-primary w-75 btn-type"
                  to={"/devregister"}
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
      </div>
    </div>
  );
}
