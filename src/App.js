import React, { Component } from "react"

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

    fetch("https://api.covid19api.com/summary")
      .then(res => res.json()) //convert to JSON
      .then(response => {
        this.setState({
          //store the data in the current
          apiData: response,
          loadingData: false
        })
        console.log(this.state.apiData)
        console.log(this.state.loadingData)
      })
  }


  render() {
    return (
      <div>
        {this.state.loadingData ? <h1>Fetching Data</h1> : <h1>done loading</h1>}
      </div>
    )
  }

}




export default App