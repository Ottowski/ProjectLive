import '../App.css'
import MyImage from '../assets/metallica.jpeg'

export default function () {


    return <>
        <section className="main">
            <h1>THIS IS A MAINPAGE</h1>
            <div className="eventTicket">
                <img src={MyImage} alt="picture of the artist" className="eventPic"/>
                <div className="eventInfo">
                    <h3 className="artistName">{band[0].name}</h3>
                    <p>På {band[0].where} den {band[0].when}</p>
                    <p>Pris från {band[0].price}kr</p>
                </div>
            </div>
            <div className="eventTicket">
                <img src={MyImage} alt="picture of the artist" className="eventPic"/>
                <div className="eventInfo">
                    <h3 className="artistName">{band[1].name}</h3>
                    <p>På {band[1].where} den {band[1].when}</p>
                    <p>Pris från {band[1].price}kr</p>
                </div>
            </div>
            <div className="eventTicket"></div>
            <div className="eventTicket"></div>
            <div className="eventTicket"></div>
        </section>
    </>
}