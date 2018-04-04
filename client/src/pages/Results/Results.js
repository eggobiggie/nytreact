import React, { Component } from 'react';
import "./Results.css"
import SaveBtn from "../../components/SaveBtn";
import { ResultsList, ResultsListItem } from "../../components/ResultsList";

class Results extends Component 
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return ( 
        <div className="row">
            <div className="col s10 offset-s1">
                <div className="results-panel z-depth-4 center">
                    <h3 className="results-header center-align">Results</h3>
                    <ResultsList>
                        <ResultsListItem>
                            <SaveBtn />
                        </ ResultsListItem>
                    </ ResultsList>
                </div>
            </div>
        </div>
        )
    }
}

export default Results;