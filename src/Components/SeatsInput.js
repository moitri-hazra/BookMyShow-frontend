import React from "react";
import "../styles/seats.css";

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {
  // Function to handle seat selection
  const handleSeatSelection = (text) => {
    changeSeats(text);
  };

  // Function to handle seat quantity change
  const handleSeatQuantityChange = (e) => {
    const updatedNoOfSeat = { ...noOfSeat, [e.target.name]: Number(e.target.value) };
    changeNoOfSeats(updatedNoOfSeat);

    // Save seats to localStorage
    window.localStorage.setItem("seats", JSON.stringify(updatedNoOfSeat));
  };

  return (
    <div
      name={text}
      className={`form-check-label seats ${seat === text ? "active" : "inactive"}`}
      id={`${index}text`}
      onClick={() => {
        handleSeatSelection(text, index);
      }}
    >
      <span className={"text"}>{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={handleSeatQuantityChange}
      />
    </div>
  );
};

export default SeatsInput;
