import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import { Container } from "react-bootstrap";


function SummaryMap(props) {
    const [content, setContent] = useState("");

    return (
        <div>
            <Container>
                <MapChart setTooltipContent={setContent} data={props.data} />
                <ReactTooltip>{content}</ReactTooltip>
            </Container>
        </div>
    )


}

export default SummaryMap