import React, { useContext, useState } from "react";
import GlobalContext from "../routing/Context";
import ArtistInfoButton from "./ArtistInfoButton";
import BuyTicket from "./BuyTicket";
import '../styles/eventpage.css'

export default () => {
    const [startDate, setStartDate] = useState("Select Date From");
    const [endDate, setEndDate] = useState("Select Date To");
    const { concerts } = useContext(GlobalContext);

    const sortHours = Array.from(new Set(concerts.map((item) => item.hour)));
    sortHours.sort(function(a, b) {
        return a.localeCompare(b);
    });

    console.log(sortHours)
    const data = Array.from(new Set(concerts.map((item) => item.datum)));
    data.sort((a, b) => new Date(a) - new Date(b))


    const filteredDate = concerts.filter(concert => {
        return (startDate === "Select Date From" || new Date(concert.datum) >= new Date(startDate))
            && (endDate === "Select Date To" || new Date(concert.datum) <= new Date(endDate))
    });


    filteredDate.sort((a, b) => new Date(a.datum + " " + a.hour + ":" + a.minute) - new Date(b.datum + " " + b.hour + ":" + b.minute));



    console.log(startDate)

    return (
        <div>
            <div className="select-container">
                <select value={startDate} className="select-date" onChange={event => setStartDate(event.target.value)}>
                    <option >Select Date From</option>
                    {data.map(date => (
                        <option key={date} value={date}>
                            {date}
                        </option>
                    ))}
                </select>

                <select value={endDate} className="select-date" onChange={event => setEndDate(event.target.value)}>
                    <option >Select Date To</option>
                    {data.map(date => (
                        <option key={date} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </div>

            <div className="event-card-container" >
                {filteredDate.map(item => (
                    <div className="event-card" key={item.id}>
                        <div className="event-left" >
                            <img className="event-image" src={item.image} />
                            <div className="event-info" >
                                <h2 className="event-artist" >{item.name}</h2>
                                <h3 className="event-venue" >{item.venue}</h3>
                                <h3 className="event-date" >{item.date}</h3>
                            </div>
                        </div>
                        <div className="event-right" >
                            <ArtistInfoButton item={item} />
                            <BuyTicket />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

