import React from "react";
import "./../dist/css/spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      {console.log("loading")}
      <div className="loading-spinner">
      </div>
    </div>
  );
}