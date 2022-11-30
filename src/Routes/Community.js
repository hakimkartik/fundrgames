import GameDetailNav from "../Components/GameDetailNav";
import "../CSS/GameCommunity.css";
export default function Community() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="game-purple-line"></div>
          <h2 className="game-page-title">Community</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-1">
            <GameDetailNav community="true" />
          </div>

          <div className="col-8 offset-1 p-4 position-relative">
            <div className="col-12 mb-4">
              <h4 className="bold">Comments</h4>
            </div>

            <div className="card updates-card p-2">
              <div className="row mt-3">
                <div className="col-2 d-flex justify-content-end">
                  <img
                    className="card-img-left author-avatar"
                    alt="Susy Jane"
                    src="https://steinhardt.nyu.edu/sites/default/files/styles/nyu_profile_image/public/2021-03/music_edtheatre_faculty_SuzyJaneHunt.jpg?h=2f170955&itok=e8hKw3uU"
                  />
                </div>
                <div className="col-9 d-flex justify-content-start align-items-center">
                  <h5>Susy Jane</h5>
                  <span className="backer-tag">Backer</span>
                </div>
                <div className="col-1">
                  <small className="text-muted">1d</small>
                </div>
              </div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <p>Great game! Goodluck with the funding.</p>
                </div>
                <div className="col-1"></div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary game-like-button"
                  >
                    Like
                  </button>
                </div>
              </div>
            </div>

            <div className="card updates-card p-2 mt-4">
                    <div className="row mt-3">
                        <div className="col-2 d-flex justify-content-end">
                            <img className="card-img-left author-avatar" alt="Susy Jane" src="https://www.reed.edu/assets_secondary/images/jobs.jpg"/>
                        </div>
                        <div className="col-9 d-flex justify-content-start align-items-center">
                            <h5>Bob Smith</h5>
                            <span className="developer-tag">Developer</span>
                        </div>
                        <div className="col-1">
                            <small className="text-muted">3d</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-9">
                            <p>Such an amazing game, it is inspiring.</p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button type="button" className="btn btn-secondary game-like-button">Like</button>
                        </div> 
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
