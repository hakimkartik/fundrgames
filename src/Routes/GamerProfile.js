import userImage from "../img/PROFILE.jpg";
import { Link } from "react-router-dom";
import "../CSS/GamerProfile.css";
export default function GamerProfile() {
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="container">
        <div className="row pt-4 text-center mb-2 lilac-underline">
          <h3>PROFILE</h3>
        </div>
        <div className="row pt-4 text-center mb-2">
          <img className="prof_pic" src={userImage} alt="Gamer Picture" />
          {/* <form
            id="add_pic"
            action="prof_pic"
            method="PUSH"
            enctype="multipart/form-data"
          >
            <div class="tavola">
              <label for="id_doc">Change your profile picture</label>
              <input type="file" id="id_doc" name="id_doc" />
            </div>
            <div class="tavola">
              <button type="submit" class="green">
                Upload
              </button>
              <button type="reset" class="black">
                New upload
              </button>
            </div>
          </form> */}
          <div className="col-lg-4 profile">
            <ul>
              <li>Username: Jax Ross</li>
              {/* <li>Username: {name}</li> */}
              <br />
              <li>Email: justforgames@gmail.com</li>
              {/* <li>Email: {username}</li> */}
              <br />
              <li>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Preferred Games:</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td className="tags">Multiplayer</td>
                      <td className="tags">Strategy</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="tags">Action</td>
                      <td className="tags">Fantasy</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
          <div className="row pt-4 text-center mb-2 lilac-underline">
            <h4>YOUR LIKED GAMES</h4>
          </div>
          <div className="row pt-4 text-center m-2 games">
            <div className="scrollbar scrollbar-primary games-liked">
              <div className="force-overflow"></div>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>
                      <div className="recommended-game-box recommended-img-wrapper ">
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2.alternativeto.net%2Fdist%2Fs%2Fdisco-elysium_850024_full.jpg%3Fformat%3Djpg%26width%3D1600%26height%3D1600%26mode%3Dmin%26upscale%3Dfalse&f=1&nofb=1&ipt=7d3408b61ba45cad95b05fa857f3842b7cd7e690417d1b80544358fa5b816609&ipo=images"
                          alt="Disco Elysium"
                        />
                      </div>
                    </td>
                    <td>
                      <h5 className="text-uppercase recommended-name">
                        CELESTE
                      </h5>
                    </td>
                    <td>
                      <div className="recommended-img-wrapper recommended-game-box">
                        <Link to={"/game/1"}>
                          <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4162235.png&f=1&nofb=1&ipt=16d0abe37a29a4af0a9f1cef858d49096c2b80e471ee778e8caf93e98829a8b6&ipo=images"
                            alt="Celeste"
                          />
                        </Link>
                      </div>
                    </td>
                    <td>
                      <h5 className="text-uppercase recommended-name">
                        INCRYPTION
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row pt-4 text-center mb-2 lilac-underline">
          <h4>GAMES FUNDED</h4>
        </div>
        <br />
        <div className="col-6 paddings">
          <table className="table table-borderless games">
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>
                  <div className="recommended-img-wrapper recommended-game-box funded">
                    <img
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2021%2F06%2Finscryption-1.jpg&f=1&nofb=1&ipt=4dcdb77183c1c243285dbfec7ea711a08cde1a947a2c593203dc14e496922356&ipo=images"
                      alt="Incryption"
                    />
                  </div>
                </td>
                <td>
                  <div className="fund">
                    <ul>
                      <li className="fund-title">INSCRYPTION</li>
                      <br />
                      <li>Amount Donated: 50$</li>
                      <br />
                      <li>
                        <div className="tags_">Tier 1 funder</div>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
