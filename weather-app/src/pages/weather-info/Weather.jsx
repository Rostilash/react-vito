import React from "react";
import style from "./Weather.module.css";

export const Weather = () => {
  return (
    <div className={style.weatherMain}>
      <div className="header">
        <div className="head-logo">
          <div className="head-info"></div>
          <div className="head-info"></div>
        </div>
      </div>
      <div className="weather-info"></div>
      <div className="weather-footer"></div>
    </div>
  );
};
