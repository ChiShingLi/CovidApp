import React from "react"

import { Card, CardImg, Table } from 'react-bootstrap';

function Summary(props) {

    //convert the props into array of elements
    //format the date with Date()
    const dataArray = props.data.map(covidData => {
        return (
            <tr key={covidData.Country}>
                <td>{covidData.Country}</td>
                <td>{covidData.TotalConfirmed.toLocaleString()}</td>
                <td>{covidData.NewRecovered.toLocaleString()}</td>
                <td>{covidData.NewDeaths.toLocaleString()}</td>
                <td>{covidData.TotalDeaths.toLocaleString()}</td>
                <td>{new Date(covidData.Date).toLocaleDateString()}</td>
            </tr>
        )
    })

    return (
        <div>
            <Card>
                <CardImg top width="100%" src="placeholder.jpg" />
                <Card.Body>
                    <Table striped bordered hover size="sm" style={{ width: "50%" }}>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th style={{color: "#56d143"}}>New Recovered</th>
                                <th style={{color: "#ebd428"}}>Total Confirmed</th>
                                <th style={{color: "#eb2828"}}>New Deaths</th>
                                <th style={{color: "#e32749"}}>Total Deaths</th>                            
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataArray}
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>
        </div >
    )



}



export default Summary