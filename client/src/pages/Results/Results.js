import React, { Component } from 'react';
import "./Results.css"
import SaveBtn from "../../components/SaveBtn";

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
                    <div className="dummy-article-panel z-depth-2">
                        <p className="dummy-headline left-align">Things are great in the world<SaveBtn /></p>
                    </div>
                    <div className="dummy-article-panel z-depth-2">
                        <p className="dummy-headline left-align">Things are great in the world<SaveBtn /></p>
                    </div>
                    <div className="dummy-article-panel z-depth-2">
                        <p className="dummy-headline left-align">Things are great in the world<SaveBtn /></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Results;