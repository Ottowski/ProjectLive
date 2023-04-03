import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return <div className="button" onClick={handleClick}>
        Menu
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <NavLink className="button" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="button" to="event">Event</NavLink>
            </li>
            <li>
                <NavLink className="button" to="support">Support</NavLink>
            </li>
        </ul>
    </div>

}
