import Carousel from "react-bootstrap/Carousel";
import "../CSS/Homes.css";
import "../CSS/main.css";
import "bootstrap/dist/css/bootstrap.css";
import CategoryNav from "../Components/CategoryNav";
import { Link } from "react-router-dom";

export default function Homes() {
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");
  return (
    <>
      <CategoryNav />

      <div className="container-fluid">
        <div className="row justify-content-center">
          <Carousel id="popular-game-carousel" className="index-carousel-size">
            <Carousel.Item className="index-carousel-img-wrapper">
              <img
                src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/02/XJ7CgSYGvZqaqGdQ8m4w8P.jpg"
                className="d-block w-100"
                alt="Carousel 2"
              />
              <Carousel.Caption className="index-carousel-caption carousel-caption d-none d-md-block">
                <h4 className="text-white p-0 m-0">Hollow Night</h4>
                <p className="p-0 m-0">#horror</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="index-carousel-img-wrapper">
              <Link to={"/game/1"}>
                <img
                  src="https://cdn.mos.cms.futurecdn.net/XsKkcvjcCo4dFe9Qr2Pte5.jpg"
                  className="d-block w-100"
                  alt="Carousel 1"
                />
              </Link>
              <Carousel.Caption className="index-carousel-caption carousel-caption d-none d-md-block">
                <h4 className="text-white p-0 m-0">Celeste</h4>
                <p className="p-0 m-0">#fiction</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="index-carousel-img-wrapper">
              <img
                src="https://www.futuregamereleases.com/wp-content/uploads/2020/08/Hades_Nintendo_Switch.jpg"
                className="d-block w-100"
                alt="Carousel 3"
              />
              <Carousel.Caption className="index-carousel-caption carousel-caption d-none d-md-block">
                <h4 className="text-white p-0 m-0">Hades</h4>
                <p className="p-0 m-0">#action</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="index-carousel-img-wrapper">
              <img
                src="https://assets-prd.ignimgs.com/2022/04/26/thestanleyparable-ultradeluxe-review-blogroll-1651007624778.jpg"
                className="d-block w-100"
                alt="Carousel 4"
              />
              <Carousel.Caption className="index-carousel-caption carousel-caption d-none d-md-block">
                <h4 className="text-white p-0 m-0">The Stanley Parable</h4>
                <p className="p-0 m-0">#horror</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container-fluid index-recommended justify-content-center mb-4">
          {/*  recommended for you */}
          <div className="row mt-5 lilac-underline">
            <h3>RECOMMENDED FOR YOU</h3>
          </div>

          <div className="row justify-content-center">
            <div className="media-scroller">
              <div className="media-element">
                <img
                  src="https://culturedvultures.com/wp-content/uploads/2021/10/Inscryption-1.jpg"
                  alt="Inscryption game"
                />
                <p className="media-title">INSCRYPTION</p>
              </div>
              <div className="media-element">
                <img
                  src="https://cdn.images.express.co.uk/img/dynamic/143/590x/571642_1.jpg"
                  alt="Minecraft game"
                />
                <p className="media-title">MINECRAFT</p>
              </div>
              <div className="media-element">
                <img
                  src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffez%2Fhome%2FEGS_POLYTRON_FEZ_N1_NEWSFEED_PRIMARY-2560x1440-d147cec46530772325611671d9ab1b79d134de39.jpg"
                  alt="Fez game"
                />
                <p className="media-title">FEZ</p>
              </div>
              <div className="media-element">
                <img
                  src="https://media.npr.org/assets/img/2021/04/06/kim-handshake_wide-56bfe404b79c12a190ba2f2a4b493e73ebe0998a.png"
                  alt="Disco Elysium game"
                />
                <p className="media-title">DISCO ELYSIUM</p>
              </div>
              <div className="media-element">
                <img
                  src="https://culturedvultures.com/wp-content/uploads/2021/10/Inscryption-1.jpg"
                  alt="Inscryption game"
                />
                <p className="media-title">INSCRYPTION</p>
              </div>
              <div className="media-element">
                <img
                  src="https://cdn.images.express.co.uk/img/dynamic/143/590x/571642_1.jpg"
                  alt="Minecraft game"
                />
                <p className="media-title">MINECRAFT</p>
              </div>
              <div className="media-element">
                <img
                  src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffez%2Fhome%2FEGS_POLYTRON_FEZ_N1_NEWSFEED_PRIMARY-2560x1440-d147cec46530772325611671d9ab1b79d134de39.jpg"
                  alt="Fez game"
                />
                <p className="media-title">FEZ</p>
              </div>
              <div className="media-element">
                <img
                  src="https://media.npr.org/assets/img/2021/04/06/kim-handshake_wide-56bfe404b79c12a190ba2f2a4b493e73ebe0998a.png"
                  alt="Disco Elysium game"
                />
                <p className="media-title">DISCO ELYSIUM</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mt-5 lilac-underline">
          <h3>Recommended for you</h3>
        </div>

        <div className="paddings">
          <div className="row mt-4">
            <div className="col-6">
              <div className="row recommended-game-box">
                <div className="recommended-img-wrapper col-6">
                  <img
                    src="https://culturedvultures.com/wp-content/uploads/2021/10/Inscryption-1.jpg"
                    alt="Inscryption game"
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-uppercase recommended-name">
                    INSCRYPTION
                  </h5>
                  <p className="lilac-fill">
                    A card game with a twist. The gamer will have to use a
                    strategy and sacrifice resources to challenge the next
                    opponent.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row recommended-game-box">
                <div className="recommended-img-wrapper col-6">
                  <img
                    src="https://cdn.images.express.co.uk/img/dynamic/143/590x/571642_1.jpg"
                    alt="Minecraft game"
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-uppercase recommended-name">MINECRAFT</h5>
                  <p className="lilac-fill">
                    Players appear in a new world and use its resources to build
                    shelter, find food, and craft tools to construct the
                    universe they want to live in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6">
              <div className="row recommended-game-box">
                <div className="recommended-img-wrapper col-6">
                  <Link to={"/game/1"}>
                    <img
                      src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffez%2Fhome%2FEGS_POLYTRON_FEZ_N1_NEWSFEED_PRIMARY-2560x1440-d147cec46530772325611671d9ab1b79d134de39.jpg"
                      alt="Fez game"
                    />
                  </Link>
                </div>
                <div className="col-6">
                  <Link to={"/game/1"}>
                    <h5 className="text-uppercase recommended-name">FEZ</h5>
                  </Link>
                  <p className="lilac-fill">
                    The player-character Gomez receives a fez that reveals his
                    two-dimensional world to be one of four sides of a
                    three-dimensional world.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row recommended-game-box">
                <div className="recommended-img-wrapper col-6">
                  <img
                    src="https://media.npr.org/assets/img/2021/04/06/kim-handshake_wide-56bfe404b79c12a190ba2f2a4b493e73ebe0998a.png"
                    alt="Disco Elysium game"
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-uppercase recommended-name">
                    DISCO ELYSIUM
                  </h5>
                  <p className="lilac-fill">
                    A detective looses his memory and has to solve a macabre
                    murder. A fight with his own psyche will bring him new
                    challenges and new suspects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
