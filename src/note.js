//react-bootstrap-table, altnative way of making a table

import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import summaryData from '../SummaryData';

class Summary extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        console.log(this.props.data)
    }

    render() {
        const columns = [{
            dataField: 'Country',
            text: 'Country',
            headerStyle: { color: 'black' },
            sort: true
        },
        {
            dataField: 'NewRecovered',
            text: 'New Recovered',
            headerStyle: { color: '#56d143' },
            sort: true
        },
        {
            dataField: 'TotalConfirmed',
            text: 'Total Confirmed',
            headerStyle: { color: '#ebd428' },
            sort: true
        },
        {
            dataField: 'NewDeaths',
            text: 'New Deaths',
            headerStyle: { color: '#eb2828' },
            sort: true
        },
        {
            dataField: 'TotalDeaths',
            text: 'Total Deaths',
            headerStyle: { color: '#e32749' },
            sort: true
        },
        {
            dataField: 'Date',
            text: 'Last Updated',
            headerStyle: { color: '#e32749' }
        },
        ];
        return (

            <div>
                <BootstrapTable keyField='id' data={this.props.data} columns={columns} />
            </div>

        )
    }

}
export default Summary
