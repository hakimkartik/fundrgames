import GameDetailNav from "../Components/GameDetailNav";
export default function Updates() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="game-purple-line"></div>
          <h2 className="game-page-title">Updates</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-1">
            <GameDetailNav updates="true" />
          </div>

          <div className="col-8 offset-1 pl-4 pr-4">
            <div className="card updates-card p-2">
              <div className="row mt-2">
                <div className="col-11">
                  <h4 className="card-title update-title">50% funded in 3 days!</h4>
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
                    src="https://virtualpiano.net/wp-content/uploads/2020/08/Lena-Raine-Artist-on-Virtual-Piano-Play-Piano-Online.jpg"
                  />
                </div>
                <div className="col-10 d-flex justify-content-start align-items-center">
                  <h5>Lena Raine</h5>
                  <span className="author-tag">Author</span>
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

            <div className="card updates-card p-2 mt-4">
              <div className="row mt-2">
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
                    src="https://virtualpiano.net/wp-content/uploads/2020/08/Lena-Raine-Artist-on-Virtual-Piano-Play-Piano-Online.jpg"
                  />
                </div>
                <div className="col-10 d-flex justify-content-start align-items-center">
                  <h5>Lena Raine</h5>
                  <span className="author-tag">Author</span>
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
