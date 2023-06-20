import PreviousBooking from "../Components/LastBookingData";
import SelectMovieButton from "../Components/SelectMovieButton";
import SelectSeats from "../Components/SelectSeats";
import TimeSchedule from "../Components/TimeSchedule";
import "../styles/Home.css";
import BsContext from "../Context/BsContext";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
  } = context;

  //check whether any seat has a negative value
  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  //check whether all seats have input 0
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  //validating the user selection and then making post request to save the booking details
  const handleBookNow = () => {
    if (!movie) {
      toast.error('Please select  a movie!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else if (!time) {
      toast.error('Please select a time slot!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } 
    else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      toast.error('Invalid Seats!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      //validation successfull
      handlePostBooking();
      toast.success('Booking successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
              <SelectMovieButton />
            </div>
            <div className="last_booking_details_container">
              <PreviousBooking />
            </div>
          </div>
          <div className="time_seats_container">
            <TimeSchedule />
            <SelectSeats />
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn ">
              Book Now 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
