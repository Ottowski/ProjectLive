import { useState, useContext } from 'react'
import GlobalContext from '../routing/Context'

import Input from './parts/Input'
import Form from './parts/Form'

import '../styles/signup.css'

export default () => {

    const { register } = useContext(GlobalContext)

    const [ email, setEmail ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ submit, setSubmit ] = useState("")
    const [ error, setError ] = useState( null )

    const handleSubmit = (e) => { 
        e.preventDefault()
        if( email === "" || password === "" ){
            setError("Fill all fields")
        }else { setError( null )
            submitLogin(email, password)}
    }

    return <Form classname="login-form" onsubmit={handleSubmit}>
        <Input type="email" classname="login-input" onchange={ (e) => setEmail(e.target.value) } />
        <Input type="password" classname="login-input" onchange={ (e) => setPassword(e.target.value) } />
        <Input type="submit" classname="login-submit" />
        <p className="login-error">{error}</p>
    </Form>
}