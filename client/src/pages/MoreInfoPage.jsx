import {useContext} from "react"
import GlobalContext from "../routing/Context"
import BuyTicket from "../components/BuyTicket"    

import "../styles/moreInfo.css"
export default function () {
    const {selectItem}= useContext(GlobalContext)
    console.log(selectItem)
    return (
        <div className="App">
            <h1 className="moreInfo-head">Artist info</h1>
            {Object.keys(selectItem).map((keys)=> {
                return(
                    <div className="info-container">
                        <div className="imageBand">
                            <img src={selectItem[keys].image}/>
                            <div className="moreinfo-about">
                                <h2 className="moreinfo-head">About the artist</h2>
                                <p className="moreinfo-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae libero dolorum mollitia fugit nemo minima, ipsa, nobis dignissimos aliquid fugiat excepturi ullam illo harum optio, delectus exercitationem accusamus blanditiis aperiam.</p>
                            </div>
                        </div>
                        <table>
                            <thead>
                            <tr>
                                <th colSpan="4" className="border-top"><h2>Information</h2></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border-right"><h3>Name</h3></td>
                                <td><h3>Date</h3></td>
                                <td><h3>Place</h3></td>
                            </tr>
                            <tr>
                                <td className="border-right">{selectItem[keys].name}</td>
                                <td>{selectItem[keys].date}</td>
                                <td>{selectItem[keys].venue}</td>
                                <td><BuyTicket /></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )

            })}
        </div>
    );
}
