import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
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
        //get router params information
        const { match: { params } } = this.props;

        fetch(`https://api.covid19api.com/total/dayone/country/${params.id}`)
            .then(res => res.json()) //convert to JSON
            .then(response => {
                this.setState({
                    //store the data in the current state
                    apiData: response,
                    loadingData: false
                })
            })

    }
    
    render() {
        //get router params information
        const { match: { params } } = this.props;
        return (
            <Container>
                {this.state.loadingData ? "loading data..." : <h1>{this.state.apiData[0].Country} <ReactCountryFlag countryCode={params.id} svg cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/" cdnSuffix="svg" title={params.id}/></h1>}
                {this.state.loadingData ? "loading data..." : <LineChart data={this.state.apiData} />}               
            </Container>
        )
    }
}

export default Detail