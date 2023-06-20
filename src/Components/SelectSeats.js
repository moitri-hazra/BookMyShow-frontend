import React, { useState, useContext } from "react";
import { seats } from "../data";
import "../styles/selectSeats.css";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]); // State variable to store selected seats
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats } = context;

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats</h1>
        <div className="SS_main_container">
          {seats.map((el, index) => {
            return (
              <SeatsInput
                seat={seat} // Pass selected seats as props
                key={index}
                index={index}
                changeSeats={changeSeats} // Pass the changeSeats function to update selected seats
                noOfSeat={noOfSeat}
                text={el ?? ""}
                changeNoOfSeats={changeNoOfSeats} // Pass the changeNoOfSeats function to update the number of seats
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
