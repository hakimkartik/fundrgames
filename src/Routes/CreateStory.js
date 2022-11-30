import CreateNav from "../Components/CreateNavBar";

export default function CreateStory() {
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    window.location = "/create/about";
  };
  return (
    <>
      <CreateNav story="true" />
      <div className="container container-fluid create-body-container">
        <form>
          <div className="row justify-content-evenly">
            <div className="col text-center">
              <p className=" fs-3 text fw-light">
                Introduction of Your Project
              </p>
              <p className="fw-lighter fst-italic sub-heading">
                Tell the people what your project is about and why they should
                be excited about it. Make it brief, but specific and concise.
                Describe what you're raising funds for and how it will be used.
              </p>
            </div>
          </div>

          <hr />

          <div className="row mb-4">
            <label htmlFor="FormControlTextarea1" className="form-label" style={{color: "white"}}>
              Project description
            </label>
            <textarea
              className="form-control"
              id="FormControlTextarea1"
              rows="6"
            ></textarea>
          </div>

          <br />

          <div className="row d-grid gap-2 mb-5">
            <button
              className="create-btn create-btn-primary"
              type="submit"
              onClick={onSubmitHandler}
            >
              Next: About You
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
