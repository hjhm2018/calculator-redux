import React, { useState } from 'react';
import './App.css';

function Conversions() {

  const [meters, setMeters] = useState();
  const [miles, setMiles] = useState();
  const [kilometers, setKilometers] = useState();

  const setMetersValue = e => {
    setMeters(e.target.value)
  }

  const setMilesValue = e => {
    setMiles(e.target.value)
  }

  const setKilometersValue = e => {
    setKilometers(e.target.value)
  }

  return (
    <div className="conversionsContainer">
      {/* <h2>{value.conversionTitle}</h2> */}
      <table className="table table-striped col-6">
        <thead className="thead-dark">
          <tr><th colSpan="2">Convert</th><th rowSpan="2">Multiply by</th></tr>
          <tr><th>from</th><th>to</th></tr>
        </thead>
        <tbody className="table-striped">
          <tr><td>Meters</td><td>Feet</td><td>3.281</td></tr>
          <tr><td>Miles</td><td>Feet</td><td>5.280</td></tr>
          <tr><td>Kilometers</td><td>Miles</td><td>0.621</td></tr>
        </tbody>
      </table>

      <h3>Convert</h3>
      <table className="table col-4 table-striped">
        <thead className="thead-dark">
          <tr><th colSpan="2">Convert</th></tr>
        </thead>
        <tbody>
          <tr><td>Meters: <input type="number" value={meters} onChange={setMetersValue} /> </td><td>Feet: <input type="number" value={meters * 3.281} disabled /></td></tr>
          <tr><td>Miles: <input type="number" value={miles} onChange={setMilesValue} /></td><td>Feet: <input type="number" value={miles * 5.280} disabled /></td></tr>
          <tr><td>Kilometers: <input type="number" value={kilometers} onChange={setKilometersValue} /></td><td>Miles: <input type="number" value={kilometers * 0.621} disabled /></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Conversions;