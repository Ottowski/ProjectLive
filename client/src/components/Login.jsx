import { useState, useContext } from 'react'
import GlobalContext from '../routing/Context'

import '../styles/login.css'


export default ( {setForm} ) =>{

    const { submitLogin, auth, users, isLoading } = useContext(GlobalContext)

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState( null )

    const handleSubmit = (e) => { 
        e.preventDefault()

        let result = users.filter( item => item.email === email )
        console.log( result, users )

        if( email === "" || password === "" ){
            setError("Fill all fields")
        }else { while(isLoading){ pass }
            result = submitLogin(email, password)
        if( auth.loggedIn ){
            setError( null )
            setForm( null )
        }else { setError( "No match." )
                console.log(result)} }}
    
    return <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" className="login-input" placeholder="enter email address" onChange={ (e) => setEmail(e.target.value) } />
        <input type="password" className="login-input" placeholder="enter email password" onChange={ (e) => setPassword(e.target.value) } />
        <input type="submit" className="login-submit" value="LOGIN" />
        <p className="login-error">{error}</p>
    </form>
}

