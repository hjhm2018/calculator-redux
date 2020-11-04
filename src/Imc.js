import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";
import BmiTable from './BmiTable';

function Imc({ newBMI, bmiDelete, bmiList }) {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [imc, setImc] = useState(0);

  const setHeightValue = e => {
    setHeight(parseFloat(e.target.value));
  }

  const setWeightValue = e => {
    setWeight(parseFloat(e.target.value));
  }

  const deleteBMI = id => {
    bmiDelete(id);
  };

  const addBMI = (heightValue, weightValue, bmiValue) => {
    newBMI(height, weight, imc)
    // console.log(bmiList);
  };

  useEffect(() => {
    setImc(parseFloat(weight / Math.pow(height / 100, 2)).toFixed(4));
  }, [weight, height]);

  const bmiRanges = weight / Math.pow(height / 100, 2);

  return (
    <div className="BMIContainer">
      <h2>Body Mass Index (BMI)</h2>
      <img style={{ border: "1px solid black", borderRadius: "5px", marginBottom: "10px", width: "25%" }} src="images/measuretape.jpeg" alt="BMI" /><br />

      <table class="table table-dark col-4 mb-2 table-striped table-bordered">
        <thead>
          <tr>

            <th scope="col">BMI</th>
            <th scope="col">Condition</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td>&lt; 18.5</td>
            <td>Underweight</td>

          </tr>
          <tr>

            <td>18.5 - 24.9</td>
            <td>Normal</td>

          </tr>
          <tr>

            <td>25 - 29.9</td>
            <td>Overweight</td>

          </tr>

          <tr>

            <td>30 - 34.9</td>
            <td>Obese</td>

          </tr>

          <tr>

            <td>&gt; 35</td>
            <td>Extremely Obese</td>

          </tr>
        </tbody>
      </table>

      <label htmlFor="height">Height: <input id="height" type="number" onChange={setHeightValue} value={height} /> cm</label><br />
      <label htmlFor="weight">Weight: <input id="weight" type="number" onChange={setWeightValue} value={weight} /> Kg</label><br />
      <label>BMI: <input type="number" value={imc} disabled /></label><br />
      <button className="btn btn-primary" onClick={addBMI}>Save</button>
      {/* Messages */}
      {bmiRanges < 18.5 ? <p>You are underweight</p> : ""}
      {bmiRanges >= 18.5 && bmiRanges <= 24.9 ? <p>Normal Weight</p> : ""}
      {bmiRanges >= 25 && bmiRanges <= 29.9 ? <p>You are overweight</p> : ""}
      {bmiRanges >= 30 ? <p>Obesity</p> : ""}
      <BmiTable deleteBMI={deleteBMI} bmiList={bmiList} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bmiList: state.bmiList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newBMI: (heightValue, weightValue, bmiValue) => {
      dispatch({ type: "NEW_BMI", payload: { heightValue, weightValue, bmiValue } });
    },
    bmiDelete: id => {
      dispatch({ type: "DELETE_BMI", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Imc);