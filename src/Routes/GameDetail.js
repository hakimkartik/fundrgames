import { useEffect, useState } from "react";
export default function GameDetail() {
  const [mainImage, setMainInmage] = useState(
    "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2F00-1920x1080-656978e07c631e4fb1dc5d2f435c536edaafd8d5.jpg"
  );
  return (
    <div className="container d-flex">
      <div className="row mt-4">
        <div className="col-7 game-details-gallery">
          <div className="row mb-3" id="game-details-main-img">
            <img src={mainImage} className="img-fluid" alt="Celeste image 1" />
          </div>
          <div className="row game-details-thumbnails">
            <div className="col-3">
              <img
                src="https://c.tenor.com/D9f6YJpuRmUAAAAC/celeste-madeline.gif"
                className="img-fluid"
                alt="Celeste image 2"
                onClick={(event) => {
                  console.log(event.target);
                  setMainInmage(event.target.src);
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2F00-1920x1080-656978e07c631e4fb1dc5d2f435c536edaafd8d5.jpg"
                className="img-fluid opassities"
                alt="Celeste image 3"
                onClick={(event) => {
                  console.log(event.target);
                  setMainInmage(event.target.src);
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/504230/ss_1012b11ad364ad6c138a25a654108de28de56c5f.1920x1080.jpg?t=1617130992"
                className="img-fluid"
                alt="Celeste image 4"
                onClick={(event) => {
                  console.log(event.target);
                  setMainInmage(event.target.src);
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/504230/ss_726b2d2cd47cfd785c1aed73d65509037c822495.1920x1080.jpg?t=1617130992"
                className="img-fluid"
                alt="Celeste image 5"
                onClick={(event) => {
                  console.log(event.target);
                  setMainInmage(event.target.src);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-5 gx-5">
          <div className="row pb-3 shadow-5 game-details-title-img">
            <img
              src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.625/c_scale,w_500/ncom/en_US/games/switch/c/celeste-switch/hero"
              className="img-fluid"
              alt="Celeste image 1"
            />
          </div>
          <div className="row mt-2 game-description">
            <p>
              A young woman named Madeline undertakes the challenge of climbing
              a mountain with dangerous perils and mysterious powers. Throughout
              her journey, she is confronted by Part Of Her, her evil
              doppelganger.
            </p>
          </div>
          <div className="row mt-2 mb-2 text-center">
            <table className="game-lilac-fill">
              <thead>
                <tr>
                  <th>#FICTION</th>
                  <th>#HORROR</th>
                  <th>#TEENAGERS</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="row">
            <div className="card-group mt-2">
              <div className="card d-flex flex-row mb-2 border-0 col-8">
                <img
                  className="card-img-left author-avatar"
                  alt="Lena Raine"
                  src="https://static.wikia.nocookie.net/minecraft/images/7/76/Lena_Raine.png/revision/latest?cb=20200917020731"
                />
                <div className="card-body">
                  <h5 className="mb-0">Lena Raine</h5>
                  <small className="text-muted">
                    8 games | Los Angeles, CA
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center py-3 game-lilac-fill">
            <div className="d-flex p-0.5 w-75">
              <div className="d-flex col-md-6 justify-content-start px-0 pb-2 m-0 h5">
                $12,345
              </div>
              <div className="d-flex col-md-6 justify-content-end px-0 pb-2 m-0 h5">
                88<span className="game-details-font-size">days left</span>
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
                <span className="game-details-font-size">of </span>$67,890
              </div>
              <div className="d-flex col-md-6 justify-content-end px-0 pt-2 m-0 h5">
                90<span className="game-details-font-size"> backers</span>
              </div>
            </div>
            <div className="w-75">
              <div className="d-flex col-md-12 justify-content-center px-0 pt-2 m-0">
                <button type="button" className="btn btn-primary w-50">
                  Fund
                </button>
              </div>
              <div className="col-md-12 text-center px-0 pt-2 m-0">
                <button type="button" className="btn btn-secondary btn-sm w-25">
                  Save
                </button>
                <button type="button" className="btn btn-secondary btn-sm w-25">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
