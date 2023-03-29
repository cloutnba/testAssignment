import './Subscribe.scss';
import {useState} from "react";


//I decided to separate this component as a separate one so that it can be reused.
const Subscribe = () => {
    const [emailInputValue, setEmailInputValue] = useState('');

    const emailInputHandler = (e) => {
        setEmailInputValue(e.target.value);
    }

  return(
      <>
          <h3 className="footer__title subscribe__title">Join Our Newsletter</h3>
          <div className="subscribe__input-wrapper">
              <input type="email" className="subscribe__input" placeholder="Write email"
                     value={emailInputValue} onChange={emailInputHandler}/>
              <button type="submit" className="subscribe__button">Subscribe</button>
          </div>
          <div className="subscribe__text">*  Will send you weekly updates for  your {<br/>} better tool management.</div>
      </>
  )
}

export default Subscribe;