import React, { Component } from 'react';
import API from "../../utils/API";
import "./Home.css"
import { Topic, StartYear, EndYear } from "../../components/Search";
import SearchBtn from "../../components/SearchBtn";
import SaveBtn from "../../components/SaveBtn";
import { ResultsListItem, ResultsList } from "../../components/ResultsList";
import Saved from "../Saved";

export default class Home extends React.Component {

    //create states for search parameters
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: "",
        savedArticles: []
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
        if (this.state.topic && this.state.startYear && this.state.endYear) {
            API.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
                .then(res => {
                    API.fetchArticles()
                        .then(res => {
                            this.setState({ articles: res.data });
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
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
                            <div className="divider-text center-align">Search for and save articles from the internet</div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    < div className="row" >
                        <div className="col s10 offset-s1">
                            <div className="card">
                                <div className="search-panel z-depth-4">
                                    <h3 className="search-text center-align card-title">Search</h3>
                                    <div className="search-inputs">
                                    {/* grab input from user */}
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
                                        {/* run search on submit and add to db */}
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
                <div className="row">
                    <div className="col s10 offset-s1">
                        <div className="results-panel z-depth-4 center">
                            <h3 className="results-header center-align">Results</h3>
                            {/* //if there are articles from search and db, then display */}
                            {!this.state.articles ? (
                                // if there are no articles found
                                <h1>No Articles Found</h1>
                            ) : (
                                //display results on screen in list
                                    <ResultsList>
                                        {this.state.articles.map(articles => {
                                            return (
                                                <ResultsListItem key={articles._id}>
                                                    <p className="articles-headline">{articles.title}</p>
                                                    {/* <p className="article-date">Published on: {articles.pub_date}</p> */}
                                                    <a className="articles-url" href={articles.url} target="_blank">Go To Article</a>
                                                    <SaveBtn onClick={() => API.saveArticles(articles._id)
                                                    }/>
                                                    {/* // Need to run load articles somehow so that they reload when the save happens */}  
                                                </ResultsListItem>
                                            );
                                        })}
                                    </ResultsList>
                                )}
                        </div>
                    </div>
                </div>
               <Saved savedArticles={this.state.savedArticles} />
            </div>
        );
    }
}

// export default Home;