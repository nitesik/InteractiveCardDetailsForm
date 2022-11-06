import "./styles.css";
import { useState } from "react";
import icon_complete from "./images/icon-complete.svg";


function Home() {

  const [number, setNumber] = useState("0000000000000000");
  const [name, setName] = useState("JANE APPLESEED");
  const [expiryMonth, setExpiryMonth] = useState("00");
  const [expiryYear, setExpiryYear] = useState("00");
  const [cvc, setCvc] = useState("000")
  const [submitted, setSubmitted] = useState(false);

  function creditCardFormat() {
    let newNumber = "";
    for (let i = 0; i < number.length; i++) {
      if (i % 4 == 0) {
        newNumber += " ";
      }
        
      newNumber += number[i];
    }

    return newNumber;
  }
  
  function handleSubmit(event : any) {
    event.preventDefault();
    setSubmitted(true);
  }
  
  return (
    <div className="container">
      <div className="images">
        <div className="card">
          <div className="front-card">
            <div className="inner-front-card">
              <div className="logo">
                <div className="fill-circle"></div>
                <div className="outline-circle"></div>
              </div>
              <div className="front-card-details">
                <div className="card-number">
                  {creditCardFormat()}
                </div>
                <div className="card-detail">
                  <div className="card-name">
                    {name.toUpperCase()}
                  </div>
                  <div className="card-expiry">
                    {expiryMonth}/{expiryYear}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="back-card">
            <div className="card-cvc">{cvc}</div>
          </div>
        </div>
      </div>
      {submitted ? <div className="completed">
        <div className="inner-completed">
          <img src={icon_complete} alt="completed" />
          <div className="thank-you">THANK YOU!</div>
          <div className="added">We've added your card details</div>
          <button onClick={() => {window.location.reload()}}>Continue</button>
        </div>
      </div> : <div className="details">
        <form action="" onSubmit={handleSubmit}>
          <label>CARDHOLER NAME</label>
          <input required placeholder="e.g. Jane Appleseed" type="text" onChange={(e) => setName(e.target.value)} maxLength={25} />
          <label>CARD NUMBER</label>
          <input required placeholder="e.g. 1234 5678 9123 0000" type="tel" maxLength={16} onChange={(e) => setNumber((e.target.value).toString())}/>
          <div className="personal">
            <div className="expiry">
              <label>EXP. DATE (MM/YY)</label>
              <div>
                <input required placeholder="MM" type="tel" maxLength={2} onChange={(e) => setExpiryMonth((e.target.value).toString())} />
                <input required placeholder="YY" type="tel" maxLength={2} onChange={(e) => setExpiryYear((e.target.value).toString())} />
              </div>
            </div>
            <div className="cvc">
              <label>CVC</label>
              <input required placeholder="e.g. 123" type="tel" maxLength={3} onChange={(e) => setCvc((e.target.value).toString())} />
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>}
    </div>
  )
}

export default Home;