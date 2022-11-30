import GameDetailNav from "../Components/GameDetailNav";
import "../CSS/GameUpdates.css";
export default function Updates() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <h2>Updates</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-1">
            <GameDetailNav updates="true" />
          </div>
          <div className="col-9 p-4 game-lilac-fill position-relative">
            <div className="card p-2">
              <div className="row mt-3">
                <div className="col-11">
                  <h4 className="card-title update-title">
                    50% funded in 3 days!
                  </h4>
                </div>
                <div className="col-1">
                  <small className="text-muted">1d</small>
                </div>
              </div>
              <div className="row">
                <div className="col-2 d-flex justify-content-end">
                  <img
                    className="card-img-left author-avatar"
                    alt="Lena Raine"
                    src="https://static.wikia.nocookie.net/minecraft/images/7/76/Lena_Raine.png/revision/latest?cb=20200917020731"
                  />
                </div>
                <div className="col-10 d-flex justify-content-start align-items-center">
                  <h5>Lena Raine</h5>
                  <span className="updates-author-tag">Author</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <p>
                    Thanks to every single one of you! We are at 50% funding for
                    this game...and only in 3 days! Please keep on sharing so we
                    can reach 100% and you can be a part of this game’s story.
                  </p>
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
                <div className="col-11">
                  <h4 className="card-title update-title">Our first $1,000!</h4>
                </div>
                <div className="col-1">
                  <small className="text-muted">7d</small>
                </div>
              </div>
              <div className="row">
                <div className="col-2 d-flex justify-content-end">
                  <img
                    className="card-img-left author-avatar"
                    alt="Lena Raine"
                    src="https://static.wikia.nocookie.net/minecraft/images/7/76/Lena_Raine.png/revision/latest?cb=20200917020731"
                  />
                </div>
                <div className="col-10 d-flex justify-content-start align-items-center">
                  <h5>Lena Raine</h5>
                  <span className="updates-author-tag">Author</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                  <p>
                    Hello everyone! Thanks for helping me reach the first
                    $1,000. I am so excited to know people are backing this
                    project and with me every step of the way.
                  </p>
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
