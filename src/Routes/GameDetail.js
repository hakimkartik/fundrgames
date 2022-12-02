import { useEffect, useState } from "react";
import "../CSS/main-game.css";
import { fetchGameById } from "../Services";
import { useLoaderData,Form, useParams } from "react-router-dom";


export default function GameDetail() {
  const [mainImage, setMainImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
  );
  const [username, setUsername] = useState("Loading")
  const [image1, setImage1] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
  );
  const [image2, setImage2] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
  );
  const [image3, setImage3] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
  );
  const [image4, setImage4] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
  );
  const [about, setAbout] = useState("Loading");
  const params = useParams();
  const gameId = params.id;



  useEffect(()=>{
    fetchGameById(gameId).then((game)=> {
      console.log(game)
      setUsername(game.userName)
      console.log(game.images)
      console.log(game.images[0].url)
      setImage1(game.images[0].url)
      setImage2(game.images[1].url)
      setImage3(game.images[2].url)
      setImage4(game.images[3].url)
      setMainImage(game.images[1].url)
      setAbout(game.about)
    })
  },[])

  return (
    <div className="container top-game-details d-flex">
      <div className="row mt-4">
        <div className="col-7 game-details-gallery">
          <div className="row mb-3" id="game-details-main-img">
            <img src={mainImage} className="img-fluid" alt="Celeste image 1" />
          </div>
          <div className="row game-details-thumbnails">
            <div className="col-3">
              <img
                src={image1}
                className="img-fluid"
                alt="Celeste image 2"
                onClick={(event) => {
                  console.log(event.target);
                  setMainImage(event.target.src);
                }}
              />
            </div>
            <div className="col-3">
              <img
                src={image2}
                className="img-fluid opassities"
                alt="Celeste image 3"
                onClick={(event) => {
                  console.log(event.target);
                  setMainImage(event.target.src);
                }}
              />
            </div>
            <div className="col-3">
              <img
                src={image3}
                className="img-fluid"
                alt="Celeste image 4"
                onClick={(event) => {
                  console.log(event.target);
                  setMainImage(event.target.src);
                }}
              />
            </div>
            <div className="col-3">
              <img
                src={image4}
                className="img-fluid"
                alt="Celeste image 5"
                onClick={(event) => {
                  console.log(event.target);
                  setMainImage(event.target.src);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-5 gx-5 top-right">
          <div className="game-box-one">
            <div className="row pb-3 shadow-5 game-details-title-img">
              <img
                src={image1}
                className="img-fluid"
                alt="Celeste image 1"
              />
            </div>
            <div className="row mt-2 game-description">
              <p>
                {about}
              </p>
            </div>
          </div>

          <div className="game-box-two">
            <div className="row">
              <div className="card-group game-card-auth mt-2">
                <div className="card d-flex flex-row mb-2 border-0 col-8">
                  <div className="card-body">
                    <h5 className="mb-0">{username}</h5>
                    <small>8 games | Los Angeles, CA</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center py-3 funding-info">
              <div className="d-flex p-0.5 w-75">
                <div className="d-flex col-md-6 justify-content-start px-0 pb-2 m-0 h5">
                  $12,345
                </div>
                <div className="d-flex col-md-6 justify-content-end px-0 pb-2 m-0 h5">
                  88 days left
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className="progress w-75 col-md-12">
                  <div
                    className="progress-bar one-third-width"
                    role="progressbar"
                    aria-valuenow="33"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="d-flex p-0.5 w-75">
                <div className="d-flex col-md-6 justify-content-start px-0 pt-2 m-0 h5">
                  of $67,890
                </div>
                <div className="d-flex col-md-6 justify-content-end px-0 pt-2 m-0 h5">
                  90 backers
                </div>
              </div>

              <div className="w-75 mt-4">
                <div className="d-flex col-md-12 justify-content-center px-0 pt-2 m-0">
                  <button type="button" className="btn btn-primary w-50">
                    Fund
                  </button>
                </div>
                <div className="col-md-12 text-center px-0 pt-2 m-0 mt-2 mb-4">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm w-25"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm w-25"
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
