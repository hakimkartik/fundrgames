import Carousel from "react-bootstrap/Carousel";
import "../CSS/Homes.css";
import "../CSS/main.css";
import "bootstrap/dist/css/bootstrap.css";
import CategoryNav from "../Components/CategoryNav";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getGameList } from "../Services";
import { useState } from "react";

export default function Homes() {
  // const catagories = [
  //   "Strategy",
  //   "History",
  //   "Action",
  //   "Sports",
  //   "Adventure",
  //   "VR",
  // ];

  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");

  const [games, setGames] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [topGames, setTopGames] = useState([]);

  const [bottomGames, setBottomGames] = useState([]);

  function renderTopGames() {
    let topGameElem = topGames.map((game) => (
      <Carousel.Item className="index-carousel-img-wrapper">
        <img src={game.images[0].url} className="d-block w-100" />
        <Carousel.Caption className="index-carousel-caption carousel-caption d-none d-md-block">
          <h4 className="text-white p-0 m-0">{game.title}</h4>
          <p className="p-0 m-0">#{game.categoryId}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));

    return (
      <Carousel id="popular-game-carousel" className="index-carousel-size">
        {topGameElem}
        {/* 
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
        </Carousel.Item> */}
      </Carousel>
    );
  }

  function renderBottomGames() {
    let bottomGameElem = bottomGames.map((game) => {
      return (
        <div className="media-element">
          <img src={game.images[0].url} alt="Inscryption game" />
          <p className="media-title">{game.categoryId}</p>
        </div>
      );
    });
    return (
      <>
        {bottomGameElem}
        {/* <div className="media-element">
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
        </div> */}
      </>
    );
  }

  useEffect(() => {
    getGameList().then((response) => {
      setGames(response);
      console.log("games is " + JSON.stringify(response));
      let top = [];
      let bottom = [];

      for (let i = 0; i < games.length; ++i) {
        console.log(games[i]);
        if (i < 3) {
          top.push(games[i]);
        } else {
          bottom.push(games[i]);
        }
        // (i < 3 ? top : bottom).append(games[i]);
      }

      console.log(`top is ${top}`);

      setTopGames(top);
      setBottomGames(bottom);

      setIsLoading(false);
      // console.log("here " + games);
    });
  }, []);

  return (
    <>
      <CategoryNav />

      <div className="container-fluid">
        <div className="row justify-content-center">
          {isLoading ? <></> : renderTopGames()}
        </div>

        <div className="container-fluid index-recommended justify-content-center mb-4">
          {/*  recommended for you */}
          <div className="row mt-5 lilac-underline">
            <h3>RECOMMENDED FOR YOU</h3>
          </div>

          <div className="row justify-content-center">
            <div className="media-scroller">
              {isLoading ? <></> : renderBottomGames()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
