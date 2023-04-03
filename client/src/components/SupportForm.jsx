import SupportMailSent from "../components/SupportMailSent"
import {useState} from "react";

export default function () {
    const [click, setClick] = useState(false);
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        if (text === '' || email === '') {
            setError('You have to enter both issue and E-mail')
        } else {
            setClick(true)
            setError('')
        }
    }

    return !click ?
        <form className="supportForm">
            <textarea className="supportText" placeholder="Explain your issue here"
                      onChange={(e) => setText(e.target.value)}></textarea>
            <label className="supportEmail">E-mail</label>
            <input type="email" className="inputEmail" placeholder={'yourEmail@email.com'} onChange={(e) => setEmail(e.target.value)}/>
            <input type="submit" className="ticketButton" value="Send" onClick={handleClick}/>;
            <p className="errorMessage">{error}</p>
        </form> : <SupportMailSent/>
}