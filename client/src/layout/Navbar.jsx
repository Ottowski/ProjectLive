import Media from "react-media";
import "../styles/navbar.css"
import NavbarLeft from "../components/NavbarLeft.jsx";
import NavbarRight from "../components/NavbarRight.jsx";
import DropdownMenu from "../components/NavbarDropdown.jsx";


export default function () {
    return (
        <nav className="nav">
            <Media query="(min-width: 700px">
                {(matches) => matches ? <NavbarLeft/> : <DropdownMenu/>}
            </Media>
            <NavbarRight/>
        </nav>
    )




}