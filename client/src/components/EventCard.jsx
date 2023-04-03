import React, {useContext, useState} from "react";
import BuyTicket from '../components/BuyTicket';
import ArtistInfoButton from "./ArtistInfoButton";
import DateFilter from "../components/DateFilter"
export default ({ dateStart, setDateStart, dateEnd, setDateEnd }) => {
    return <div className="eventDiv">

        <DateFilter />

    </div>

}