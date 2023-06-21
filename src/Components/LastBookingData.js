// import statements for the necessary dependencies and stylesheets
import React, { useContext, useEffect, useState } from "react";
import "../styles/bookingDetails.css";
import { seats } from "../data";
import Loader from "./loader";
import BsContext from "../Context/BsContext";

const LastBookingDetail = (props) => {
  // Getting movie and change movie components from the context.
  const [lastBooking, setLastBooking] = useState("");
  const [loader, setLoader] = useState(false);
  const context = useContext(BsContext);
  const { lastBookingDatas } = context;

  //getLastRecord function is an asynchronous function that fetches data from a specific URL. It sets the loader state to true initially, makes the API call using fetch, and then updates the lastBooking state with the received data. If an error occurs during the API call, it is logged to the console.
  const getLastRecord = async () => {
    try {
      setLoader(true);
      const res = await fetch(
        "https://bookmyshow-api.onrender.com/api/booking",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setLastBooking(data.data);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  //useEffect hook is used to call the getLastRecord function when the lastBookingDatas changes. This ensures that the API is called whenever there is a change in the lastBookingDatas value.
  useEffect(() => {
    getLastRecord(); //calling get last booking api
  }, [lastBookingDatas]);

  //JSX code that defines the component's UI
  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {loader ? (
        <Loader />
      ) : lastBooking ? (
        <div>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => {
                return (
                  <li className="seat_value" key={index}>
                    {seat}:{" "}
                    {Number(lastBooking ? lastBooking?.seats[seat] : "")}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBooking?.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBooking?.movie}</span>
          </p>
        </div>
      ) : (
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetail;
