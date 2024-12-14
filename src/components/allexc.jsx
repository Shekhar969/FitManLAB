import React, { useState ,useEffect } from "react";
import RenderContentForDay from "./dayexc";
import "../App.css";

function Allexc() {
  const [selectedDate, setSelectedDate] = useState("Sun");

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };



  return (
    <div className="mainContainer">
  
      <div className="topContainerBar">
        <div onClick={() => handleDayClick("Sun")}>Sun</div>
        <div onClick={() => handleDayClick("Mon")}>Mon</div>
        <div onClick={() => handleDayClick("Tue")}>Tue</div>
        <div onClick={() => handleDayClick("Wed")}>Wed</div>
        <div onClick={() => handleDayClick("Thu")}>Thu</div>
        <div onClick={() => handleDayClick("Fri")}>Fri</div>
        <div onClick={() => handleDayClick("Sat")}>Sat</div>
      </div>
      <div>{RenderContentForDay(selectedDate)}</div>
    </div>
  );
}

export default Allexc;
