import CreateNav from "../Components/CreateNavBar";

export default function CreateAboutYou() {
  document.body.classList.remove('oddBody2');
  document.body.classList.remove('oddBody');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    window.location = '/create/rewards';
}  
  return (
    <>
        <CreateNav about="true"/>
        <div className="container container-fluid create-body-container">

<form action="game_create_rewards.html">

    <div className="row justify-content-evenly">
        <div className="col text-center">
            <p className=" fs-2 text fw-light">Introduce Yourself</p>
            <p className="fw-lighter fst-italic">You are the creator and everyone wants to get to know you</p>
        </div>
    </div>

    <br/>
    <hr/>
    <br/>
    <br/>
    
    <label htmlFor="basic-addon1" className="form-label fs-4 text fw-light">Your Username</label>
    <div className="input-group mb-5">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <label htmlFor="basic-addon1" className="form-label fs-4 text fw-light">Profile Picture</label>
    <div className="input-group mb-5">
      <input type="file" className="form-control" id="inputGroupFile02"/>
      <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
    </div>

    <label htmlFor="basic-url" className="form-label fs-4 text fw-light">Your vanity URL</label>
    <div className="input-group mb-5">
      <span className="input-group-text" id="basic-addon3">https://fundrgames.com/users/</span>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    </div>

    <div className="mb-5">
      <label htmlFor="FormControlTextarea1" className="form-label fs-4 text fw-light">About You</label>
      <textarea className="form-control" id="FormControlTextarea1" rows="4"></textarea>
    </div>


    <div className="row d-grid gap-2 mb-5">
      <button className="btn btn-primary" type="submit" onClick={onSubmitHandler}>Next: Rewards</button>
    </div>

</form>

</div>
    </>)
}