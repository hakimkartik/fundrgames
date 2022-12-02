import GameDetailNav from "../Components/GameDetailNav";
import { useLoaderData,Form, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGameById } from "../Services";

export default function Overview() {

  const params = useParams();
  const gameId = params.id;
  const [introduction, setIntroduction] = useState("Loading");
  const [subtitle, setSubtitle] = useState("Loading");
  const [requirements, setRequirements] = useState("Loading");
  const [feature, setFreature] = useState("Loading");

  useEffect(()=>{
    fetchGameById(gameId).then((game)=> {
      console.log(game)
      setIntroduction(game.introduction)
      setSubtitle(game.subtitle)
      setFreature(game.feature)
      setRequirements(game.requirements)
    })
  },[])


  return (
    <>
      {/* <GameDetailNav overview="true" /> */}

      <div className="container">
        <div className="row mt-4">
          <div className="game-purple-line"></div>
          <h2 className="game-page-title">Overview</h2>
        </div>

        {/* inside here */}
        <div className="row m-4 d-flex">
          <div className="col-1">
            {/* GameDetailNav be here */}
            <GameDetailNav overview="true" />
          </div>

          <div className="col-8 offset-1 p-4">
            <h4 className="bold">Subtitle</h4>
            <p>
              {subtitle}
            </p>
            <h4 className="bold">Introduction</h4>
            <p>
              {introduction}
            </p>
            <h4 className="bold">Features</h4>
            <p>
              {feature}
            </p>
            <h4 className="bold">Requirements</h4>
            <p>
              {requirements}
            </p>
            <p>
              I am looking for your help to help with funding and release this
              game to the public for enjoyment purposes but also to teach adults
              about life.
            </p>
          </div>

          <div className="col-2 p-4 overflow-auto similar-games-container">
            <div className="text-center mb-4">
              <h4 className="similar-games">Similar Games</h4>
            </div>
            <div className="game-media-scroller-2">
              <div className="game-media-element-2">
                <img
                  src="https://culturedvultures.com/wp-content/uploads/2021/10/Inscryption-1.jpg"
                  alt="Inscryption game"
                />
                <p className="media-title">INSCRYPTION</p>
              </div>
              <div className="game-media-element-2">
                <img
                  src="https://cdn.images.express.co.uk/img/dynamic/143/590x/571642_1.jpg"
                  alt="Minecraft game"
                />
                <p className="media-title">MINECRAFT</p>
              </div>
              <div className="game-media-element-2">
                <img
                  src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffez%2Fhome%2FEGS_POLYTRON_FEZ_N1_NEWSFEED_PRIMARY-2560x1440-d147cec46530772325611671d9ab1b79d134de39.jpg"
                  alt="Fez game"
                />
                <p className="media-title">FEZ</p>
              </div>
              <div className="game-media-element-2">
                <img
                  src="https://media.npr.org/assets/img/2021/04/06/kim-handshake_wide-56bfe404b79c12a190ba2f2a4b493e73ebe0998a.png"
                  alt="Disco Elysium game"
                />
                <p className="media-title">DISCO ELYSIUM</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
