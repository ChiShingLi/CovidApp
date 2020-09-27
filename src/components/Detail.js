import React, { Component } from "react";
import { Container } from "react-bootstrap";

import LineChart from "./LineChart";

//Detail page with more detailed analytics about a country 
class Detail extends Component {
    constructor() {
        super()
        this.state = {
            apiData: [],
            loadingData: true
        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;

        fetch(`https://api.covid19api.com/total/dayone/country/${params.id}`)
            .then(res => res.json()) //convert to JSON
            .then(response => {
                this.setState({
                    //store the data in the current state
                    apiData: response,
                    loadingData: false
                })
                //console.log(this.state.apiData[0].Country)
            })
    }
    render() {
        return (
            <Container>
                {this.state.loadingData ? "loading data..." : <h1>{this.state.apiData[0].Country}</h1>}
                {this.state.loadingData ? "loading data..." : <LineChart data={this.state.apiData} />}               
            </Container>
        )
    }
}

export default Detail