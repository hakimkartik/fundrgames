import CreateNav from "../Components/CreateNavBar";
import { toast } from 'react-toastify';

export default function CreateGame(props) {
  console.log(localStorage)
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.form.categoryId.value)
    
    if(event.target.form.title.value === "") {
      toast.error("Please enter a title")
    }
    else if(event.target.form.subtitle.value === "") {
      toast.error("Please enter a subtitle")
    }
    else if(event.target.form.categoryId.value === "0") {
      toast.error("Please select a category")
    }
    else {
      localStorage.setItem("title",event.target.form.title.value)
      localStorage.setItem("subtitle",event.target.form.subtitle.value)
      localStorage.setItem("categoryId",event.target.form.categoryId.value)
      console.log(localStorage)
      window.location = "/create/story";
    }
  };
  return (
    <>
      <CreateNav groundwork="true" />

      <div className="container container-fluid create-body-container">
        <form>
          <div className="row justify-content-evenly">
            <div className="col text-center">
              <p className=" fs-3 text fw-light">Create Your Game</p>
              <p className="fw-lighter fst-italic sub-heading">
                Make a profile for your game and give it a unique name.
              </p>
            </div>
          </div>

          <hr />
          <br />

          <div className="row mb-4">
            <label
              htmlFor="title"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              Game Title
            </label>
            <input
              className="form-control"
              type="text"
              id="title"
              aria-label="game title"
              name="title"
              required
            />
          </div>

          <div className="row mb-4">
            <label
              htmlFor="subtitle"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              Subtitle
            </label>
            <input
              className="form-control"
              type="text"
              id="subtitle"
              aria-label="Subtitle"
              name="subtitle"
              required
            />
          </div>

          <div className="row mb-4">
            <label
              htmlFor="categoryId"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              Primary Category
            </label>
            <select
              className="form-select-sm"
              aria-label="primary category"
              id="categoryId"
              defaultValue={0}
              name="categoryId"
            >
              <option value="0">-Choose-</option>
              <option value="strategy">Strategy</option>
              <option value="history">History</option>
              <option value="action">Action</option>
              <option value="sports">Sports</option>
              <option value="adventure">Adventure</option>
              <option value="vr">VR</option>
            </select>
          </div>

          <div className="row d-grid gap-2 mb-5">
            <button
              type="submit"
              className="create-btn create-btn-primary"
              onClick={onSubmitHandler}
            >
              Next: Story
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
