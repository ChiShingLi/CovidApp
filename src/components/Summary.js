import React, { Component } from "react"

import { Card, Table, Container } from 'react-bootstrap';

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
                    <td><a href= {`/Detail/${covidSummaryData.CountryCode}`}>{covidSummaryData.Country}</a></td>
                    <td>{covidSummaryData.NewConfirmed.toLocaleString()}</td>
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
            <Container>
                <h1>World COVID-19 Stats</h1>
                <Card>
                    <Card.Body>
                        <Table striped bordered hover size="sm" >
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th style={{ color: "#bf7171" }}>New Confirmed</th>
                                    <th style={{ color: "#cfa534" }}>Total Confirmed</th>
                                    <th style={{ color: "#56d143" }}>New Recovered</th>
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
            </Container>
        )
    }
}
export default Summary