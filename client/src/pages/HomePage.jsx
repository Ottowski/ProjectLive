import '../styles/pages.css';
import NewsCard from "../components/NewsCard.jsx";
import EventSlider from "../components/EventSlider.jsx";
import {useContext, useEffect, useState} from "react";



export default function() {


    return (
        <div className="main-info">
            <h3 className="today-events-header">Choose a date</h3>
            <EventSlider />
        </div>
    )
}

