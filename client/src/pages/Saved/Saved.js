import React, { Component } from 'react';
import "./Saved.css";
import API from "../../utils/API";
import RemoveBtn from "../../components/RemoveBtn";
import { SavedListItem, SavedList } from "../../components/SavedList";

class Saved extends Component {

    state = {
        savedArticles: []
    };

    componentDidMount() {
        this.loadSavedArticles();
      }

    loadSavedArticles = () => {
        console.log("Loaded")
        API.fetchSavedArticles()
            .then(res => this.setState({ savedArticles: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="row">
                <div className="col s10 offset-s1">
                    <div className="saved-panel z-depth-4 center">
                        <h3 className="saved-header center-align">Saved Articles</h3>
                        {/* if there are articles saved, then display */}
                        {this.state.savedArticles ? (
                            <SavedList>
                                {/* display articles in list format on page */}
                        {this.state.savedArticles.map(savedArticles => {
                                return (
                                    
                                    <SavedListItem key={savedArticles._id}>
                                        <p className="saved-headline">{savedArticles.title}</p>
                                        <a className="saved-url" href={savedArticles.url} target="_blank">Go To Article</a>
                                        <RemoveBtn onClick={() => 
                                            {
                                                API.deleteArticles(savedArticles._id).then(this.loadSavedArticles)
                                            }} />
                                    </SavedListItem>
                                    
                                )
                            })}
                            </SavedList>
                        ) : (
                            // If there are no articles in db
                            <p>No Results to Display</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;