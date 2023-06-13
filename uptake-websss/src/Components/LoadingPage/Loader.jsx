import React from 'react'
import { PropagateLoader } from "react-spinners";
import "./Loader.css"
function Loader() {
  return (
    <div className="loaderHead">
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
    </div>
  );
}

export default Loader