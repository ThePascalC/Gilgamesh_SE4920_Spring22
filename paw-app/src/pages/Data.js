import "./CssPages/Data.css";
import React, { Component, useState } from 'react';

const Data = (props) => {

  const populationValues = ["Low", "Medium", "High", "Packed"];
  const qualityValues = ["Poor", "Average", "Great"];

  console.log(props)
  

  return (
      <section className="con">
      <div className="Park">
        <h1 className="ParkName">Old Drum's Best Friends Dog Park</h1>
        <h2>Population: {populationValues[props.population]}</h2>
        <h2>Quality: {qualityValues[props.quality]}</h2>
        <h2 className="ParkRating">5/5</h2>
      </div>
      <div className="Park">
        <h1 className="ParkName">Best Friends Dog Park</h1>
        <h2 className="ParkRating">2/5</h2>
      </div>
      <div className="Park">
        <h1 className="ParkName">Dogwood Park</h1>
        <h2>Quality: {qualityValues[props.quality]}</h2>
      </div>
    </section>
  );
}

export default Data;