import React, { Component, useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import { Container } from "react-bootstrap";


function SummaryMap() {
    const [content, setContent] = useState("");

    return (
        <div>
            <Container><MapChart setTooltipContent={setContent} /></Container>
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    )


}

export default SummaryMap