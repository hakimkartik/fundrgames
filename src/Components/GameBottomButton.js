export default function GameBottomButton() {
  return (
    <>
      <div className="container bottom-fund d-flex">
        <button type="button" className="btn btn-primary mb-4">
          Back this project
        </button>
      </div>

      <div className="container">
        <div className="game-purple-line"></div>
        <h3 className="more-by-auth">MORE BY THIS AUTHOR</h3>

        <div className="game-media-scroller">
          <div className="game-media-element">
            <img
              src="https://culturedvultures.com/wp-content/uploads/2021/10/Inscryption-1.jpg"
              alt="Inscryption game"
            />
            <p className="media-title">INSCRYPTION</p>
          </div>
          <div className="game-media-element">
            <img
              src="https://cdn.images.express.co.uk/img/dynamic/143/590x/571642_1.jpg"
              alt="Minecraft game"
            />
            <p className="media-title">MINECRAFT</p>
          </div>
          <div className="game-media-element">
            <img
              src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffez%2Fhome%2FEGS_POLYTRON_FEZ_N1_NEWSFEED_PRIMARY-2560x1440-d147cec46530772325611671d9ab1b79d134de39.jpg"
              alt="Fez game"
            />
            <p className="media-title">FEZ</p>
          </div>
          <div className="game-media-element">
            <img
              src="https://media.npr.org/assets/img/2021/04/06/kim-handshake_wide-56bfe404b79c12a190ba2f2a4b493e73ebe0998a.png"
              alt="Disco Elysium game"
            />
            <p className="media-title">DISCO ELYSIUM</p>
          </div>
        </div>
      </div>
    </>

    // <div className="container">
    //   <h4 className="mb-2">Think it looks great?</h4>
    //   <button type="button" className="btn btn-primary">
    //     Fund
    //   </button>
    //   <button type="button" className="btn btn-secondary">
    //     More by this Author
    //   </button>
    // </div>
  );
}
