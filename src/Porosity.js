import React, { useState } from 'react';
import './App.css';
import { connect } from "react-redux";
import PorosityTable from './PorosityTable';

function Porosity({ newPorosity, porosityDelete, porosityList }) {

  // console.log(porosityList);

  const [matrixInterval, setMatrixInterval] = useState();
  const [logInterval, setLogInterval] = useState();
  const [fluidInterval, setfluidInterval] = useState();
  const [porosity, setPorosity] = useState();

  const deletePorosity = id => {
    porosityDelete(id);
  };

  const addPorosity = () => {
    newPorosity(matrixInterval, logInterval, fluidInterval, porosity);
    console.log(porosityList);
  };

  const setMatrixIntervalValue = e => {
    setMatrixInterval(Number(e.target.value));
  }

  const setLogIntervalValue = e => {
    setLogInterval(Number(e.target.value));
  }

  const setFluidIntervalValue = e => {
    setfluidInterval(Number(e.target.value));
  }

  const calculatePorosity = () => {
    setPorosity((((logInterval - matrixInterval) / (fluidInterval - matrixInterval)) * 100).toFixed(2));
  }

  return (
    <div className="porosityContainer">
      <h2>Porosity - Sonic Well Log (Wyllie et al., 1958)</h2>
      <img src="images/porosity.gif" alt="Porosity Equation" />
      <p>Where:</p>
      <ul>
        <li>ɸS= sonic porosity</li>
        <li>Δtma= matrix interval transit time</li>
        <li>Δtlog= interval transit time of the formation (from the sonic log)</li>
        <li>Δtfl= fluid interval transit time</li>
      </ul>
      <div className="porosityCalculator">
        <label htmlFor="">Δtma: <input type="number" onChange={setMatrixIntervalValue} value={matrixInterval} /> µs/ft</label><br />
        <label htmlFor="">Δtlog: <input type="number" onChange={setLogIntervalValue} value={logInterval} /> µs/ft</label><br />
        <label htmlFor="">Δtfl: <input type="number" onChange={setFluidIntervalValue} value={fluidInterval} /> µs/ft</label><br />
        <button className="btn btn-dark" onClick={calculatePorosity}>Calculate</button><br />
        <label>ɸS: <input type="number" value={porosity} disabled /> %</label><br />
        <button className="btn btn-primary" onClick={addPorosity}>Save</button>
      </div>
      <PorosityTable deletePorosity={deletePorosity} porosityList={porosityList} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    porosityList: state.porosityList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newPorosity: (matrixInt, logInt, fluidInt, sonicPor) => {
      dispatch({ type: "NEW_POROSITY", payload: { matrixInt, logInt, fluidInt, sonicPor } });
    },
    porosityDelete: id => {
      dispatch({ type: "DELETE_POROSITY", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Porosity);