import '../styles/pages.css'
import {Link} from "react-router-dom";
import {useContext} from "react"
import GlobalContext from "../routing/Context"

export default function ({item}){
    const {setSelectItem} = useContext(GlobalContext)
    return <Link onClick={() => setSelectItem({item})} to="../MoreInfo" className="ticketButton">More info</Link>
}