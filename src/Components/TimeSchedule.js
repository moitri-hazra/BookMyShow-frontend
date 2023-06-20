import React, { useContext } from "react";
import RadioButton from "./RadioButton";
import { slots } from "../data";
import "../styles/TimeSchedule.css";
import BsContext from "../Context/BsContext";

const TimeSchedule = () => {
  const context = useContext(BsContext);

  const { time, changeTime } = context;

  // Function to handle time slot selection
  const handleChangeTimeOnSubmit = (value) => {
    changeTime(value);

    // Set the selected time slot in localStorage
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select Schedule</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => (
            <RadioButton
              text={el}
              changeSelection={handleChangeTimeOnSubmit}
              data={time}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeSchedule;
