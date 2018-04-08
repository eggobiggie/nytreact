import React, { Component } from 'react';
import "./Saved.css";
import API from "../../utils/API";
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
                        {this.state.savedArticles ? (
                            <SavedList>
                        {this.state.savedArticles.map(savedArticles => {
                                return (
                                    
                                    <SavedListItem key={savedArticles._id}>
                                        <p>{savedArticles.title}</p>
                                        <a href={savedArticles.url} target="_blank">Go To Article</a>
                                    </SavedListItem>
                                    
                                )
                            })}
                            </SavedList>
                        ) : (
                            <p>No Results to Display</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;