import { useState, useContext, useEffect } from 'react'
import GlobalContext from '../routing/Context'
import { useNavigate } from "react-router-dom"

import '../styles/account.css'

export default () => {
    const { auth, logout } = useContext(GlobalContext)
    const [ next, setNext ] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if( next ){
            console.log( "test" )
            navigate("/")}})

    const handleLogout = (e) =>{
        e.preventDefault()
        logout()
        setNext(true)
    }

    return <form className="account-form">
        <label type="lable" className="account-email">{auth.email}</label>
        <div className='account-buttons'>
            <input type="submit" value="LOGOUT" className="account-submit" onClick={ handleLogout } />
        </div>
    </form>
}