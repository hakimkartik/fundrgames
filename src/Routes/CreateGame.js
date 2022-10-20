import CreateNav from "../Components/CreateNavBar";

export default function CreateGame(props) {
    document.body.classList.remove('oddBody2');
    document.body.classList.remove('oddBody');
    const onSubmitHandler = (event) => {
        event.preventDefault();
        window.location = '/create/story';
    }
    return (
        <>
        <CreateNav groundwork="true"/>

		<div className="container container-fluid create-body-container">
        <form>
<div className="row justify-content-evenly">
    <div className="col text-center">
        <p className=" fs-2 text fw-light">Create Your Game</p>
        <p className="fw-lighter fst-italic">Make a profile for your game and give it a unique name.</p>
    </div>
</div>

<br />
<hr />
<br />
<br />

<div className="row mb-5">
    <label htmlFor="FormControlInput1" className="form-label fs-4 text fw-light">Game Title</label>
    <input className="form-control" type="text" id="FormControlInput1" aria-label="game title"/>
</div>

 <div className="row mb-5">
    <label htmlFor="FormControlInput2" className="form-label fs-4 text fw-light">Subtitle</label>
    <input className="form-control" type="text" id="FormControlInput2" aria-label="Subtitle"/>
</div>

<div className="row mb-5">
    <label htmlFor="FormControlInput3" className="form-label fs-4 text fw-light">Primary Category</label>
    <select className="form-select" aria-label="primary category" id="FormControlInput3" defaultValue={0}>
      <option value="0">-Choose-</option>
      <option value="1">Sandbox</option>
      <option value="2">Real-time strategy (RTS)</option>
      <option value="3">Shooters (FPS and TPS)</option>
      <option value="4">Multiplayer online battle arena (MOBA)</option>
      <option value="5">Role-playing (RPG, ARPG, and More)</option>
      <option value="6">Simulation and sports</option>
      <option value="7">Puzzlers and party games</option>
      <option value="8">Action-adventure</option>
      <option value="9">Survival and horror</option>
      <option value="10">Platformer</option>
      <option value="11">Other</option>
    </select>
</div>

<div className="row mb-5">
    <label htmlFor="FormControlInput4" className="form-label fs-4 text fw-light">Sub Category</label>
    <select className="form-select" aria-label="sub category" id="FormControlInput4" defaultValue={0}>
      <option value="0">-Choose-</option>
      <option value="1">Sandbox</option>
      <option value="2">Real-time strategy (RTS)</option>
      <option value="3">Shooters (FPS and TPS)</option>
      <option value="4">Multiplayer online battle arena (MOBA)</option>
      <option value="5">Role-playing (RPG, ARPG, and More)</option>
      <option value="6">Simulation and sports</option>
      <option value="7">Puzzlers and party games</option>
      <option value="8">Action-adventure</option>
      <option value="9">Survival and horror</option>
      <option value="10">Platformer</option>
      <option value="11">Other</option>
    </select>
</div>

<div className="row input-group mb-5">
    <label htmlFor="FormControlInput5" className="form-label fs-4 text fw-light">Project Image</label>
    <input type="file" className="form-control" id="FormControlInput5"/>
</div>

<div className="row input-group mb-5">
    <label htmlFor="FormControlInput5" className="form-label fs-4 text fw-light">Project Media</label>
    <input type="file" className="form-control" id="FormControlInput5"/>
</div>

<div className="row d-grid gap-2 mb-5">
  <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Next: About You</button>
</div>

</form>
</div>
        </>
    )
}