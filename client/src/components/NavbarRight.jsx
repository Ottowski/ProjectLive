import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignIn, faUser} from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import {Link} from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import GlobalContext from "../routing/Context";

export default function () {
    
    const [ loginForm, setLoginForm ] = useState( null )
    console.log( "TEST", loginForm )
    const { auth } = useContext(GlobalContext)

    useEffect( ()=>{
        setLoginForm( null )
    },[])

    const handleLogin = () => {
        if( loginForm === null ){ 
            setLoginForm( <Login setForm={ setLoginForm } />)
        }else{ setLoginForm( null ) }}

    const HandleLoggedin = () =>{
        if( !auth.loggedIn ){
            return <div className="right">
                        { loginForm }
                        <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
                        <Link className="button" onClick={ handleLogin }>Login</Link>
                        <p className="buttonP">or</p>
                        <FontAwesomeIcon icon={faSignIn} className="icon"></FontAwesomeIcon>
                        <Link className="button" to="signup">Sign up</Link>
                    </div>
        }else{
            return <div className="right">
                        <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
                        <Link className="user-name" to="account">Account</Link>
                    </div>}}


    return <HandleLoggedin />
}
