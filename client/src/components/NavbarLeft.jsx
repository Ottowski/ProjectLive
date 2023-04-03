import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faHome, faNewspaper, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export default function () {
    return <div className="left">
        <FontAwesomeIcon icon={faHome} className="icon"/>
        <NavLink className="button" to="/">Home</NavLink>
        <FontAwesomeIcon icon={faCalendarAlt} className="icon"/>
        <NavLink className="button" to="event">Event</NavLink>
        {/* <NavLink className="button" to="news">News</NavLink> */}
        <FontAwesomeIcon icon={faQuestionCircle} className="icon"/>
        <NavLink className="button" to="support">Support</NavLink>
    </div>
}