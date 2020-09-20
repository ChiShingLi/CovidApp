import React, { Component } from "react";

import Summary from "./components/Summary";

import SummaryMap from "./components/SummaryMap";

//example dataset
//import SummaryData from "./SummaryData";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loadingData: true,
      apiData: []
    }
  }

  //fetch the API data, when page loads
  componentDidMount() {
    //https://api.covid19api.com/summary
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json()) //convert to JSON
      .then(response => {
        this.setState({
          //store the data in the current state
          apiData: response,
          loadingData: false
        })
        //console.log(this.state.apiData)
        //console.log(this.state.loadingData)
      })
    

    //use an example data set first
    // this.setState({
    //   apiData: SummaryData,
    //   loadingData: false
    // })
  }
  //API CALL
  //        {this.state.loadingData ? <h1>Fetching Data</h1> : <Summary data={this.state.apiData.Countries} />}

  //SAMPLE TEST
  //        {this.state.loadingData ? <h1>Fetching Data</h1> : <Summary data={this.state.apiData} />}
  render() {
    return (
      <div>
        <SummaryMap data={this.state.apiData.Countries}/>    
        {this.state.loadingData ? <h1>Fetching Data...</h1> : <Summary data={this.state.apiData.Countries} />}
      </div>
    )
  }

}
export default App