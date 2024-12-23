import React, { useState } from "react";
import RenderContentForDay from "./dayexc";   
import "../App.css";

function Allexc() {
  const [selectedDate, setSelectedDate] = useState(null);  
  const [isBarHidden, setIsBarHidden] = useState(false);

  const handleDayClick = (event) => {
    const clickedDay = event.target.dataset.day; 
    if (clickedDay) {
      setSelectedDate(clickedDay);
      setIsBarHidden(true);
    }
  };

  return (
    <div className="mainContainer">
      {!isBarHidden && (
        <div className="topContainerBar" onClick={handleDayClick}>
          <div data-day="Sun">Sun</div>
          <div data-day="Mon">Mon</div>
          <div data-day="Tue">Tue</div>
          <div data-day="Wed">Wed</div>
          <div data-day="Thu">Thu</div>
          <div data-day="Fri">Fri</div>
          <div data-day="Sat">Sat</div>
        </div>
      )}

      <div>{RenderContentForDay(selectedDate)}</div>
    </div>
  );
}

export default Allexc;
