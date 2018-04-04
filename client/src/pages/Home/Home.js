import React, { Component } from 'react';
import API from "../../utils/API";
import "./Home.css"
import { Topic, StartYear, EndYear } from "../../components/Search";

// Home - contains all of the JSX to be rendered on the homepage. This component may contain other smaller components or JSX that renders plain HTML elements. This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

class Home extends Component {

    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear && this.state.endYear) {
            API.saveArticle({

            })
        }
    };

    render() {
        return (
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
                                    <div className="center">
                                        <button className="btn waves-efftct search-button"><span className="search-button-text">Search</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default Home;