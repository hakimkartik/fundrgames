import GameDetailNav from "../Components/GameDetailNav";

export default function Overview() {
  return (
    <>
      <GameDetailNav overview="true" />

      <div className="container">
        <div className="row mt-4">
          <div className="game-purple-line"></div>
          <h2 className="game-page-title">Overview</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-8 offset-1 p-4">
            <h4 className="bold">Plot</h4>
            <p>
              Celeste is a platform game in which players control a young woman
              named Madeline as she makes her way up Mount Celeste while
              avoiding various deadly obstacles. Along with jumping and climbing
              up walls for a limited amount of time, Madeline has the ability to
              perform a mid-air dash in eight directions.
            </p>
            <h4 className="bold">About the Game</h4>
            <ul>
              <li>Genre: fiction, thriller</li>
              <li>Audience: 15+</li>
              <li>Characters: 10</li>
              <li>Levels: 20</li>
            </ul>
            <h4 className="bold">Characters</h4>
            <ul>
              <li>Main character: Madeline</li>
              <li>Villain: Part Of Her</li>
              <li>Secondary: Alessandra, Cordelia</li>
            </ul>
            <h4 className="bold">The Project</h4>
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
