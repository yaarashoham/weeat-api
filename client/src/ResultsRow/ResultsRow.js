import React from "react";
import './ResultsRow.css';
import FilterableRestaurantsTable from "./FilterableRestaurantsTable";

function ResultsRow(props) {
    return (
        <div className="results-row">
            <div className="results-col">
                <FilterableRestaurantsTable restaurants={props.restaurants}/>
            </div>
            <div id="map">

            </div>
        </div>
    );
}

export default ResultsRow;