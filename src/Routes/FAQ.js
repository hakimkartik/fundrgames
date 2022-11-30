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
          <h2>Frequently Asked Questions (FAQ)</h2>
        </div>

        <div className="row m-4 d-flex">
          <div className="col-1">
            {/* GameDetailNav be here */}
            <GameDetailNav faq="true" />
          </div>

          <div className="col-9 p-4 game-lilac-fill position-relative">
            <div className="card question-box mt-4">
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

            <div className="card question-box">
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

            <div className="new-question">
              <h6 className="mb-2">Don't see your question?</h6>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#newquestionModal"
                data-bs-whatever="@getbootstrap"
                onClick={handleShow}
              >
                Ask now
              </button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>What is your question?</Modal.Header>
              <Modal.Body>
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
