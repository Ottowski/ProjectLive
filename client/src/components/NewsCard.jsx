import '../styles/NewsCard.css'
import {Link} from "react-router-dom";
import {useContext} from "react"
import GlobalContext from "../routing/Context"

import ArtistInfoButton from './ArtistInfoButton';

export default function ({item}){
    const {setSelectItem} = useContext(GlobalContext)
    
    return (
        <div className="event-container">
            <div className="event-info">
                <h3>{item.name}</h3>
                <p>{item.venue}</p>
                <ArtistInfoButton item={item} />
                {/* <Link onClick={(e) => setSelectItem({item})} to="MoreInfo" className="infoButton">More info</Link> */}
            </div>
            <div className="event-image">
                <img src={item.image} />
            </div>
        </div>
    );
}