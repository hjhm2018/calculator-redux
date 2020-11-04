import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BmiTable({ deleteBMI, bmiList }) {
    // console.log(bmiList)
    return (
        <>
            <h1>Body Mass Index (BMI) Results</h1>
            <table className="table table-dark col-6 mb-2 table-striped table-bordered">
                <thead className="thead-dark">
                    <tr><th>Height</th><th>Weight</th><th>BMI</th><th></th></tr>
                </thead>
                <tbody>
                    {bmiList ? bmiList.map(item => {
                        return (<tr key={item.id}><td>{item.heightValue}</td><td>{item.weightValue}</td><td>{item.bmiValue}</td><td><button title="Delete" onClick={() => {
                            deleteBMI(item.id)
                        }}><FontAwesomeIcon icon="trash-alt" /></button></td></tr>)
                    }) : ""
                    }
                </tbody>
            </table>
        </>
    )
}

export default BmiTable;