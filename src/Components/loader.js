import React from "react";
import "../App.css";

const Loader = () => {
  return (
    <div className="loader">
      <svg
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        fill="#87CEFA" // Set pale blue color
      >
        <circle cx="40" cy="10" r="8">
          <animate
            attributeName="cy"
            begin="0s"
            dur="1.5s" // Adjust the duration
            values="10;40;10"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;
