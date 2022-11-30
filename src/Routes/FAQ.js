import "../CSS/GameFAQ.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import GameDetailNav from "../Components/GameDetailNav";

export default function FAQ() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="game-purple-line"></div>
          <h2 className="game-page-title">FAQ</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-1">
            {/* GameDetailNav be here */}
            <GameDetailNav faq="true" />
          </div>

          <div className="col-8 offset-1 pr-4 pl-4 position-relative">
            <div className="card updates-card faq-question-box">
              <div className="card-body">
                <h5 className="card-title question-text">
                  What is the purpose of this game?
                </h5>
                <p className="card-text">
                  The purpose of this game is to have fun, climb mountains and
                  learn about indie games.
                </p>
              </div>
            </div>

            <div className="card updates-card faq-question-box">
              <div className="card-body">
                <h5 className="card-title question-text">
                  What is the ideal age to play this game?
                </h5>
                <p className="card-text">
                  The recommended age for this video game is ages 15+.
                  Nevertheless, it is up to the user to determine if they feel
                  right playing.
                </p>
              </div>
            </div>

            <div className="card updates-card faq-question-box faq-question-button">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#newquestionModal"
                data-bs-whatever="@getbootstrap"
              >
                Ask away
              </button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="modal-title fs-5">What is your question?</Modal.Header>
              <Modal.Body className="model-content">
                <form>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">
                      Question:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClose}
                >
                  Submit
                </button>
              </Modal.Footer>
            </Modal>
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
