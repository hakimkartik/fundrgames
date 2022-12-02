import GameDetailNav from "../Components/GameDetailNav";
import { useEffect, useState } from "react";
import { fetchGameById } from "../Services";
import { useLoaderData,Form, useParams } from "react-router-dom";

export default function Updates() {

  const params = useParams();
  const gameId = params.id;
  const[tier1_title, setT1t] = useState("Loading")
  const[tier1_amount, setT1a] = useState("Loading")
  const[tier1_description, setT1d] = useState("Loading")
  const[tier2_title, setT2t] = useState("Loading")
  const[tier2_amount, setT2a] = useState("Loading")
  const[tier2_description, setT2d] = useState("Loading")
  const[tier3_title, setT3t] = useState("Loading")
  const[tier3_amount, setT3a] = useState("Loading")
  const[tier3_description, setT3d] = useState("Loading")


  useEffect(()=>{
    fetchGameById(gameId).then((game)=> {
      console.log(game)
      setT1a(game.tier1_amount)
      setT1d(game.tier1_description)
      setT1t(game.tier1_title)
      setT2a(game.tier2_amount)
      setT2d(game.tier2_description)
      setT2t(game.tier2_title)
      setT3a(game.tier3_amount)
      setT3d(game.tier3_description)
      setT3t(game.tier3_title)
    })
  },[])

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="game-purple-line"></div>
          <h2 className="game-page-title">Rewards</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-1">
            <GameDetailNav updates="true" />
          </div>

          <div className="col-8 offset-1 pl-4 pr-4">
            <div className="card updates-card p-2">
              <div className="row mt-2">
                <div className="col-11">
                  <h4 className="card-title update-title">{tier1_title}</h4>
                </div>
                <div className="col-1">
                  <small className="text-muted"></small>
                </div>
              </div>
              <div className="row">
                <div className="col-2 d-flex justify-content-end">
                  <img
                    className="card-img-left author-avatar"
                    alt="Lena Raine"
                    src="https://virtualpiano.net/wp-content/uploads/2020/08/Lena-Raine-Artist-on-Virtual-Piano-Play-Piano-Online.jpg"
                  />
                </div>
                <div className="col-10 d-flex justify-content-start align-items-center">
                  <h5>{tier1_amount}</h5>
                  <span className="author-tag">$</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <p>
                    {tier1_description}
                  </p>
                </div>
                <div className="col-1"></div>
              </div>
              
            </div>
            
            <div className="card updates-card p-2 mt-4">
              <div className="row mt-2">
                <div className="col-11">
                  <h4 className="card-title update-title">{tier2_title}</h4>
                </div>
                <div className="col-1">
                  <small className="text-muted"></small>
                </div>
              </div>
              <div className="row">
                <div className="col-2 d-flex justify-content-end">
                  <img
                    className="card-img-left author-avatar"
                    alt="Lena Raine"
                    src="https://virtualpiano.net/wp-content/uploads/2020/08/Lena-Raine-Artist-on-Virtual-Piano-Play-Piano-Online.jpg"
                  />
                </div>
                <div className="col-10 d-flex justify-content-start align-items-center">
                  <h5>{tier2_amount}</h5>
                  <span className="author-tag">$</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <p>
                    {tier2_description}
                  </p>
                </div>
                <div className="col-1"></div>
              </div>
            </div>

            <div className="card updates-card p-2 mt-4">
              <div className="row mt-2">
                <div className="col-11">
                  <h4 className="card-title update-title">{tier3_title}</h4>
                </div>
                <div className="col-1">
                  <small className="text-muted"></small>
                </div>
              </div>
              <div className="row">
                <div className="col-2 d-flex justify-content-end">
                  <img
                    className="card-img-left author-avatar"
                    alt="Lena Raine"
                    src="https://virtualpiano.net/wp-content/uploads/2020/08/Lena-Raine-Artist-on-Virtual-Piano-Play-Piano-Online.jpg"
                  />
                </div>
                <div className="col-10 d-flex justify-content-start align-items-center">
                  <h5>{tier3_amount}</h5>
                  <span className="author-tag">$</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <p>
                    {tier3_description}
                  </p>
                </div>
                <div className="col-1"></div>
              </div>
            </div>

            
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
