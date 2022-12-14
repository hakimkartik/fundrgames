import "../CSS/CreateNav.css";
import "../CSS/CreateGame.css";
import { Link } from "react-router-dom";

export default function CreateNav(props) {
  return (
    <>
      <div className="container container-fluid">
        <div className="row">
          <div className="col-sm-2 text-center pt-2 create-border-bottom border-1 create-nav-item-back">
            <Link style={{ textDecoration: "none" }} to={"/create"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/create"}>
              <p className="heading">Groundwork</p>
            </Link>
            {props.groundwork === "true" ? (
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  borderColor: "#a699da",
                }}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="col-sm-2 text-center pt-2 create-nav-item-back">
            <Link style={{ textDecoration: "none" }} to={"/create/story"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-book"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/create/story"}>
              <p className="heading">Story</p>
            </Link>
            {props.story === "true" ? (
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  borderColor: "#a699da",
                }}
              />
            ) : (
              <></>
            )}
          </div>

          <div className="col-sm-2 text-center pt-2 create-nav-item-back">
            <Link style={{ textDecoration: "none" }} to={"/create/payments"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-cash-stack"
                viewBox="0 0 16 16"
              >
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
              </svg>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/create/payments"}>
              <p className="heading">Payments</p>
            </Link>
            {props.payments === "true" ? (
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  borderColor: "#a699da",
                }}
              />
            ) : (
              <></>
            )}
          </div>

          <div className="col-sm-2 text-center pt-2 create-nav-item-back">
            <Link style={{ textDecoration: "none" }} to={"/create/rewards"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-gift"
                viewBox="0 0 16 16"
              >
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
              </svg>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/create/rewards"}>
              <p className="heading">Rewards</p>
            </Link>
            {props.rewards === "true" ? (
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  borderColor: "#a699da",
                }}
              />
            ) : (
              <></>
            )}
          </div>

          <div className="col-sm-2 text-center pt-2 create-nav-item-back">
            <Link style={{ textDecoration: "none" }} to={"/create/about"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/create/about"}>
              <p className="heading">About You</p>
            </Link>
            {props.about === "true" ? (
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  borderColor: "#a699da",
                }}
              />
            ) : (
              <></>
            )}
          </div>

          <div className="col-sm-2 text-center pt-2 create-nav-item-back">
            <Link style={{ textDecoration: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <p className="heading">Launch</p>
            </Link>
            {props.launch === "true" ? (
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  borderColor: "#a699da",
                }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>

        <br></br>
      </div>
    </>
  );
}
