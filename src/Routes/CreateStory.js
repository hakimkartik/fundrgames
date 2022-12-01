import CreateNav from "../Components/CreateNavBar";
import { toast } from 'react-toastify';

export default function CreateStory() {
  console.log(localStorage)
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(localStorage)
    if(event.target.form.introduction.value === "") {
      toast.error("Please enter a introduction")
    }
    else {
      localStorage.setItem("introduction",event.target.form.introduction.value)
      console.log(localStorage.getItem("introduction"))
      window.location = "/create/payments";
    }
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
            <label htmlFor="introduction" className="form-label" style={{color: "white"}}>
              Project description
            </label>
            <textarea
              className="form-control"
              id="introduction"
              rows="6"
              name="introduction"
            ></textarea>
          </div>

          <br />

          <div className="row d-grid gap-2 mb-5">
            <button
              className="create-btn create-btn-primary"
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
