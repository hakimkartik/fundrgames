import GameDetailNav from "../Components/GameDetailNav";

export default function Overview() {
  return (
    <>
      <GameDetailNav overview="true" />

      <div className="container">
        <div className="row mt-4">
          <h2>Overview</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-9 p-4 game-lilac-fill">
            <h4>Plot</h4>
            <p>
              Celeste is a platform game in which players control a young woman
              named Madeline as she makes her way up Mount Celeste while
              avoiding various deadly obstacles. Along with jumping and climbing
              up walls for a limited amount of time, Madeline has the ability to
              perform a mid-air dash in eight directions.
            </p>
            <h4>About the Game</h4>
            <ul>
              <li>Genre: fiction, thriller</li>
              <li>Audience: 15+</li>
              <li>Characters: 10</li>
              <li>Levels: 20</li>
            </ul>
            <h4>Characters</h4>
            <ul>
              <li>Main character: Madeline</li>
              <li>Villain: Part Of Her</li>
              <li>Secondary: Alessandra, Cordelia</li>
            </ul>
            <h4>The Project</h4>
            <p>
              I started this project to show young adults the power we have over
              ourselves. The doppelganger is a way to show how we have two sides
              to our personalities and we should try and let our best self
              dominate and not be scared of the “evil one” - in this case Part
              Of Her. It shows them to beat their fears.
            </p>
            <p>
              I am looking for your help to help with funding and release this
              game to the public for enjoyment purposes but also to teach adults
              about life.
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
