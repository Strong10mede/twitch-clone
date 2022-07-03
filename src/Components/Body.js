import React from "react";
import Profile from "./Profile";
import "./Body.css";
import Stream from "./Stream";

function Body() {
  return (
    <div className="body">
      <div className="body__left">
        <Stream />
        <Profile />
      </div>
      <div className="body_rightPlaceHolder"></div>
    </div>
  );
}

export default Body;
