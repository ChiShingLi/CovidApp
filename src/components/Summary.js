import React, { Component } from "react"

import { Card, CardImg, Table } from 'react-bootstrap';

class Summary extends Component {
    constructor() {
        super()
        this.state = {
            covidSummaryData: ["Loading Data..."]
        }
        //bind sortBy function, because of setState

    }
    componentDidMount() {
        const dataArray = this.props.data.map(covidSummaryData => {
            return (
                <tr key={covidSummaryData.Country}>
                    <td>{covidSummaryData.Country}</td>
                    <td>{covidSummaryData.TotalConfirmed.toLocaleString()}</td>
                    <td>{covidSummaryData.NewRecovered.toLocaleString()}</td>
                    <td>{covidSummaryData.NewDeaths.toLocaleString()}</td>
                    <td>{covidSummaryData.TotalDeaths.toLocaleString()}</td>
                    <td>{new Date(covidSummaryData.Date).toLocaleDateString()}</td>
                </tr>
            )
        })
        this.setState({
            covidSummaryData: dataArray
        })
    }


    render() {
        //convert the props into array of elements
        //format the date with Date()
        // const dataArray = this.props.data.map(covidSummaryData => {
        //     return (
        //         <tr key={covidSummaryData.Country}>
        //             <td>{covidSummaryData.Country}</td>
        //             <td>{covidSummaryData.TotalConfirmed.toLocaleString()}</td>
        //             <td>{covidSummaryData.NewRecovered.toLocaleString()}</td>
        //             <td>{covidSummaryData.NewDeaths.toLocaleString()}</td>
        //             <td>{covidSummaryData.TotalDeaths.toLocaleString()}</td>
        //             <td>{new Date(covidSummaryData.Date).toLocaleDateString()}</td>
        //         </tr>
        //     )
        // })
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="placeholder.jpg" />
                    <Card.Body>
                        <Table striped bordered hover size="sm" style={{ width: "50%" }}>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th style={{ color: "#56d143" }} >New Recovered</th>
                                    <th style={{ color: "#ebd428" }} >Total Confirmed</th>
                                    <th style={{ color: "#eb2828" }}>New Deaths</th>
                                    <th style={{ color: "#e32749" }}>Total Deaths</th>
                                    <th>Last Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/**display all the table data in the array */}
                                {this.state.covidSummaryData}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}
export default Summary