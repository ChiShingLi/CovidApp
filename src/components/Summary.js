import React from "react"

import { Table } from 'react-bootstrap';

function Summary(props) {

    //convert the props into array of elements
    const dataArray = props.data.map(covidData => {
        return (
            <tr key={covidData.id}>
                <td>{covidData.Country}</td>
                <td>{covidData.TotalDeaths}</td>
                <td>{covidData.TotalConfirmed}</td>
            </tr>
        )
    })

    return (
        <div>
            <Table striped bordered hover size ="sm" style={{width: "50%"}}>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Total Deaths</th>
                        <th>Total Confirmed</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray}
                </tbody>
            </Table>
        </div >
    )



}



export default Summary