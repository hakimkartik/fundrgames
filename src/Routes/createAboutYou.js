import CreateNav from "../Components/CreateNavBar";

export default function CreateAboutYou() {
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    window.location = "/create/rewards";
  };
  return (
    <>
      <CreateNav about="true" />
      <div className="container container-fluid create-body-container">
        <form action="game_create_rewards.html">
          <div className="row justify-content-evenly">
            <div className="col text-center">
              <p className=" fs-3 text fw-light">Introduce Yourself</p>
              <p className="fw-lighter fst-italic sub-heading">
                You are the creator and everyone wants to get to know you
              </p>
            </div>
          </div>

          <hr />
          <br />

          <label
            htmlFor="inputGroup-sizing-sm"
            className="form-label fs-5 text fw-light"
            style={{color: "white"}}
          >
            Your Username & Server
          </label>
          <div className="input-group input-group-sm mb-3">
          <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
            />
            <span className="input-group-text" id="inputGroup-sizing-sm">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Server"
              aria-label="Server"
            />
          </div>


          <div className="mb-4">
            <label
              htmlFor="FormControlInput5"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              Profile Picture
            </label>
            <input
              type="file"
              className="form-control form-control-sm"
              id="FormControlInput5"
            />
          </div>



          <div className="mb-5">
            <label
              htmlFor="FormControlTextarea1"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              About You
            </label>
            <textarea
              className="form-control form-control-sm"
              id="FormControlTextarea1"
              rows="4"
            ></textarea>
          </div>

          <div className="row d-grid gap-2 mb-5">
            <button
              className="create-btn create-btn-primary"
              type="submit"
              onClick={onSubmitHandler}
            >
              Next: Rewards
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
