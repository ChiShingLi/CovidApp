import React, { Component } from "react"

import { Card, Table, Container, InputGroup, FormControl } from 'react-bootstrap';

class Summary extends Component {
    constructor() {
        super()
        this.state = {
            covidSummaryData: ["Loading Data..."]        
        }
        //bind sortBy function, because of setState
        this.searchCountry = this.searchCountry.bind(this)
    }
    componentDidMount() {
        const dataArray = this.props.data.map(covidSummaryData => {
            return (
                <tr key={covidSummaryData.Country}>
                    <td><a href={`/Detail/${covidSummaryData.CountryCode}`}>{covidSummaryData.Country}</a></td>
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

    searchCountry(event) {
        //compare the data and input in lowercases
        let country = this.props.data.filter(item => item.Country.toLowerCase().includes(event.target.value.toString().toLowerCase()))
        console.log(country[0])

        //output result on search term found
        let output = country.map(ResultItem => {
            return (
                    <tr key={ResultItem.Country}>
                        <td><a href={`/Detail/${ResultItem.CountryCode}`}>{ResultItem.Country}</a></td>
                        <td>{ResultItem.NewConfirmed.toLocaleString()}</td>
                        <td>{ResultItem.TotalConfirmed.toLocaleString()}</td>
                        <td>{ResultItem.NewRecovered.toLocaleString()}</td>
                        <td>{ResultItem.NewDeaths.toLocaleString()}</td>
                        <td>{ResultItem.TotalDeaths.toLocaleString()}</td>
                        <td>{new Date(ResultItem.Date).toLocaleDateString()}</td>
                    </tr>
            )
        })
        //update the table with the output result
        this.setState({
            covidSummaryData: output
        })
    }

    render() {
        return (
            <Container>
                <h1>World COVID-19 Stats</h1>
                <Card>
                    <Card.Body>
                        <InputGroup size="sm" className="mb-3">
                            <FormControl aria-label="Large" placeholder="Search Country Name..." onChange={this.searchCountry} />
                        </InputGroup>
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