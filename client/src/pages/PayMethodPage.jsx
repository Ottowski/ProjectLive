import {React, useState} from 'react';
import cardImage from "../images/tickets.png"
import "../styles/paymethod.css"
import {Link} from 'react-router-dom'
import imageVisa from "../images/visa.png"
import imageChip from "../images/chip.png"


export default function () {
    const [cvv, setCvv] = useState("CVV")
    const [cardNum, setCardNum] = useState("################")
    const [name, setName] = useState("FULL NAME")
    const [month, setMonth] = useState("MM")
    const [year, setYear] = useState("YY")

    //counter value *
    const [counter, setCounter] = useState(0);

    //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
    //decrease counter, not lower than 0 in if statement
  const decrease = () => {
    if (counter > 0) {
    setCounter(count => count - 1);
}
  };
 
    //reset counter 
  const reset = () =>{
    setCounter(0)
  }
  
  const [ error, setError ] = useState( null )
  const [ confirming, setConfirming ] = useState( null )

  const handleSubmit = (e) => {  
    e.preventDefault()
      if( cvv === "CVV" || cardNum === "################" || name === "FULL NAME" 
      || month === "MM" || year == "YY" ||counter === 0){
          setError("Fill all forms")
      } else {
        setError(null)
        setConfirming("Your ticket is booked, You will receive an e-mail.\nRedirecting to homepage..." )
        setTimeout(() => window.location = "/", 7000)
      }
    }

    return (
        <div className='bodyBox'>
            <div className="counter">
            <h2>Select how many tickets</h2>
            <span className="counter__output">{counter}</span>
                <div className="btn__container">
                    <button className="control__btn" onClick={increase}>+</button>
                    <button className="control__btn" onClick={decrease}>-</button>
                    <button className="reset" onClick={reset}>Reset</button>
                    <div className='price'>To Pay: {counter * 120}Kr.</div>
                </div>
            </div>

            
            <div className='container'>
                <div className='card-container'>
                    <div className='front'>
                        <div className='image'>
                            <img src={imageVisa} alt=""></img>
                            <img src={imageChip} alt=""></img>
                        </div>
                        <div className='card-number-box'>{cardNum}</div>
                        <div className='flexbox'>
                            <div className='box'>
                                <span>card holder</span>
                                <div className='card-holder-name'>{name}</div>
                            </div>
                            <div className='box'>
                                <span>expires</span>
                                <div className='expiration'></div>
                                <span className='exp-month'>{month} </span>
                                <span className='exp-year'> {year}</span>
                                <div className='cvv-box'>{cvv}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="" >
                    <div className='inputBox'>
                        <span>card number</span>
                        <input type="text" maxLength="16" className="card-number-input" onChange={(e) => setCardNum(e.target.value)}></input>
                    </div>
                    <div className='inputBox'>
                        <span>card holder</span>
                        <input type="text" className="card-holder-input" onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className='flexbox'>
                        <div className='inputBox'>
                            <span>expiration mm</span>
                            <select name="" id="" className='month-input' onChange={(e) => setMonth(e.target.value)}>
                                <option value="month" selected disabled>MONTH</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className='inputBox'>
                            <span>expiration yy</span>
                            <select name="" id="" className='year-input' onChange={(e) => setYear(e.target.value)}>
                                <option value="month" selected disabled>YEAR</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div className='inputBox'>
                            <span>cvv</span>
                            <div>
                                <input type="text" maxLength="3" className='cvv-input' onChange={(e) => setCvv(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <p className="login-error">{error}</p>
                    <p className="login-confirming">{confirming}</p>
                    <Link to="/event" ><input onClick={handleSubmit}  type="submit" value="submit" className='submit-btn'></input></Link>
                </form>
            </div>
        </div>
    )
}