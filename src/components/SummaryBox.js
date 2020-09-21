import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

class SummaryBox extends Component {
    constructor() {
        super()
        this.state = {
            summary: ["Loading..."],
            loadingData: true
        }
    }
    //get world total stats
    componentDidMount() {
        fetch("https://api.covid19api.com/world/total")
            .then(response => response.json())
            .then(response => this.setState({
                summary: response,
                loadingData: false
            }))
    }
    render() {
        return (
            <div className="row">
                <Container className="d-flex justify-content-center">
        <Card className="bg-success text-white" style={{ padding: 15, margin: 10, fontSize: 25 }}><b>Total Recovered</b> <span style={{ textAlign: "center", fontSize: 50}}>{this.state.summary.TotalRecovered != null ? this.state.summary.TotalRecovered.toLocaleString() : null}</span></Card>
                    <Card className="bg-info text-white" style={{ padding: 15, margin: 10 , fontSize: 25}}><b>Total Confirmed</b> <span style={{ textAlign: "center", fontSize: 50 }}>{this.state.summary.TotalConfirmed != null ? this.state.summary.TotalConfirmed.toLocaleString() : null}</span></Card>
                    <Card className="bg-danger text-white" style={{ padding: 15, margin: 10 , fontSize: 25}}><b>Total Deaths</b> <span style={{ textAlign: "center", fontSize: 50 }}>{this.state.summary.TotalDeaths != null ? this.state.summary.TotalDeaths.toLocaleString() : null}</span></Card>
                </Container>
            </div >
        )
    }
}

export default SummaryBox