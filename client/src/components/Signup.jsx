import { useState, useContext } from 'react'
import GlobalContext from '../routing/Context'
import { useNavigate } from 'react-router-dom'

import '../styles/signup.css'

export default () =>{

    const { submitSignup, submitLogin, auth } = useContext(GlobalContext)
    let navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ password2, setPassword2 ] = useState("")
    const [ message, setMessage ] = useState( "" )

    const handleSubmit = (e) => { 
        let test = null
        e.preventDefault()
        if( password !== password2 ){
            setMessage("Passwords dont match.")
        }else if( email === "" || password === "" || password2 === "") {
            setMessage("A field is still empty.")
        }else {
            submitSignup(email, password)
            let event = '/'
            navigate(event)
        }}

    return <form className="signup-form" onSubmit={handleSubmit}>
        <input type="email" className="signup-input" placeholder="enter email address" onChange={ (e) => setEmail(e.target.value) } />
        <input type="password" className="signup-input" placeholder="enter password" onChange={ (e) => setPassword(e.target.value) } />
        <input type="password" className="signup-input" placeholder="re-type password" onChange={ (e) => setPassword2(e.target.value) } />
        <input type="submit" className="signup-submit" value="SIGNUP" />
        <p className="signup-message">{message}</p>
    </form>
}