import React, { useContext } from "react";
import RadioButton from "./RadioButton";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";
import "../styles/selectMovie.css";

const SelectMovieButton = () => {
  const context = useContext(BsContext);

  const { movie, changeMovie } = context;

  // Function to handle movie selection
  const handleChangeMovie = (value) => {
    changeMovie(value);

    // Set the selected movie in localStorage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select Movie</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => (
          <RadioButton
            text={el}
            changeSelection={handleChangeMovie}
            data={movie}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default SelectMovieButton;
