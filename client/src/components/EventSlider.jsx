import "../styles/EventSlider.css"
import React, {useState, useContext} from "react"
import NewsCard from "./NewsCard.jsx";
import GlobalContext from "../routing/Context.jsx";

export default function EventSlider() {
    const [filteredResults, setFilteredResults] = useState([])
    const { concerts } = useContext(GlobalContext);
    function filterResults(e) {
        setFilteredResults(concerts.filter(concert => concert.datum === e.target.value))
        console.log(e.target.value)
        console.log(filteredResults)
    }
    return (
        <div className="event-list-parent-container">            
            <input className="dateInput" placeholder="YYYY-MM-DD" type="text" pattern="[\d-]+" onKeyUp={(e) => filterResults(e)} />            
            <div className="event-list-container">                
                {filteredResults?.map((item, index) => {
                    return(
                        <NewsCard item={item}/>                    
                    )
                }
                )}
            </div>        
        </div>                
    );
}