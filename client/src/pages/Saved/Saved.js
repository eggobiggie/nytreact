import React, { Component } from 'react';
import "./Saved.css"
import RemoveBtn from "../../components/RemoveBtn";
import { SavedList, SavedListItem, DateSaved } from "../../components/SavedList";

// Saved - Renders articles that are saved in the MongoDB and allows the user to visit the article's url or delete it from the MongoDB. This page may be made up of multiple smaller components or JSX that renders plain HTML elements.

class Saved extends Component 
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
                <div className="saved-panel z-depth-4 center">
                    <h3 className="saved-header center-align">Saved Articles</h3>
                    <SavedList>
                        <SavedListItem>
                            <DateSaved />
                            <RemoveBtn />
                        </ SavedListItem>
                    </ SavedList>
                </div>
            </div>
        </div>
        )
    }
}

export default Saved;