import GameDetailNav from "../Components/GameDetailNav";

export default function Terms() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="game-purple-line"></div>
          <h2 className="game-page-title">Terms</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-1">
            {/* GameDetailNav be here */}
            <GameDetailNav terms="true" />
          </div>

          <div className="col-8 offset-1 p-4">
                <h4 className="bold">Terms of Use</h4>
                <ul>
                    <li>This license grants the entity 1 year of Royalty Free use for the duration of the license and is non-transferable</li>
                    <li>It can only be used for self-purposes, it cannot be shared or commercialized</li>
                    <li>You may NOT sell, share, transfer, modify or distribute any of the digital files, images, graphics or media</li>
                    <li>These files may not be modified and/or incorporated into any other project in digital or physical form for sale or distribution</li>
                </ul>
                <h4 className="bold">Risks and challenges</h4>
                <p>
                    We have been designing and distributing digital files for several years now, and all of our previous projects have been fulfilled on or before the promised fulfillment schedule. The risk with this campaign is small compared to many campaigns. There is no manufacturing or shipping so we can avoid all of these supply chain issues. All of the files undergo digital testing and many of the files have already been physically printed. All unlocked stretch goals will go through the same.
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
