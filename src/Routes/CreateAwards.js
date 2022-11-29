import CreateNav from "../Components/CreateNavBar";

export default function CreateAwards() {
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    window.location = "/create/payments";
  };
  return (
    <>
      <CreateNav rewards="true" />
      <div className="container container-fluid create-body-container">
        <form action="game_create_payments.html">
          <div className="row justify-content-evenly">
            <div className="col text-center">
              <p className=" fs-2 text fw-light">Add Rewards</p>
              <p className="fw-lighter fst-italic">
                As backers support you, you can also support them
              </p>
            </div>
          </div>

          <br />
          <hr />
          <br />
          <br />

          <p className="fs-2 text fw-light">Tier 1</p>
          <p className="text fw-lighter">
            Set the minimum amount they have to pledge and the reward that will
            be given
          </p>
          <br />

          <div className="form-floating mb-5">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
            />
            <label htmlFor="floatingInput">Title</label>
          </div>

          <div className="input-group mb-5">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$1 or more"
            />
            <span className="input-group-text">.00</span>
          </div>

          <div className="form-floating mb-5">
            <textarea
              className="form-control rewards-height"
              placeholder="Description"
              id="floatingTextarea2"
            ></textarea>
            <label htmlFor="floatingTextarea2">Description</label>
          </div>

          <br />
          <hr />
          <br />
          <br />

          <p className="fs-2 text fw-light">Tier 2</p>
          <p className="text fw-lighter">
            Set the minimum amount they have to pledge and the reward that will
            be given
          </p>
          <br />

          <div className="form-floating mb-5">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
            />
            <label htmlFor="floatingInput">Title</label>
          </div>

          <div className="input-group mb-5">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$1 or more"
            />
            <span className="input-group-text">.00</span>
          </div>

          <div className="form-floating mb-5">
            <textarea
              className="form-control rewards-height"
              placeholder="Description"
              id="floatingTextarea2"
            ></textarea>
            <label htmlFor="floatingTextarea2">Description</label>
          </div>

          <br />
          <hr />
          <br />
          <br />

          <p className="fs-2 text fw-light">Tier 3</p>
          <p className="text fw-lighter">
            Set the minimum amount they have to pledge and the reward that will
            be given
          </p>
          <br />

          <div className="form-floating mb-5">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
            />
            <label htmlFor="floatingInput">Title</label>
          </div>

          <div className="input-group mb-5">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$1 or more"
            />
            <span className="input-group-text">.00</span>
          </div>

          <div className="form-floating mb-5">
            <textarea
              className="form-control rewards-height"
              placeholder="Description"
              id="floatingTextarea2"
            ></textarea>
            <label htmlFor="floatingTextarea2">Description</label>
          </div>

          <br />
          <hr />
          <br />

          <div className="row d-grid gap-2 mb-5">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={onSubmitHandler}
            >
              Next: Payments
            </button>
          </div>
        </form>
      </div>
    </>
  );
}