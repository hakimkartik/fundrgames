import CreateNav from "../Components/CreateNavBar";
import { toast } from 'react-toastify';

export default function CreateAwards() {
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.form.tier1_amount.value);
    if(event.target.form.tier1_title.value === "" || 
      event.target.form.tier1_amount.value === "" ||
      event.target.form.tier1_description.value === "" ||
      event.target.form.tier2_title.value === "" ||
      event.target.form.tier2_amount.value === "" ||
      event.target.form.tier2_description.value === "" ||
      event.target.form.tier3_title.value === "" ||
      event.target.form.tier3_amount.value === "" ||
      event.target.form.tier3_description.value === "") {
        toast.error("Missing tier info")
    }
    else {
      localStorage.setItem("tier1_title", event.target.form.tier1_title.value)
      localStorage.setItem("tier1_amount", event.target.form.tier1_amount.value)
      localStorage.setItem("tier1_description", event.target.form.tier1_description.value)
      localStorage.setItem("tier2_title", event.target.form.tier2_title.value)
      localStorage.setItem("tier2_amount", event.target.form.tier2_amount.value)
      localStorage.setItem("tier2_description", event.target.form.tier2_description.value)
      localStorage.setItem("tier3_title", event.target.form.tier3_title.value)
      localStorage.setItem("tier3_amount", event.target.form.tier3_amount.value)
      localStorage.setItem("tier3_description", event.target.form.tier3_description.value)
      console.log(localStorage)
      window.location = "/create/about";
    }
  };
  return (
    <>
      <CreateNav rewards="true" />
      <div className="container container-fluid create-body-container">
        <form action="game_create_payments.html">
          <div className="row justify-content-evenly">
            <div className="col text-center">
              <p className=" fs-3 text fw-light">Add Rewards</p>
              <p className="fw-lighter fst-italic sub-heading">
                As backers support you, you can also support them
              </p>
            </div>
          </div>

          <hr />

          <p className="fs-4 text fw-light">Tier 1</p>
          <p className="text fw-lighter">
            Set the minimum amount they have to pledge and the reward that will
            be given
          </p>

          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="tier1_title"
              name="tier1_title"
              placeholder="Title"
            />
            <label htmlFor="tier1_title">Title</label>
          </div>

          <div className="input-group mb-4">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$1 or more"
              name="tier1_amount"
            />
            <span className="input-group-text">.00</span>
          </div>

          <div className="form-floating mb-5">
            <textarea
              className="form-control rewards-height"
              placeholder="Description"
              id="tier1_description"
              name="tier1_description"
            ></textarea>
            <label htmlFor="tier1_description">Description</label>
          </div>


          <hr />

          <p className="fs-4 text fw-light">Tier 2</p>
          <p className="text fw-lighter">
            Set the minimum amount they have to pledge and the reward that will
            be given
          </p>

          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="tier2_title"
              name="tier2_title"
              placeholder="Title"
            />
            <label htmlFor="tier2_title">Title</label>
          </div>

          <div className="input-group mb-4">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$1 or more"
              name="tier2_amount"
            />
            <span className="input-group-text">.00</span>
          </div>

          <div className="form-floating mb-5">
            <textarea
              className="form-control rewards-height"
              placeholder="Description"
              id="tier2_description"
              name="tier2_description"
            ></textarea>
            <label htmlFor="tier2_description">Description</label>
          </div>


          <hr />

          <p className="fs-4 text fw-light">Tier 3</p>
          <p className="text fw-lighter">
            Set the minimum amount they have to pledge and the reward that will
            be given
          </p>

          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="tier3_title"
              name="tier3_title"
              placeholder="Title"
            />
            <label htmlFor="tier3_title">Title</label>
          </div>

          <div className="input-group mb-4">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$1 or more"
              name="tier3_amount"
            />
            <span className="input-group-text">.00</span>
          </div>

          <div className="form-floating mb-5">
            <textarea
              className="form-control rewards-height"
              placeholder="Description"
              id="tier3_description"
              name="tier3_description"
            ></textarea>
            <label htmlFor="tier3_description">Description</label>
          </div>

          <hr />

          <div className="row d-grid gap-2 mb-5">
            <button
              className="create-btn create-btn-primary"
              type="submit"
              onClick={onSubmitHandler}
            >
              Next: About
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
