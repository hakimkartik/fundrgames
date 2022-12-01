import CreateNav from "../Components/CreateNavBar";
import React from "react";
import { toast } from 'react-toastify';

export default function CreateAboutYou() {
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");

  const fileInputRef = React.createRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { files } = fileInputRef.current;
    const formData = new FormData();

    localStorage.setItem("images", files)
    if (files.length === 0) {
      toast.error("Please upload at least 1 images")
    }
    else if(event.target.form.about.value === "") {
      toast.error("Please enter about")
    }
    else if(event.target.form.feature.value === "") {
      toast.error("Please enter introduction")
    }
    else if(event.target.form.requirements.value === "") {
      toast.error("Please enter requirements")
    }
    else {
      console.log(localStorage)
      formData.append("title", localStorage.getItem("title"))
      formData.append("subtitle", localStorage.getItem("subtitle"))
      formData.append("categoryId", localStorage.getItem("categoryId"))
      formData.append("introduction", localStorage.getItem("introduction"))
      formData.append("tier1_title", localStorage.getItem("tier1_title"))
      formData.append("tier1_amount", localStorage.getItem("tier1_amount"))
      formData.append("tier1_description", localStorage.getItem("tier1_description"))
      formData.append("tier2_title", localStorage.getItem("tier2_title"))
      formData.append("tier2_amount", localStorage.getItem("tier2_amount"))
      formData.append("tier2_description", localStorage.getItem("tier2_description"))
      formData.append("tier3_title", localStorage.getItem("tier3_title"))
      formData.append("tier3_amount", localStorage.getItem("tier3_amount"))
      formData.append("tier3_description", localStorage.getItem("tier3_description"))
      formData.append("about", event.target.form.about.value)
      formData.append("feature", event.target.form.feature.value)
      formData.append("requirements", event.target.form.requirements.value)

      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      const authToken = localStorage.getItem("authToken");
      const baseURL = `http://www.jzhang.tk:8080/game`;

      console.log(authToken)

      fetch(baseURL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      }).then((reponse) => {
        if(reponse.status !== 200) {
          toast.error("Some error appears, unable to create this game")
        }
        else {
          toast.success("Successfually created this game")
          window.location = "/create/launch";
        }
      })
    }
    
  };
  return (
    <>
      <CreateNav about="true" />
      <div className="container container-fluid create-body-container">
        <form action="game_create_rewards.html">
          <div className="row justify-content-evenly">
            <div className="col text-center">
              <p className=" fs-3 text fw-light">Introduce This Game</p>
              <p className="fw-lighter fst-italic sub-heading">
                Please provide more details for this game
              </p>
            </div>
          </div>

          <hr />
          <br />

          <div className="mb-5">
            <label
              htmlFor="about"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              About
            </label>
            <textarea
              className="form-control form-control-sm"
              id="about"
              rows="4"
              name="about"
              placeholder="Specific info about this game"
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="feature"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              Features
            </label>
            <textarea
              className="form-control form-control-sm"
              id="feature"
              rows="4"
              name="feature"
              placeholder="Specify core features of this game"
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="requirements"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              Requirements
            </label>
            <textarea
              className="form-control form-control-sm"
              id="requirements"
              name="requirements"
              placeholder="Specify software and hardware requirements of this game"
              rows="4"
            ></textarea>
          </div>

          <div className="row mb-4">
            <label
              htmlFor="FormControlInput5"
              className="form-label fs-5 text fw-light"
              style={{color: "white"}}
            >
              Project Image
            </label>
            <input
              type="file"
              className="form-control form-control-sm"
              id="FormControlInput5"
              multiple={true}
              ref={fileInputRef}
            />
          </div>

          <div className="row d-grid gap-2 mb-5">
            <button
              className="create-btn create-btn-primary"
              type="submit"
              onClick={onSubmitHandler}
            >
              Next: Launch
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
