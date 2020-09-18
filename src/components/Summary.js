import React from "react"

import { Card, CardImg, Table } from 'react-bootstrap';

function Summary(props) {

    //convert the props into array of elements
    //format the date with Date()
    const dataArray = props.data.map(covidData => {
        return (
            <tr key={covidData.Country}>
                <td>{covidData.Country}</td>
                <td>{covidData.NewRecovered}</td>
                <td>{covidData.NewDeaths}</td>
                <td>{covidData.TotalDeaths}</td>
                <td>{covidData.TotalConfirmed}</td>
                <td>{Date(covidData.Date)}</td>
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
                                <th>New Recovered</th>
                                <th>New Deaths</th>
                                <th>Total Deaths</th>
                                <th>Total Confirmed</th>
                                <th>last Updated</th>
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