import "./CssPages/Data.css";
import React, { Component, useState } from 'react';

function Data() {
  

  return (
    <section>
      <div className="Park">
        <h1 className="ParkName">Old Drum's Best Friends Dog Park</h1>
        <h2 className="ParkRating">5/5</h2>
      </div>
      <div className="Park">
        <h1 className="ParkName">Best Friends Dog Park</h1>
        <h2 className="ParkRating">2/5</h2>
      </div>
      <div className="Park">
        <h1 className="ParkName">Dogwood Park</h1>
        <h2 className="ParkRating">4/5</h2>
      </div>
    </section>
  );
}

export default Data;