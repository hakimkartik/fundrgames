import GameDetailNav from "../Components/GameDetailNav";

export default function Terms() {
  return (
    <>
      <GameDetailNav terms="true" />
      <div className="container">
        <div className="row mt-4">
          <h2>Terms</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-9 p-4 game-lilac-fill">
            <h4>Terms of Use</h4>
            <ul>
              <li>
                This license grants the entity 1 year of Royalty Free use for
                the duration of the license and is non-transferable
              </li>
              <li>
                It can only be used for self-purposes, it cannot be shared or
                commercialized
              </li>
              <li>
                You may NOT sell, share, transfer, modify or distribute any of
                the digital files, images, graphics or media
              </li>
              <li>
                These files may not be modified and/or incorporated into any
                other project in digital or physical form for sale or
                distribution
              </li>
            </ul>
            <h4>Risks and challenges</h4>
            <p>
              We have been designing and distributing digital files for several
              years now, and all of our previous projects have been fulfilled on
              or before the promised fulfillment schedule. The risk with this
              campaign is small compared to many campaigns. There is no
              manufacturing or shipping so we can avoid all of these supply
              chain issues. All of the files undergo digital testing and many of
              the files have already been physically printed. All unlocked
              stretch goals will go through the same.
            </p>
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
