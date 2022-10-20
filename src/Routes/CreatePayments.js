import CreateNav from "../Components/CreateNavBar";

export default function CreatePayments() {
  document.body.classList.remove('oddBody2');
  document.body.classList.remove('oddBody');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    window.location = '/create/launch';
}  
    return (
    <>
        <CreateNav payments="true"/>
        <div className="container container-fluid create-body-container">

<form action="game_create_launch.html">

    <div className="row justify-content-evenly">
        <div className="col text-center">
            <p className=" fs-2 text fw-light">Link a Bank Account</p>
            <p className="fw-lighter fst-italic">Receive funding accordingly as the project reaches it goal</p>
        </div>
    </div>

    <br/>
    <hr/>
    <br/>
    <br/>
    

    <div className="mb-5 row">
      <label htmlFor="exampleFormControlInput1" className="form-label fw-light fs-4 text">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    <button type="button" className="btn btn-outline-secondary">Send Verification</button>
    </div>

    <p className="text-center fw-light fst-italic text-danger">Once verified, you will be redirected to Stripe to set-up your banking accoount.</p>

    <br/>
    <br/>

    <h4 className="mb-3">Chekout Form</h4>

    <p className="w-light fs-4 text">Payment</p>

      <div className="my-3">
        <div className="form-check">
          <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
          <label className="form-check-label" for="credit">Credit card</label>
        </div>
        <div className="form-check">
          <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
          <label className="form-check-label" for="debit">Debit card</label>
        </div>
        <div className="form-check">
          <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
          <label className="form-check-label" for="paypal">PayPal</label>
        </div>
      </div>

      <div className="row gy-3">
        <div className="col-md-6">
          <label htmlFor="cc-name" className="form-label">Name on card</label>
          <input type="text" className="form-control" id="cc-name" placeholder="" required/>
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback">
            Name on card is required
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="cc-number" className="form-label">Credit card number</label>
          <input type="text" className="form-control" id="cc-number" placeholder="" required/>
          <div className="invalid-feedback">
            Credit card number is required
          </div>
        </div>

        <div className="col-md-3">
          <label htmlFor="cc-expiration" className="form-label">Expiration</label>
          <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
          <div className="invalid-feedback">
            Expiration date required
          </div>
        </div>

        <div className="col-md-3">
          <label htmlFor="cc-cvv" className="form-label">CVV</label>
          <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
          <div className="invalid-feedback">
            Security code required
          </div>
        </div>
      </div>


    <br/>
    <br/>
    <br/>
    
    <div className="row d-grid gap-2 mb-5">
      <button className="btn btn-primary" type="submit" onClick={onSubmitHandler}>Next: Launch</button>
    </div>

</form>
        </div>
    </>)
}