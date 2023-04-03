import { useContext, useEffect } from "react"
import GlobalContext from "../routing/Context"

import "../styles/eventpage.css"

export default () => {
    const { concerts, filtered, setFiltered } = useContext(GlobalContext)

    const optionsName = Array.from( new Set( filtered.map ((item)=>item.name ))).sort()
    const optionsDate = Array.from( new Set( filtered.map ((item)=>item.datum ))).sort()

    const sortName = (e) =>{
        e.preventDefault()
        const sort = filtered.filter( item => item.name === e.target.value )
        setFiltered( sort )
    }
    const sortDate = (e) =>{
        e.preventDefault()
        const sort = filtered.filter( item => item.datum === e.target.value )
        setFiltered( sort )
    }

    return <div className="event-filter">
        <select className="event-sort" onChange={sortName}>
            {/* <option selected="selected">Name</option> */}
            {optionsName.map( item => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
        <select className="event-sort" onChange={sortDate}>
            {/* <option selected="selected">Date</option> */}
            {optionsDate.map( item => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
        <div className="event-reset" onClick={()=>{ setFiltered( concerts )}}>Reset</div>
    </div>
    }