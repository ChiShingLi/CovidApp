import React, { Component, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import SummaryData from "../SummaryData";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


//get stats by stat types and ISO2 Country codes
function getStats(type, countryCode) {
  let covidData = []
  switch (type) {
    case "NewConfirmed":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.NewConfirmed)
      return (covidData);

    case "TotalConfirmed":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.TotalConfirmed)
      return (covidData);

    case "NewRecovered":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.NewRecovered)
      return (covidData);

    case "TotalRecovered":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.TotalRecovered)
      return (covidData);

    case "NewDeaths":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.NewDeaths)
      return (covidData);

    case "TotalDeaths":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.TotalDeaths)
      return (covidData);

    case "LastUpdated":
      covidData = SummaryData.filter(data => data.CountryCode === countryCode)
        .map(x => x.Date)
     return(new Date(covidData).toLocaleDateString());

    default:
      return "N/A"
  }
}


const MapChart = ({ setTooltipContent }) => {
  return (
    <>
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

                    //tooltips data, get stats by Country codes
                    setTooltipContent(
                      <div>
                        <b>{NAME}</b>
                        <br />
                        New Recovered: {getStats("NewRecovered", ISO_A2)}
                        <br />
                        Total Confirmed: {getStats("TotalRecovered", ISO_A2)}
                        <br />
                        New Deaths: {getStats("NewDeaths", ISO_A2)}
                        <br />
                        Total Deaths: {getStats("TotalDeaths", ISO_A2)}
                        <br />
                        Last Updated: {getStats("LastUpdated", ISO_A2)}
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
                      fill: "#F53",
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
