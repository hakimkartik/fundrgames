import GameDetailNav from "../Components/GameDetailNav";
import "../CSS/GameCommunity.css";
export default function Community() {
  return (
    <>
      <GameDetailNav community="true" />
      <div className="container">
        <div className="row mt-4">
          <h2>Community</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-9 p-4 game-lilac-fill position-relative">
            <div className="col-12">
              <h4>Comments</h4>
            </div>
            <div className="card p-2">
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
                  <span className="community-backer-tag">Backer</span>
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
                  <button type="button" className="btn btn-secondary">
                    Like
                  </button>
                </div>
              </div>
            </div>

            <div className="card p-2 mt-4">
              <div className="row mt-3">
                <div className="col-2 d-flex justify-content-end">
                  <img
                    className="card-img-left author-avatar"
                    alt="Susy Jane"
                    src="https://www.reed.edu/assets_secondary/images/jobs.jpg"
                  />
                </div>
                <div className="col-9 d-flex justify-content-start align-items-center">
                  <h5>Bob Smith</h5>
                  <span className="community-developer-tag">Developer</span>
                </div>
                <div className="col-1">
                  <small className="text-muted">3d</small>
                </div>
              </div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <p>Such an amazin game, it is inspiring.</p>
                </div>
                <div className="col-1"></div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <button type="button" className="btn btn-secondary">
                    Like
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2 offset-sm-1 p-4 overflow-auto similar-games-container">
            <div className="text-center mb-4">
              <h4>Similar Games</h4>
            </div>
            <div className="card text-center similar-games">
              <div className="similar-games-wrapper">
                <img
                  src="https://assets.nintendo.com/video/upload/c_limit,h_300,w_500/v1/ncom/en_US/games/switch/s/stardew-valley-switch/Video/Stardew_Valley_Trailer_ESRB.jpg"
                  className="card-img-top"
                  alt="Stardew Valley"
                />
              </div>
              <div className="card-body game-lilac-fill">
                <h5 className="card-title">Stardew Valley</h5>
                <p className="card-text">
                  <small>FICTION</small>
                </p>
              </div>
            </div>
            <div className="card text-center mt-4 similar-games">
              <div className="similar-games-wrapper">
                <img
                  src="https://www.thatvideogameblog.com/wp-content/uploads/2017/08/undertale-960x472.jpg"
                  className="card-img-top"
                  alt="Undertale"
                />
              </div>
              <div className="card-body game-lilac-fill">
                <h5 className="card-title">Undertale</h5>
                <p className="card-text">
                  <small>FANTASY</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
