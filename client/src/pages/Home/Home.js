import React, { Component } from 'react';
import API from "../../utils/API";
import "./Home.css"
import { Topic, StartYear, EndYear } from "../../components/Search";
import SearchBtn from "../../components/SearchBtn";
import SaveBtn from "../../components/SaveBtn";
import Results from "../../pages/Results";
import Saved from "../../pages/Saved";
import { ResultsListItem, ResultsList } from '../../components/ResultsList';

// Home - contains all of the JSX to be rendered on the homepage. This component may contain other smaller components or JSX that renders plain HTML elements. This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

class Home extends Component {

    //create states for search parameters
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    //set states on inputs
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //runs search from the new york times if all forms are filled
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("clicked");
        if (this.state.topic && this.state.startYear && this.state.endYear) {
            API.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
                .then(res => {
                    console.log(res.data);
                    this.setState({ articles: res.data });
                })
                .catch(err => console.log(err));
            API.fetchArticles(this.state.articles);
        }
    };

    render() {
        return (
            <div className="everything">
                <div className="top-information">
                    <div className="col s12">
                        <div className="header">
                            <h1 className="header-text center-align">New York Times Scrubber</h1>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="divider-panel">
                            <div className="divider"></div>
                            <div className="divider-text center-align">Search for and annotate articles from the internet</div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    < div className="row" >
                        <div className="col s10 offset-s1">
                            <div className="card">
                                <div className="search-panel z-depth-4">
                                    <h3 className="search-text center-align card-title">Search</h3>
                                    <div className="search-inputs">
                                        <Topic
                                            value={this.state.topic}
                                            onChange={this.handleInputChange}
                                            name="topic"
                                        />
                                        <StartYear
                                            value={this.state.startYear}
                                            onChange={this.handleInputChange}
                                            name="startYear"
                                        />
                                        <EndYear
                                            value={this.state.endYear}
                                            onChange={this.handleInputChange}
                                            name="endYear"
                                        />
                                        <SearchBtn
                                            onClick={this.handleFormSubmit}
                                            type="submit"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                {!this.state.articles ? (
                    <h1>No Articles Found</h1>
                ) : (
                        <div className="row">
                            <div className="col s10 offset-s1">
                                <div className="results-panel z-depth-4 center">
                                    <h3 className="results-header center-align">Results</h3>
                                    <ResultsList>
                                        {this.state.articles.map(articles => {
                                            return (
                                                <ResultsListItem key={articles._id}>
                                                    <p>{articles.title}</p>
                                                    <a href={articles.url} target="_blank">Go To Article</a>
                                                    {/* <p>Published on: {articles.pub_date}</p> */}
                                                    <SaveBtn onClick={() => this.saveArticle(articles._id)}/>
                                                </ResultsListItem>
                                            );
                                        })}
                                    </ResultsList>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default Home;