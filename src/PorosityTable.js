import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PorosityTable({ deletePorosity, porosityList }) {
    // console.log(porosityList);
    return (
        <>
            <h2>Porosity Results</h2>
            <table className="table col-6 table-striped">
                <thead className="thead-dark">
                    <tr><th>Δtma</th><th>Δtlog</th><th>Δtfl</th><th>ɸS</th><th></th></tr>
                </thead>
                <tbody>
                    {porosityList ? porosityList.map(item => {
                        return (<tr key={item.id}><td>{item.matrixInt}</td><td>{item.logInt}</td><td>{item.fluidInt}</td><td>{item.sonicPor}</td><td><button onClick={() => {
                            deletePorosity(item.id)
                        }}><FontAwesomeIcon icon="trash-alt" /></button></td></tr>)
                    }) : ""
                    }
                </tbody>
            </table>
        </>
    )
}

export default PorosityTable;