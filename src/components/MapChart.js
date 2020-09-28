import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

//sample dataset
//import SummaryData from "../SummaryData";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

//get stats by stat types and ISO2 Country codes
function getStats(type, countryCode, SummaryData) {
  let covidData = []
  switch (type) {
    case "NewConfirmed":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.NewConfirmed)
      return (covidData.toLocaleString());

    case "TotalConfirmed":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.TotalConfirmed)
      return (covidData.toLocaleString());

    case "NewRecovered":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.NewRecovered)
      return (covidData.toLocaleString());

    case "TotalRecovered":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.TotalRecovered)
      return (covidData.toLocaleString());

    case "NewDeaths":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.NewDeaths)
      return (covidData.toLocaleString());

    case "TotalDeaths":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.TotalDeaths)
      return (covidData.toLocaleString());

    case "LastUpdated":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.Date)
      return (new Date(covidData).toLocaleDateString());

    default:
      return "N/A"
  }
}

const MapChart = ({ setTooltipContent, data }) => {
  return (
    <>
      {console.log(data)}
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
            const { NAME, ISO_A2 } = geo.properties;
            //tooltips data, get stats by Country codes, data from the props passed down by parent (App.js)
            setTooltipContent(
              <div>
                <b>{NAME}</b>
                <br />
                        New Confirmed: {getStats("NewConfirmed", ISO_A2, data)}
                <br />
                        Total Confirmed: {getStats("TotalConfirmed", ISO_A2, data)}
                <br />
                        New Recovered: {getStats("NewRecovered", ISO_A2, data)}
                <br />
                        Total Recovered: {getStats("TotalRecovered", ISO_A2, data)}
                <br />
                        New Deaths: {getStats("NewDeaths", ISO_A2, data)}
                <br />
                        Total Deaths: {getStats("TotalDeaths", ISO_A2, data)}
                <br />
                        Last Updated: {getStats("LastUpdated", ISO_A2, data)}
              </div>
            );
          }}
                  onMouseLeave={() => {
            setTooltipContent("");
          }}
                  style={{
            default: {
              fill: "#D6D6DA",
              outline: "none"
            },
            hover: {
              fill: "#F7615E",
              outline: "none"
            },
            pressed: {
              fill: "#E42",
              outline: "none"
            }
          }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
    </ComposableMap>
    </>
  );
};

export default memo(MapChart);
