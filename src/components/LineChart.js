import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Tabs, Tab } from "react-bootstrap";

class LineChart extends Component {
    constructor() {
        super()
        this.state = {
            totalConfirmedData: [],
            totalRecoveredData: [],
            totalDeathsData: []
        }
    }
    componentDidMount() {
        var date = [];
        var confirmed = [];
        var recovered = [];
        var totalDeaths = [];

        //extract the data from the api
       this.props.data.map(item => {
            date.push(new Date(item.Date).toLocaleDateString())
            confirmed.push(item.Confirmed)
            recovered.push(item.Recovered)
            totalDeaths.push(item.Deaths)
        })
        
        //chart datasets
        const totalConfirmedChart = {
            labels: date,
            datasets: [
                {
                    label: 'Total Confirmed',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#3ccafa',
                    pointBorderColor: '#3ccafa',
                    pointBackgroundColor: '#3ccafa',
                    pointHoverBackgroundColor: '#3ccafa',
                    pointHoverBorderColor: '#3ccafa',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: confirmed
                },
            ]
        };

        const totalRecoveredChart = {
            labels: date,
            datasets: [
                {
                    label: 'Total Recovered',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: '#0bb519',
                    pointBorderColor: '#0bb519',
                    pointBackgroundColor: '#0bb519',
                    pointHoverBackgroundColor: '#0bb519',
                    pointHoverBorderColor: '#0bb519',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: recovered
                },
            ]
        };
        const totalDeathsChart = {
            labels: date,
            datasets: [
                {
                    label: 'Total Deaths',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'red',
                    pointBorderColor: 'red',
                    pointBackgroundColor: 'red',
                    pointHoverBackgroundColor: 'red',
                    pointHoverBorderColor: 'red',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: totalDeaths
                },
            ]
        };
        this.setState({
            totalConfirmedData: totalConfirmedChart,
            totalRecoveredData: totalRecoveredChart,
            totalDeathsData: totalDeathsChart
        })
    }
    render() {
        return (
            <div className="Chart">
                <Tabs defaultActiveKey="totalConfirmed">
                    <Tab eventKey="totalConfirmed" title="Total Confirmed">
                        <Line data={this.state.totalConfirmedData} />
                    </Tab>
                    <Tab eventKey="totalRecovered" title="Total Recovered">
                        <Line data={this.state.totalRecoveredData} />
                    </Tab>
                    <Tab eventKey="totalDeaths" title="Total Deaths">
                        <Line data={this.state.totalDeathsData} />
                    </Tab>

                </Tabs>
            </div >
        )
    }
}


export default LineChart